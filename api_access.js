var rawdata = null;
var details = "";

var state = {
    'querySet': null,

    'page': 1,
    'rows': 5,
    'window': 5,
}

function searchAPI() {
    
    var parameters = document.getElementById("search").value;
    
    if (parameters == "") {
        
        document.getElementById("response").innerHTML = "<br>NOT FOUND";
    } else {
        
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function() {
            
            if (this.readyState == 4 && this.status == 200) {
                //alert("here");
                rawdata = null;
                details = "";

                rawdata = JSON.parse(this.responseText);
                state.querySet = rawdata.meals;
                buildTable();
                
                //console.log(details);
                //document.getElementById("detailsTable").innerHTML = details;

            }
        };
        xmlhttp.open("GET","https://www.themealdb.com/api/json/v1/1/search.php?s="+parameters,true);
        xmlhttp.send();
    }
    return false;

}

function pagination(querySet, page, rows) {

    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows
    //console.log(querySet.length);
    var trimmedData = querySet.slice(trimStart, trimEnd)

    var pages = Math.round(querySet.length / rows);

    return {
        'querySet': trimmedData,
        'pages': pages,
    }
}

function pageButtons(pages) {
    var wrapper = document.getElementById('pagination-wrapper')

    wrapper.innerHTML = ``
	//console.log('Pages:', pages)

    var maxLeft = (state.page - Math.floor(state.window / 2))
    var maxRight = (state.page + Math.floor(state.window / 2))

    if (maxLeft < 1) {
        maxLeft = 1
        maxRight = state.window
    }

    if (maxRight > pages) {
        maxLeft = pages - (state.window - 1)
        
        if (maxLeft < 1){
        	maxLeft = 1
        }
        maxRight = pages
    }
    
    

    for (var page = maxLeft; page <= maxRight; page++) {
    	wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
    }

    if (state.page != 1) {
        wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
    }

    if (state.page != pages) {
        wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
    }

    $('.page').on('click', function() {
        $('#detailsTable').empty()

        state.page = Number($(this).val())

        buildTable()
    })

}


function buildTable() {
    
    var table = $('#detailsTable')

    var data = pagination(state.querySet, state.page, state.rows)
    
    var myList = data.querySet

    for (var i = 1 in myList) {
        
        var j = 0;
        var straux = "";
        var ingr = [myList[i].strIngredient1, myList[i].strIngredient2, myList[i].strIngredient3, myList[i].strIngredient4, myList[i].strIngredient5, myList[i].strIngredient6, myList[i].strIngredient7, myList[i].strIngredient8, myList[i].strIngredient9, myList[i].strIngredient10, myList[i].strIngredient11, myList[i].strIngredient12, myList[i].strIngredient13, myList[i].strIngredient14, myList[i].strIngredient15, myList[i].strIngredient16, myList[i].strIngredient17, myList[i].strIngredient18, myList[i].strIngredient19, myList[i].strIngredient20];
        var measr = [myList[i].strMeasure1, myList[i].strMeasure2, myList[i].strMeasure3, myList[i].strMeasure4, myList[i].strMeasure5, myList[i].strMeasure6, myList[i].strMeasure7, myList[i].strMeasure8, myList[i].strMeasure9, myList[i].strMeasure10, myList[i].strMeasure11, myList[i].strMeasure12, myList[i].strMeasure13, myList[i].strMeasure14, myList[i].strMeasure15, myList[i].strMeasure16, myList[i].strMeasure17, myList[i].strMeasure18, myList[i].strMeasure19, myList[i].strMeasure20];
        
        while (j<20 && ingr[j]!="" && ingr[j]!=null) {
            straux = straux + measr[j] + " " + ingr[j] + ", ";
            j = j + 1;
        } 

        var row = `<tr>
                  <td>${myList[i].strMeal}</td>
                  <td>${myList[i].strCategory}</td>
                  <td>${myList[i].strArea}</td>
                  <td><a href="url">${myList[i].strYoutube}</a></td>
                  <td>${straux}</td>
                  <td>${myList[i].strInstructions}</td>
                  <td class=\"tg-0pky\"> <img src=${myList[i].strMealThumb} width=\"200\" height=\"200\"> </td>
                  `
        table.append(row)
    }

    pageButtons(data.pages)
}