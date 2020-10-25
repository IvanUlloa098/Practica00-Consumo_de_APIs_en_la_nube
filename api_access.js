var data = null;

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
            //alert("llegue "+this.status);
            if (this.readyState == 4 && this.status == 200) {
                //alert("here");
                data = JSON.parse(this.responseText);
                details = "";
                //console.log(data);
                //console.log(data.meals[0].strMeal);
                //console.log(data.meal[0]);    

                for(var i=0; i < data.meals.length; i++){
                    console.log(data.meals[i].strMeal);
                    details += "<tr>"+
                        "<td>" + data.meals[i].strMeal + "</td>" +
                        "<td>" + data.meals[i].strDrinkAlternate + "</td>" +
                        "<td>" + data.meals[i].strCategory + "</td>" +
                        "<td>" + data.meals[i].strArea + "</td>" +
                        "<td>" + data.meals[i].strInstructions + "</td>" +
                        "<td> <img src=" + data.meals[i].strMealThumb + " width=\"100\" height=\"100\"> </td>" +
                        "</tr>";
                }
                console.log(details);
                document.getElementById("detailsTable").innerHTML = details;

            }
        };
        xmlhttp.open("GET","https://www.themealdb.com/api/json/v1/1/search.php?s="+parameters,true);
        xmlhttp.send();
    }
    return false;

}

function readJSON() {
    
}