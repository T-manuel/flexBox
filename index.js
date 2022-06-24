// onclick event for menu Icon

let menuBtn = document.getElementById("hamburger");
let closeBtn = document.getElementById("close");
let sideMenu = document.getElementById("sideDiv");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("fromSide");
})
closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("fromSide");
})

// cartItems

// cartOnClick -- if carouselNum = empty or not integer, show Yourcart is empty
// else show cart items
// click toggles display none

let cartItems = document.getElementById("cartItems");
let emptyCart = document.getElementById("emptyFlex");
let productCart = document.getElementById("cartItemFlex");
let checkOut = document.getElementById("checkout");
let cart = document.getElementById("cart");
let proPrice = document.getElementById("productPrice");
let finPrice = document.getElementById("finalPrice");
let cartRemove = document.getElementById("remove");

function carts(empty, product, checkout, pPrice, fPrice) {
    details = parseInt(det.textContent);
    empty.classList.add("none");
    product.removeAttribute("style", "display:none");
    checkout.classList.remove("none");
    pPrice.textContent = `$ 125.00 x ${details}`;
    fPrice.textContent = `$ ${125.0 * details}.00`;
}

cart.addEventListener("click", () => {
    
    cartItems.classList.toggle("none");
    details = parseInt(det.textContent);

    if (!Number.isInteger(details)) {
        productCart.setAttribute("style", "display:none");
        checkOut.classList.add("none");
    }

    if (Number.isInteger(details)) {
        carts(emptyCart,productCart, checkOut, proPrice, finPrice);
    }

})


// cart Figures

let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let num = document.getElementById("cartNum");
let middle = 1;

// deleteBtn -- when clicked, show YourCart is empty
// and cartNum = 1, also carouselNum = 0

cartRemove.addEventListener("click", () => {
    productCart.setAttribute("style", "display:none");
    checkOut.classList.add("none");
    emptyCart.classList.remove("none");
    det.textContent = '';
    middle = 1;
    num.textContent = middle;

})

// onclick funtion 

minus.setAttribute ("style", "display:none");

function click (left, right) {
    num.textContent = middle;

    right.addEventListener("click", () => {
        middle += 1;
        num.textContent = middle;
        left.removeAttribute("style", "display:none");
    });

    left.addEventListener("click", () => {
      middle -= 1;
      num.textContent = middle;
        if (middle === 1) {
           left.setAttribute("style", "display:none");
        }
    });
}

click(minus, plus);


// Add to Cart 

let det = document.getElementById("det");
let submit = document.getElementById("addCart");

submit.addEventListener("click", () => {

    newNum = parseInt(num.textContent);
    det.classList.remove("none");

    if (Number.isInteger(newNum) && newNum >=1) {
        det.textContent = newNum;
        carts(emptyCart, productCart, checkOut, proPrice, finPrice);
    }
})

let carou = document.querySelectorAll(".display");
let mediaLogic = window.matchMedia("(max-width: 649px)");
let carouselDiv = document.getElementById("carouselBtns");
let carouselbtns = document.querySelectorAll(".click");
let Dg = document.getElementById("displayGroup");
let mI = document.getElementById("mainImg");


let carouselNum = 0;
function firstQuery (){
    if (mediaLogic.matches) {
        // carousel for small phones
        carouselbtns.forEach(function (btn) {
            let count = Dg.children; // length of Dg direct children
            btn.addEventListener("click", function(e) {

                clicked = e.currentTarget.id;
            
                if (clicked === "moveF") {

                    if (carouselNum === 0) {
                        count[carouselNum].classList.add("none");
                    }

                    // targeting the "display:none" class

                    carouselNum += 1;

                    if (carouselNum >= 1 && carouselNum < count.length) {
                        count[0].classList.add("none");
                        count[carouselNum - 1].classList.add(`img${carouselNum - 1}`);
                        count[carouselNum - 1].classList.add(`none`);
                        count[carouselNum].classList.remove(`img${carouselNum}`);
                        count[carouselNum].classList.remove(`none`);
                    }

                    // if carousel is on the last pics, go back to the beginning
                    //then javascript, listens and start from the first if statement to see a match
                    if (carouselNum === count.length) {
                        carouselNum = carouselNum - count.length;
                        count[carouselNum].classList.remove("none"); //shows first pics
                        count[count.length - 1].classList.add(`img${count.length - 1}`); //hides last pics
                        count[count.length - 1].classList.add(`none`); //hides last pics
                    }
                }

                if (clicked === "moveL") {
                        
                    if (carouselNum < count.length && carouselNum >= 1) {
                        count[carouselNum - 1].classList.remove(`img${carouselNum - 1}`);
                        count[carouselNum - 1].classList.remove(`none`);
                        count[carouselNum].classList.add(`img${carouselNum}`);
                        count[carouselNum].classList.add(`none`);
                        count[0].classList.add(`none`);
                    }

                    carouselNum -= 1;

                    if (carouselNum === 0) {
                        count[carouselNum].classList.remove("none");
                    }

                    // if carousel is back at the start, go back to the last pics
                    //then javascript, listens and start from the first if statement to see a match
                    if (carouselNum < 0) {
                        count[carouselNum + 1].classList.add("none"); //hides first pics
                        carouselNum = count.length - 1;
                        count[carouselNum].classList.remove(`img${carouselNum}`); //reveals lst pics
                        count[carouselNum].classList.remove(`none`); //reveals lst pics
                    }
                }

            })   

        })
    }

    // carousel for min-width 650px
    if (!mediaLogic.matches)
    carou.forEach(function (gallery) {

        gallery.addEventListener("click", function (e) {
            clickedImg = e.currentTarget.src;
            mI.src = clickedImg;
        });

    });
}

firstQuery();
// matchMedia

function screenLogic(e) {
    if (e.matches) {
        carou.forEach( function (pics) {
            if (pics !== carou[0]) {
                pics.classList.add("none");
            }
        })
        carouselDiv.classList.remove("none");
    }

    else {
        
        carou.forEach(function (pics) {
            pics.classList.remove("none");
        });
        carouselDiv.classList.add("none");

        carou.forEach(function (gallery) {
            gallery.addEventListener("click", function (e) {
                clickedImg = e.currentTarget.src;
                mI.src = clickedImg;
            });
        });

    }
}

mediaLogic.addEventListener("change", screenLogic);

