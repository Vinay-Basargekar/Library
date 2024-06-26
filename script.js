const btn = document.querySelector("#add-button");
const btnSelect = document.querySelector(".black-button");
const card = document.querySelector(".card");
const cardContainer = document.querySelector(".card-container");

const openPopupButton = document.getElementById("openPopupButton");
const cardPopup = document.getElementById("cardPopup");

openPopupButton.addEventListener("click", () => {
	cardPopup.style.display = "block";
	overlay.style.display = "block";
});

function closePopup() {
	cardPopup.style.display = "none";
	overlay.style.display = "none";
}

function removeCard(button) {
	const cardToRemove = button.closest(".card");
	cardToRemove.parentNode.removeChild(cardToRemove);
}

const myLibrary = [];

class Book {
	constructor(title, author, noOfPages, read) {
		this.title = title;
		this.author = author;
		this.noOfPages = noOfPages;
		this.read = read;
	}
	addBookToLibrary(a) {
		myLibrary.push(a);
		return myLibrary.length;
	}
	generateRandomName() {
		const names = [
			"Vinayy%20Bagekar",
			"John%20Doe",
			"Alice%20Smith",
			"Bob%20Johnson",
			"Emma%20Wilson",
			"Michael%20Jones",
			"Sophia%20Brown",
			"Daniel%20Garcia",
		];
		const randomName = names[Math.floor(Math.random() * names.length)];

		// Generate random colors
		const colors = ["264653", "2a9d8f", "e9c46a", "f4a261", "e76f51"];
		const randomColors = colors
			.slice(0, Math.floor(Math.random() * colors.length) + 1)
			.join(",");

		return `${randomName}?colors=${randomColors}&square`;
	}
}
// function Book(title, author, noOfPages, read) {
// 	this.title = title;
// 	this.author = author;
// 	this.noOfPages = noOfPages;
// 	this.read = read;
// }

// function addBookToLibrary(a) {
// 	myLibrary.push(a);
// 	return myLibrary.length;
// }

// Generate a random name
// function generateRandomName() {
// 	const names = [
// 		"Vinayy%20Bagekar",
// 		"John%20Doe",
// 		"Alice%20Smith",
// 		"Bob%20Johnson",
// 		"Emma%20Wilson",
// 		"Michael%20Jones",
// 		"Sophia%20Brown",
// 		"Daniel%20Garcia",
// 	];
// 	const randomName = names[Math.floor(Math.random() * names.length)];

// 	// Generate random colors
// 	const colors = ["264653", "2a9d8f", "e9c46a", "f4a261", "e76f51"];
// 	const randomColors = colors
// 		.slice(0, Math.floor(Math.random() * colors.length) + 1)
// 		.join(",");

// 	return `${randomName}?colors=${randomColors}&square`;
// }

btn.addEventListener("click", () => {
	const title = document.querySelector("#bookName").value;
	const author = document.querySelector("#author").value;
	const pages = document.querySelector("#pages").value;
	const status = document.querySelector("#status").value;

	const book = new Book(title, author, pages, status);
	book.addBookToLibrary(book);
	console.log(myLibrary);

	// Create HTML for new card
	const newCardHTML = `
        <div class="card">
            <div class="top">
                <img src="https://source.boringavatars.com/beam/120/${book.generateRandomName()}" alt="Book Cover" />
                <span class="close-button1" onclick="removeCard(this)">&times;</span>
            </div>
            <div class="card-content">
                <h2>${title}</h2>
                <p>${author}</p>
                <p>Number of Pages: <span>${pages}</span></p>
                <p>Status: <span>${status}</span></p>
            </div>
        </div>
    `;

	cardContainer.innerHTML += newCardHTML;

	closePopup();
});

//login form validation

const form = document.getElementById("form");
const openLoginPage = document.getElementById("openLoginPage");
const LoginCardpopup = document.getElementById("LoginCardPop");

openLoginPage.addEventListener("click", () => {
	LoginCardpopup.style.display = "block";
	overlay.style.display = "block";
});

function closeLoginPopup() {
	LoginCardpopup.style.display = "none";
	overlay.style.display = "none";
}

document.getElementById("mail").addEventListener("input", clearEmailError);
document
	.getElementById("password")
	.addEventListener("input", clearPasswordError);

function validateForm() {
	var email = document.getElementById("mail").value;
	var password = document.getElementById("password").value;
	var emailError = document.getElementById("emailError");
	var passwordError = document.getElementById("passwordError");

	var valid = true;

	// Validate email
	if (!validateEmail(email)) {
		emailError.textContent = "Please enter a valid email address.";
		emailError.style.display = "block";
		valid = false;
	}

	// Validate password
	if (password === "") {
		passwordError.textContent = "Password is required.";
		passwordError.style.display = "block";
		valid = false;
	} else if (password.length < 6) {
		document.getElementById("passwordError").innerText =
			"Password must be at least 6 characters long.";
		valid = false;
	}

	return valid;
}

function validateEmail(email) {
	var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(String(email).toLowerCase());
}

function clearEmailError() {
	var email = document.getElementById("mail").value;
	var emailError = document.getElementById("emailError");
	if (validateEmail(email)) {
		emailError.style.display = "none";
	}
}

function clearPasswordError() {
	var password = document.getElementById("password").value;
	var passwordError = document.getElementById("passwordError");
	if (password.length >= 6) {
		passwordError.style.display = "none";
	}
}
