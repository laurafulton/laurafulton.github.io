// Getting Pillow into WishList!

$(document).ready(function () {
	// Check if there is anything in local storage and update cart in nav.
	var wishArray = JSON.parse(localStorage.getItem("savePillow")) || [];
	if (wishArray.length === 0) {
		document.getElementsByClassName("no-items")[0].style.display = "block";
		document.getElementById("nav-wish").innerHTML = "Wish List (0)";
	} else {
		document.getElementsByClassName("no-items")[0].style.display = "none";
		document.getElementById("nav-wish").innerHTML = "You've Loved Items! Here they are!";

		// Get items from local storage.
		for (var i = 0; i < wishArray.length; i++) {
			// Parse localStorage to get item attributes.
			var name = JSON.parse(localStorage.wishPillow)[i].name;
			var type = JSON.parse(localStorage.wishPillow)[i].type;
			var shape = JSON.parse(localStorage.wishPillow)[i].shape;
			// var typeImage = JSON.parse(localStorage.wishPillow)[i].typeImage;
			// var shapeImage = JSON.parse(localStorage.wishPillow)[i].shapeImage;
			// var price = JSON.parse(localStorage.savePillow)[i].price;
			// var quantity = JSON.parse(localStorage.wishPillow)[i].quantity;
			// var subtotal = JSON.parse(localStorage.wishPillow)[i].subtotal;

			// Create HTML for new item.
			var newItemHtml = document.getElementById("item").outerHTML;
			var newDiv = document.createElement("div");
			newDiv.id = "item" + String(i);
			newDiv.innerHTML = newItemHtml;
			document.getElementById("wish-contents").appendChild(newDiv);

			// Insert localStorage data into each new item.
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("item-type")[0].src = typeImage;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("item-shape")[0].src = shapeImage;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("product-name")[0].innerHTML = name;
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("product-type")[0].innerHTML = type + " | ";
			document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("product-shape")[0].innerHTML = shape;
			// document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("price")[0].innerHTML = price;
			// document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("quantity")[0].innerHTML = "x" + quantity;
			// document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("a-link")[0].setAttribute("id", "" + String(i));
			// document.getElementById("item" + String(i)).childNodes[0].getElementsByClassName("subtotal")[0].innerHTML = "$" + subtotal;
		}

	// 	// Remove deleted items.
	// 	$(".a-link").click(function () {
	// 		wishArray.splice(Number($(this).attr("id")), 1);
	// 		localStorage.setItem("wishPillow", JSON.stringify(wishArray));
	// 		console.log(wishArray);
	// 		location.reload();
  	

	// 	});
	// }


});



// }

