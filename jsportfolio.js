"use strict";

const portfolioButtonHome = document.querySelector(".btn-home");

portfolioButtonHome.addEventListener("click", function () {
	window.open("home.html", "_top");
});

// document.addEventListener("click", function (e) {
// 	// console.log(e.key);
// 	if (
// 		(e.key === "Escape" && !modalAbout.classList.contains("hidden")) ||
// 		!modalLinks.classList.contains("hidden")
// 	) {
// 		closeModal();
// 	}
// });
