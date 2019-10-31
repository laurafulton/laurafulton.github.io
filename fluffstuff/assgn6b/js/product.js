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



/**JS FOR ADDING PRODUCT TO CART**/
$(document).ready(function () {
	// Check if there is anything in local storage and update cart in nav.
	var cartArray = JSON.parse(localStorage.getItem("savePillow")) || [];
	var wishArray = JSON.parse(localStorage.getItem("wishPillow")) || [];

	if (cartArray.length == 0) {
		document.getElementById("nav-cart").innerHTML = "Cart (0)";
	} else {
		document.getElementById("nav-cart").innerHTML = "Cart (" + (JSON.parse(localStorage.getItem("savePillow"))).length + ")";
	}

/***OBJ. CONSTRUCTORS ***/
		function Pillow(name, type, shape, typeImage, shapeImage, price, quantity, subtotal) {
			this.name = name;
			this.type = type;
			this.shape = shape;
			this.typeImage = typeImage;
			this.shapeImage = shapeImage;
			this.price = price;
			this.quantity = quantity;
			this.subtotal = subtotal;
		}

	/**This isn't working **/
		function WishWish(name, type, shape) {
		this.name = name;
		this.type = type;
		this.shape = shape;
		this.typeImage = typeImage;
		this.shapeImage = shapeImage;
		this.price = price;
		this.quantity = quantity;
		this.subtotal = subtotal;
	}

	/***CHOOSE COLOR OF PILLOW ***/
	$("#type-select").change(function () {
		var pillowType = document.getElementById("type-select").value;
		document.getElementById("product-type").innerHTML = pillowType;
		if (pillowType === "Lavender Pillow") {
			document.getElementById("main-photo").src = "./images/main-product-lavender.png";
		} else if (pillowType === "Sky Pillow") {
			document.getElementById("main-photo").src = "./images/main-product-sky.jpg";
		} else if (pillowType === "Navy Pillow") {
			document.getElementById("main-photo").src = "./images/main-product-navy.jpg";
		} else if (pillowType=="Yellow Pillow"){
			document.getElementById("main-photo").src = "./images/main-product-yellow.jpg";
		}
	});

	/**SELECT SIZE, CHANGE PRIVE **/
	$("#shape-select").change(function () {
		var pillowShape = document.getElementById("shape-select").value;
		document.getElementById("product-shape").innerHTML = pillowShape;
		if (pillowShape === "8x8") {
			document.getElementById("product-price").innerHTML = "$30";
		} else if (pillowShape === "12x12") {
			document.getElementById("product-price").innerHTML = "$40";
		} else if (pillowShape =="18x18"){
			document.getElementById("product-price").innerHTML = "$45";
		}
	});

	/**LOCAL STORAGE FOR CART **/
	$(".add-cart-btn").click(function () {
		$(".content-wrapper").css("top", "40px");
		// Store all data into variables.
		var name = document.getElementById("product-name").innerHTML;
		var type = document.getElementById("type-select").value;
		var shape = document.getElementById("shape-select").value;
		var typeImage = document.getElementById("main-photo").getAttribute("src");
		var shapeImage = document.getElementById("shape-img").getAttribute("src");
		var price = document.getElementById("product-price").innerHTML;
		var quantity = document.getElementById("quantity").value;
		var subtotal = Number(price.substring(1, price.length)) * quantity;

		// Put data into local storage.
		var pillowToAdd = new Pillow(name, type, shape, typeImage, shapeImage, price, quantity, subtotal);
		cartArray.push(pillowToAdd);
		localStorage.setItem("savePillow", JSON.stringify(cartArray));document.getElementById("nav-cart").innerHTML = "Cart (" + (JSON.parse(localStorage.getItem("savePillow"))).length + ")";
	});


	/**LOCAL STORAGE FOR WISH LIST **/
	$(".add-wish-btn").click(function () {
		$(".content-wrapper").css("top", "40px");
		// Store all data into variables.
		var name = document.getElementById("product-name").innerHTML;
		var type = document.getElementById("type-select").value;
		var shape = document.getElementById("shape-select").value;
		// var typeImage = document.getElementById("main-photo").getAttribute("src");
		// var shapeImage = document.getElementById("shape-img").getAttribute("src");
		// var price = document.getElementById("product-price").innerHTML;
		// var quantity = document.getElementById("quantity").value;
		// var subtotal = Number(price.substring(1, price.length)) * quantitywish;

		// Put data into local storage.
		var pillowToAdd = new Pillow(name, type, shape);
		wishArray.push(pillowToAdd);
		localStorage.setItem("wishPillow", JSON.stringify(wishArray));document.getElementById("nav-wish").innerHTML = "You've Loved Items! See them here <3";
		
	});

});

