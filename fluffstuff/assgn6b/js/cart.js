/* Cart Local Storage, Getting Pillows in Cart! */
/* Laura Fulton, PUI Fluff Stuff Website */


/* SLIDE SHOW OF SIMILAR IMAGES */
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


/*POPULATING THE CART AND CALCULATING TOTAL FROM ADDING SUBTOTAL */
$(document).ready(function () {
	// Check if there is anything in local storage and update cart in nav.
	var cartTotal = 0;

	var cartArray = JSON.parse(localStorage.getItem("savePillow")) || [];
	if (cartArray.length === 0) {
		document.getElementsByClassName("no-items")[0].style.display = "block";
		document.getElementById("nav-cart").innerHTML = "Cart (0)";
	} else {
		document.getElementsByClassName("no-items")[0].style.display = "none";
		document.getElementById("nav-cart").innerHTML = "Cart (" + (JSON.parse(localStorage.getItem("savePillow"))).length + ")";
		// Get items from local storage.
		for (var i = 0; i < cartArray.length; i++) {
			// Parse localStorage to get item attributes.
			var name = JSON.parse(localStorage.savePillow)[i].name;
			var type = JSON.parse(localStorage.savePillow)[i].type;
			var shape = JSON.parse(localStorage.savePillow)[i].shape;
			var typeImage = JSON.parse(localStorage.savePillow)[i].typeImage;
			var shapeImage = JSON.parse(localStorage.savePillow)[i].shapeImage;
			var price = JSON.parse(localStorage.savePillow)[i].price;
			var quantity = JSON.parse(localStorage.savePillow)[i].quantity;
			var subtotal = JSON.parse(localStorage.savePillow)[i].subtotal;

			cartTotal += subtotal;

			// Create HTML for new item.
			var newItemHtml = document.getElementById("item").outerHTML;
			var newDiv = document.createElement("div");
			newDiv.id = "item" + String(i);
			newDiv.innerHTML = newItemHtml;
			document.getElementById("cart-contents").appendChild(newDiv);
			// Insert localStorage data into each new item.
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("item-type")[0].src = typeImage;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("item-shape")[0].src = shapeImage;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("product-name")[0].innerHTML = name;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("product-type")[0].innerHTML = type + " | ";
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("product-shape")[0].innerHTML = shape;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("price")[0].innerHTML = price;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("quantity")[0].innerHTML = "x" + quantity;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("a-link")[0].setAttribute("id", "" + String(i));
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("subtotal")[0].innerHTML = "$" + subtotal;
			
			// document.getElementById("cartTotal" + String(i)).childNodes[0].getElementsByClassName("cartTotal")[0].innerHTML = "$" + cartTotal;
		}

		/* DELETING ITEMS FROM CART*/
		$(".a-link").click(function () {
			cartArray.splice(Number($(this).attr("id")), 1);
			localStorage.setItem("savePillow", JSON.stringify(cartArray));
			console.log(cartArray);
			location.reload();

		});

	}

	/*TOTALS AND TAXATION */
	document.getElementById("cartTotal").textContent=cartTotal;
	document.getElementById("cartTax").textContent=cartTotal*0.05;
	document.getElementById("cartGrandTotal").textContent=cartTotal+1.05;
});




