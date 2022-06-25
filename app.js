const name = document.querySelector("#name");
const email = document.querySelector("#mail");

const addOutline = (input) => {
	const inputContainer = input.parentElement;
	const icon = input.previousSibling.previousSibling;

	input.addEventListener("focus", function (e) {
		inputContainer.classList.toggle("outline");
		icon.setAttribute("style", "color: #0c75ff;");
	});

	input.addEventListener("blur", function (e) {
		inputContainer.classList.toggle("outline");
		icon.removeAttribute("style");
	});
};

addOutline(name);
addOutline(email);
