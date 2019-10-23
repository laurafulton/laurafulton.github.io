
/* FREE SHIPPING INFO POPS UP */
var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);


/* WHEN COLOR CHECKBOX SELECTED THAT COLOR OF PILLOW SHOWN AS MAIN IMAGE */ 
$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var pillowColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + pillowColor + ']').addClass('active');
      $(this).addClass('active');
  });

});


/*ADD TO CART, makes counter next to cart icon increment when 'Add 1 to cart' button on product page is pressed */
function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "+" + localStorage.clickcount;
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
 /*this makes counter next to cart icon decrement when 'Remove Item" button on product page is pressed*/
function clickCounter2() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)-1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "+" + localStorage.clickcount;
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

