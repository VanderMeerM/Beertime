<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="./images/beer.ico">
    <script defer src="./JS/beertime.js"></script>

    <!--  <script defer src="./bubbles.js"></script>
     <link href="./bubbles.css" rel="stylesheet" type="text/css" />  -->

    <link href="./CSS/beertime.css" rel="stylesheet" type="text/css" />

    <script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script>


</head>

<?php 

/*
Wishlist: 
bubbles

*/

echo '

<body> 

<div id="beertime_text"> </div>

<div class="main_container"> 

    <div class="container_glass">

        <div id="weekend"></div>

        <div class="container_beertap">

       
            <div>

                <img id="beertap_notap" src="./images/beertap_trans_without tap.png">

                <img id="onlytap" src="./images/Just_tap.png">

                <img id="flowingbeer">


            </div>
        </div>

        <div id="beertime"></div>
        
       <div class="container_holderglass"> 
       
       <div id="holder"></div> 
            <div id="glass">
           
            <img id="rising_foam">
            <img id="rising_beer">
            <canvas id="bubbles"></canvas> 
        </div>
       </div>

   

    <div class="container_info">
        <div id="filled"></div>
        <div id="countdown"></div>
    </div>
 </div>
</div>

</body>';

?>

</html>