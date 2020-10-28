<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xml:lang="en" lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Style-Type" content="text/css" />
    <title>h2zTIsbK</title>
    <link rel="stylesheet" type="text/css" href="./h2zTIsbK/h2zTIsbK.css" />
    <!--[if IE]><script type="text/javascript" src="./h2zTIsbK/excanvas-compiled.js"></script><![endif]-->
    <script type="text/javascript" src="./h2zTIsbK/h2zTIsbK.js"> </script>
  </head>
  <body>
    <div style="margin:1ex;">
      <div style="width:100%">
        <table style="border:0;width:100%;">
          <tbody>
            <tr>
              <td bgcolor="eeeeee" align="right">
                <font face="arial,sans-serif">
                  <b>Page 1</b>
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="position:relative;width:612pt;height:792pt;">
        <div style="position:absolute;left:0pt;top:0pt;width:100%;height:100%;clip:rect(0pt,612pt,792pt,0pt);" class="fmt-3"><span class="fmt-0" style="white-space:pre;"><div style="position:absolute;top:71.075pt;left:85.025pt;z-index:3;letter-spacing:.004em;">Desarrollar una aplicación web usando una de las API gratuitas de API List Fun. Tener en </div></span><span class="fmt-0" style="white-space:pre;"><div style="position:absolute;top:83.665pt;left:85.025pt;z-index:6;letter-spacing:.012em;">cuenta que se deben aplicar buenas prácticas para el desarrollo de la interfaz gráfica de </div></span><span class="fmt-0" style="white-space:pre;"><div style="position:absolute;top:96.665pt;left:85.025pt;z-index:10;letter-spacing:.001em;">usuario, para la cual se permite utilizar plantilla de Bootstrap. </div></span><span class="fmt-1" style="white-space:pre;"><div style="position:absolute;top:117.34pt;left:85.025pt;z-index:11;"> </div></span><span class="fmt-2" style="white-space:pre;"><div style="position:absolute;top:141.14pt;left:85.025pt;z-index:13;letter-spacing:.001em;">Página Web </div></span><span style="white-space:pre;"><div style="position:absolute;top:165.16pt;left:85.025pt;z-index:14;letter-spacing:-.005em;">Es una página tipo blog dedicada a la comida, tiene una barra de búsqueda en el lado derecho </div></span><span style="white-space:pre;"><div style="position:absolute;top:180.96pt;left:85.025pt;z-index:16;">de la pantalla y en el centro se mostrarán los resultados en una tabla de manera ordenada. </div></span><img style="position:absolute;left:85.05pt;top:204.27pt;width:400.89pt;height:213.65pt;z-index:44;" src="./h2zTIsbK/10f0f22c68260f5e68389f76547d71a6.png" alt="Image_16_0" /><span style="white-space:pre;"><div style="position:absolute;top:407.41pt;left:485.95pt;z-index:17;"> </div></span><span class="fmt-2" style="white-space:pre;"><div style="position:absolute;top:428.41pt;left:85.025pt;z-index:18;"> </div></span><span class="fmt-2" style="white-space:pre;"><div style="position:absolute;top:452.21pt;left:85.025pt;z-index:20;letter-spacing:.001em;">Funcionalidad Básica </div></span><span style="white-space:pre;"><div style="position:absolute;top:476.24pt;left:85.025pt;z-index:23;letter-spacing:.001em;">La pagina web se centra en visualizar la información tomada de una API dedicada a comida </div></span><span style="white-space:pre;"><div style="position:absolute;top:492.04pt;left:85.025pt;z-index:25;letter-spacing:.001em;">(TheMealDB). </div></span><span style="white-space:pre;"><div style="position:absolute;top:515.84pt;left:85.025pt;z-index:29;letter-spacing:.001em;">API: <span class="fmt-4">https://www.themealdb.com/api.php?ref=apilist.fun</span>  </div></span><img style="position:absolute;left:110.62pt;top:525.53pt;width:250pt;height:3pt;z-index:30;" src="./h2zTIsbK/3ab848135a92d4efea91fb06acb0081e.png" alt="__rendered_path__30" /><span style="white-space:pre;"><div style="position:absolute;top:539.84pt;left:85.025pt;z-index:31;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:563.66pt;left:85.025pt;z-index:34;letter-spacing:-.012em;">La  información  es  solicitada  por  medio de  una  función  GET  utilizando  AJAX.  El  token </div></span><span style="white-space:pre;"><div style="position:absolute;top:579.46pt;left:85.025pt;z-index:36;letter-spacing:.001em;">utilizado es el número 1, autorizado por la página para el uso educativo: </div></span><img style="position:absolute;left:85.05pt;top:602.77pt;width:441.9pt;height:22.3499pt;z-index:45;" src="./h2zTIsbK/a08051c90837cc6dc1a6f72e623cdbdb.png" alt="Image_17_0" /><span style="white-space:pre;"><div style="position:absolute;top:614.86pt;left:527.58pt;z-index:37;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:636.06pt;left:85.025pt;z-index:38;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:659.86pt;left:85.025pt;z-index:39;letter-spacing:.008em;">Luego la información obtenida como texto se transforma a formato JSON, para ser leída y </div></span><span style="white-space:pre;"><div style="position:absolute;top:675.69pt;left:85.025pt;z-index:43;">distribuida en la tabla por medio de la función <span class="fmt-1">buildTable()</span>: </div></span></div>
      </div>
      <div style="width:100%">
        <hr />
        <table style="border:0;width:100%;">
          <tbody>
            <tr>
              <td bgcolor="eeeeee" align="right">
                <font face="arial,sans-serif">
                  <b>Page 2</b>
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="position:relative;width:612pt;height:792pt;">
        <div style="position:absolute;left:0pt;top:0pt;width:100%;height:100%;clip:rect(0pt,612pt,792pt,0pt);" class="fmt-3">
          <img style="position:absolute;left:85.05pt;top:70.85pt;width:316.06pt;height:142.2pt;z-index:15;" src="./h2zTIsbK/430120f4dbc84181cedf2d974219d0ac.png" alt="Image_20_0" /><span style="white-space:pre;"><div style="position:absolute;top:202.76pt;left:401.52pt;z-index:1;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:223.96pt;left:85.025pt;z-index:2;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:247.76pt;left:85.025pt;z-index:5;letter-spacing:.001em;">Con un bucle <span class="fmt-1">for </span>se recorre por el archivo JSON obteniendo los datos para llenar la tabla en </div></span><span style="white-space:pre;"><div style="position:absolute;top:263.78pt;left:85.025pt;z-index:7;letter-spacing:.001em;">el archivo HTML: </div></span><img style="position:absolute;left:85.05pt;top:287.02pt;width:315.5pt;height:137.15pt;z-index:16;" src="./h2zTIsbK/1d9d9bd22c76fbff91237c7151c6b8d3.png" alt="Image_21_0" /><span style="white-space:pre;"><div style="position:absolute;top:413.61pt;left:400.52pt;z-index:9;">  </div></span><span style="white-space:pre;"><div style="position:absolute;top:434.81pt;left:85.025pt;z-index:10;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:458.83pt;left:85.025pt;z-index:12;letter-spacing:.001em;">La información se presenta en la página de la siguiente manera: </div></span><img style="position:absolute;left:85.05pt;top:481.98pt;width:374.54pt;height:199.6pt;z-index:17;" src="./h2zTIsbK/f6c823214d926044b57d6cf804c5e755.png" alt="Image_22_0" /><span style="white-space:pre;"><div style="position:absolute;top:671.09pt;left:460.15pt;z-index:13;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:692.08pt;left:85.025pt;z-index:14;"> </div></span></div>
      </div>
      <div style="width:100%">
        <hr />
        <table style="border:0;width:100%;">
          <tbody>
            <tr>
              <td bgcolor="eeeeee" align="right">
                <font face="arial,sans-serif">
                  <b>Page 3</b>
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="position:relative;width:612pt;height:792pt;">
        <div style="position:absolute;left:0pt;top:0pt;width:100%;height:100%;clip:rect(0pt,612pt,792pt,0pt);" class="fmt-3"><span class="fmt-2" style="white-space:pre;"><div style="position:absolute;top:71.338pt;left:85.025pt;z-index:2;">Paginación </div></span><span style="white-space:pre;"><div style="position:absolute;top:95.338pt;left:85.025pt;z-index:3;letter-spacing:-.004em;">La información que es mostrada en la tabla está distribuida en páginas de 5 objetos cada una. </div></span><span style="white-space:pre;"><div style="position:absolute;top:111.14pt;left:85.025pt;z-index:4;letter-spacing:.016em;">Para lograr esto se utilizan un conjunto de funciones que separarán la información en las </div></span><span style="white-space:pre;"><div style="position:absolute;top:126.93pt;left:85.025pt;z-index:6;letter-spacing:.005em;">distintas páginas, ubicarán la información en la tabla y posicionarán los botones en la parte </div></span><span style="white-space:pre;"><div style="position:absolute;top:142.93pt;left:85.025pt;z-index:7;letter-spacing:.003em;">inferior  de  la  página.  La  primera  función  a  la  que  se  ingresa  después  de  obtener  la </div></span><span style="white-space:pre;"><div style="position:absolute;top:158.76pt;left:85.025pt;z-index:10;letter-spacing:.003em;">información es <span class="fmt-1">buildTable(), </span>esta función llama a los otros métodos relacionados y después </div></span><span style="white-space:pre;"><div style="position:absolute;top:174.56pt;left:85.025pt;z-index:12;">ubica los datos en la tabla. </div></span><img style="position:absolute;left:85.05pt;top:197.93pt;width:292.65pt;height:226.29pt;z-index:30;" src="./h2zTIsbK/4fabdcef7c33d0d84a5694f4edfdd49e.png" alt="Image_25_0" /><span style="white-space:pre;"><div style="position:absolute;top:414.01pt;left:377.73pt;z-index:13;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:435.21pt;left:85.025pt;z-index:14;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:459.03pt;left:85.025pt;z-index:16;letter-spacing:.008em;">Se declaran algunas variables relacionadas al estado de la búsqueda (state), estas variables </div></span><span style="white-space:pre;"><div style="position:absolute;top:474.84pt;left:85.025pt;z-index:18;">son: número de objetos por página, los datos en formato JSON y la primera página. </div></span><img style="position:absolute;left:85.05pt;top:498.11pt;width:102.4pt;height:81.7992pt;z-index:31;" src="./h2zTIsbK/0e70d1423343b3a2a2e81a5467519037.png" alt="Image_26_0" /><span style="white-space:pre;"><div style="position:absolute;top:570.26pt;left:187.45pt;z-index:19;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:591.26pt;left:85.025pt;z-index:20;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:615.26pt;left:85.025pt;z-index:23;letter-spacing:.008em;">La siguiente función es <span class="fmt-1">pagination() </span>que se encarga de dividir los datos JSON en partes (5 </div></span><span style="white-space:pre;"><div style="position:absolute;top:631.06pt;left:85.025pt;z-index:27;letter-spacing:-.01em;">en este caso). La función <span class="fmt-1">slice</span><span class="fmt-1"> </span>propia de Javascript nos ayuda con ese trabajo, al final teniendo </div></span><span style="white-space:pre;"><div style="position:absolute;top:646.86pt;left:85.025pt;z-index:29;">como resultado el JSON por partes y el número de páginas que tendrá la tabla. </div></span></div>
      </div>
      <div style="width:100%">
        <hr />
        <table style="border:0;width:100%;">
          <tbody>
            <tr>
              <td bgcolor="eeeeee" align="right">
                <font face="arial,sans-serif">
                  <b>Page 4</b>
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="position:relative;width:612pt;height:792pt;">
        <div style="position:absolute;left:0pt;top:0pt;width:100%;height:100%;clip:rect(0pt,612pt,792pt,0pt);" class="fmt-3">
          <img style="position:absolute;left:85.05pt;top:70.85pt;width:290.9pt;height:177.99pt;z-index:18;" src="./h2zTIsbK/d4eb96936808bc334cb3f968ada29353.png" alt="Image_29_0" /><span style="white-space:pre;"><div style="position:absolute;top:238.76pt;left:376.13pt;z-index:1;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:259.99pt;left:85.025pt;z-index:3;letter-spacing:-.002em;">La última función es la más extensa, dedicada a colocar los botones con las distintas páginas </div></span><span style="white-space:pre;"><div style="position:absolute;top:275.79pt;left:85.025pt;z-index:6;letter-spacing:.007em;">resultada de la función anterior; la función es llamada <span class="fmt-1">pageButtons()</span>. La función recibe un </div></span><span style="white-space:pre;"><div style="position:absolute;top:291.79pt;left:85.025pt;z-index:7;letter-spacing:-.002em;">parámetro, las páginas, con la ayuda de las variables antes mencionadas podemos calcular la </div></span><span style="white-space:pre;"><div style="position:absolute;top:307.58pt;left:85.025pt;z-index:10;">ubicación de cada botón en el HTML. </div></span><img style="position:absolute;left:85.05pt;top:330.89pt;width:297.35pt;height:251.74pt;z-index:19;" src="./h2zTIsbK/b99c082214b7af3c67b726088a6ca797.png" alt="Image_30_0" /><span style="white-space:pre;"><div style="position:absolute;top:572.26pt;left:382.33pt;z-index:11;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:593.66pt;left:85.025pt;z-index:12;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:617.46pt;left:85.025pt;z-index:13;letter-spacing:.02em;">Después de calcular la distancia del botón se procede a colocar el botón en la página, la </div></span><span style="white-space:pre;"><div style="position:absolute;top:633.46pt;left:85.025pt;z-index:14;letter-spacing:-.008em;">primera vez se colocan dos botones adicionales, última página (Last) y primera página (First). </div></span><span style="white-space:pre;"><div style="position:absolute;top:649.26pt;left:85.025pt;z-index:17;letter-spacing:.001em;">Cada botón es creado después de que la tabla en esa página esté llena. </div></span></div>
      </div>
      <div style="width:100%">
        <hr />
        <table style="border:0;width:100%;">
          <tbody>
            <tr>
              <td bgcolor="eeeeee" align="right">
                <font face="arial,sans-serif">
                  <b>Page 5</b>
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="position:relative;width:612pt;height:792pt;">
        <div style="position:absolute;left:0pt;top:0pt;width:100%;height:100%;clip:rect(0pt,612pt,792pt,0pt);" class="fmt-3"><span style="white-space:pre;"><div style="position:absolute;top:302.18pt;left:85.025pt;z-index:2;"> </div></span><span style="white-space:pre;"><div style="position:absolute;top:325.98pt;left:85.025pt;z-index:4;letter-spacing:.001em;">Al final la paginación se ve de esta manera en el blog: </div></span><span class="fmt-5" style="white-space:pre;"><div style="position:absolute;top:595.4pt;left:85.025pt;z-index:6;letter-spacing:.001em;"> </div></span><span class="fmt-5" style="white-space:pre;"><div style="position:absolute;top:615.99pt;left:85.025pt;z-index:8;">REFERENCIAS </div></span><span style="white-space:pre;"><div style="position:absolute;top:637.4pt;left:85.025pt;z-index:12;letter-spacing:.001em;"><span class="fmt-5">TheMealDB: </span><span class="fmt-4">https://www.themealdb.com/api.php?ref=apilist.fun</span>  </div></span><img style="position:absolute;left:151.65pt;top:646.35pt;width:250pt;height:3pt;z-index:13;" src="./h2zTIsbK/3ab848135a92d4efea91fb06acb0081e.png" alt="__rendered_path__13" /><span class="fmt-5" style="white-space:pre;"><div style="position:absolute;top:660.39pt;left:85.025pt;z-index:18;letter-spacing:.001em;">Paginación: <span class="fmt-6">https://jsfiddle.net/ivanov11/e18zfsau</span><span class="fmt-7">/</span>  </div></span><img style="position:absolute;left:150.45pt;top:669.15pt;width:169pt;height:3pt;z-index:19;" src="./h2zTIsbK/c71e014d6f4b18ee456a75d45c4bb571.png" alt="__rendered_path__19" /><span class="fmt-0" style="white-space:pre;"><div style="position:absolute;top:681.23pt;left:85.025pt;z-index:20;letter-spacing:.001em;"> </div></span><img style="position:absolute;left:85.05pt;top:70.85pt;width:441.9pt;height:220.65pt;z-index:21;" src="./h2zTIsbK/3ce84ec8787f849c24158eaab9af2823.png" alt="Image_37_0" /><span style="white-space:pre;"><div style="position:absolute;top:280.98pt;left:527.58pt;z-index:1;"> </div></span><img style="position:absolute;left:85.05pt;top:349.31pt;width:441.9pt;height:235.5pt;z-index:22;" src="./h2zTIsbK/29c3488f78247cdbfc8dce6fddc62af4.png" alt="Image_38_0" /><span style="white-space:pre;"><div style="position:absolute;top:574.46pt;left:527.58pt;z-index:5;"> </div></span></div>
      </div>
    </div>
  </body>
</html>