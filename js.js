"use strict";

const modalAbout = document.querySelector(".modal-about");
const modalLinks = document.querySelector(".modal-links");
const overlay = document.querySelector(".overlay");
const btnCloseModalAbout = document.querySelector(".close-modal-about");
const btnCloseModalLinks = document.querySelector(".close-modal-links");
const btnOpenModalAbout = document.querySelector(".show-modal-about");
const btnOpenModalLinks = document.querySelector(".show-modal-links");
const merhabaAlert = document.querySelector(".main-header");
const portfolioButton = document.querySelector(".btn-portfolio");


// todo: try using one function but it not works with one function!!
// todo: so i had to use less functions but i could not figure it out
const openModalAbout = function () {
	modalAbout.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const openModalLinks = function () {
	modalLinks.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModalAbout = function () {
	modalAbout.classList.add("hidden");
	overlay.classList.add("hidden");
};

const closeModalLinks = function () {
	modalLinks.classList.add("hidden");
	overlay.classList.add("hidden");
};

btnOpenModalAbout.addEventListener("click", openModalAbout);
btnOpenModalLinks.addEventListener("click", openModalLinks);

btnCloseModalAbout.addEventListener("click", closeModalAbout);
btnCloseModalLinks.addEventListener("click", closeModalLinks);

overlay.addEventListener("click", closeModalAbout);
overlay.addEventListener("click", closeModalLinks);

// close modals with pressing esc
document.addEventListener("keydown", function (e) {
	// console.log(e.key);
	if (
		(e.key === "Escape" && !modalAbout.classList.contains("hidden")) ||
		!modalLinks.classList.contains("hidden")
	) {
		closeModal();
	}
});

document.addEventListener("keydown", function (e) {
	// console.log(e.key);
	if (
		(e.key === "Escape" && !modalAbout.classList.contains("hidden")) ||
		!modalLinks.classList.contains("hidden")
	) {
		closeModal();
	}
});

// alert chrome
merhabaAlert.addEventListener("click", function () {
	alert("merhaba.");
});

// opens portfolio page on top
portfolioButton.addEventListener("click", function () {
	window.open("portfolio.html", "_top");
});

//todo: portfolio home button not working right now
