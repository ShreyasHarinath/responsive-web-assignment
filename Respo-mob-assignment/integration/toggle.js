let mobileMenu = document.querySelector(".mobileMenu")
mobileMenu.addEventListener("click", function() {
	  mobileMenu.classList.toggle("active");
	  let 	primaryMenu = document.querySelector(".top-header .primary-menu"),
	  		secondaryMenu = document.querySelector(".top-header .secondary-menu")
	  		primaryMenu.classList.toggle("active")
	  		secondaryMenu.classList.toggle("active")
})