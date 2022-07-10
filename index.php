<?php

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="firstFile.css" type = "text/css">
    <link href="https://fonts.googleapis.com/css2?family=
Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,
700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    
    <title> Flexbox Design Plus MediaQUery </title>
</head>
<body>

    <nav class="navBar">
        <div class="float-Left">
            <div id = "menu" class="bar">
                <img src="images/icon-menu.svg" alt="menu" id="hamburger" class="hamburger">
            </div>        

            <!-- logo -->
            <div class="logoDiv">
                <img src="images/logo.svg" alt="logo" class="logo">
            </div>

            <div id = "sideBar" class=" menuItems">
                <div id = "sideDiv" class="div">
                    <div class="closeMenu">
                        <img src="images/icon-close.svg" alt="close" id="close" class="close">
                    </div>

                    <div class="sideBar">
                        <ul class="list">
                            <li id="items1" class="item">Collections</li>
                            <li id="items2" class="item"> Men </li>
                            <li id="items3" class="item">Women</li>
                            <li id="items4" class="item">About</li>
                            <li id="items5" class="item">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="float-Right">
            <div class="cartDiv">
                <h6 id = "det"> </h6>
                <img src="images/icon-cart.svg" alt="cart" id = "cart" class="cart">

                <!-- cart items -->

                <div id = "cartItems" class="cartItems none">

                    <div class="Ct">
                        <h5 class = "cartText"> cart </h5>
                    </div>
                    <hr class = "dash">
                    <div class="flexDiv">

                        <div class="emptyFlex" id="emptyFlex">
                            <h5 id = "empty"> Your cart is empty </h5>
                        </div>

                        <div id = "cartItemFlex" class="cartItemFlex">
                            
                            <!-- img -->
                            <div class="productDiv">
                                <img src="images/image-product-1-thumbnail.jpg" alt="productImg" class="productImg" id="productImg">
                            </div>
                            <div class="fullDetails">
                                <!-- name -->
                                <h6 class="productName"> Autumn Limited Edition </h6>
                                <!-- caluculation -->
                                <div class="calculation">
                                    <h6 class="productPrice" id = "productPrice"> </h6>
                                    <h6 class="finalPrice" id = "finalPrice"> </h6>
                                </div>
                            </div>
                            <!-- img -->
                            <div class="cartRemoveDiv" id = "removeDiv">
                                <img src="images/icon-delete.svg" alt="deleteCartItems" class="remove" id="remove">
                            </div>
                        </div>
                        <!-- checkOut -->
                        <div class="checkout" id="checkout">
                            <h5 class="submitBtn" id="submitBtn"> Checkout </h5>
                        </div>
                    </div>
                </div>
            </div>

            <div class="profileDiv">
                <img src="images/image-avatar.png" alt="avatar" class="avatar">
            </div>
        </div>

    </nav>

    <hr class = "under">        
    <div class="displayInv">

        <div class="displayLeft">
            <div class="mainClick">
                <img src="images/image-product-1.jpg" alt="image" id = "mainImg" class="displays" id="image">
            </div>
            <div id="displayGroup" class="displayGroup">
                <img src="images/image-product-1.jpg" alt="image" class="display" id="img0">
                <img src="images/image-product-2.jpg" alt="image" class="display img1" id="img1">
                <img src="images/image-product-3.jpg" alt="image" class="display img2" id="img2">
                <img src="images/image-product-4.jpg" alt="image" class="display img3" id="img3">
            </div>
            <div class="carouselBtns" id ="carouselBtns">
                <div class="carousel">
                    <img src="images/icon-previous.svg" alt="" class="click leftBtn" id = "moveL">
                    <img src="images/icon-next.svg" alt="" class="click rightBtn" id = "moveF">
                </div>
            </div>
        </div>

        <div class="displayRight">

            <h6 class="heading"> sneaker company </h6>
            <h3 class="specificHeading"> Fall Limited edition sneakers </h3>
            <h6 class="itemDesc"> These low-profile sneakers are your perfect casual wear
                comparison. Featuring a durable rubber outer sole, they'll withstand everything
                the weather can offer.
            </h6>

            <!-- price -->

            <div class="price">
                <div class="newPrice">
                    <h6 class="currentPrice"> $125.00 </h6>
                    <h6 class="discount"> 50% </h6>
                </div>

                <h6 class="oldPrice"> <del> $250.00 </del> </h6>
            </div>

            <div class="cartDiv">
                
                <div class="cartFig">
                    <div class="iconM">
                        <img src="images/icon-minus.svg" alt="minus" class="minus" id = "minus">
                    </div>
                    <h6 class="cartNum" id = "cartNum"></h6>
                    <div class="iconP">
                        <img src="images/icon-plus.svg" alt="plus" class="plus" id = "plus">             
                    </div>
                </div>

                <div class="ToCart" id = "addCart"> 
                    <img src = "images/icon-cart1.svg" alt="cart" class="cartLogo" id = "cartLogo" >
                    <h6 class="addCart"> Add to Cart</h6> 
                </div>

            </div>



        </div>

    </div>

    <script src="index.js"></script>
</body>
</html>
