const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");

app.use(cors());

// Dummy list of books
const books = [
	{ id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
	{ id: 2, title: "1984", author: "George Orwell" },
	{ id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
	{ id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger" },
	{ id: 5, title: "Animal Farm", author: "George Orwell" },
	{ id: 6, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
	{ id: 7, title: "Pride and Prejudice", author: "Jane Austen" },
	{ id: 8, title: "The Hobbit", author: "J.R.R. Tolkien" },
	{
		id: 9,
		title: "Harry Potter and the Philosopher's Stone",
		author: "J.K. Rowling",
	},
	{ id: 10, title: "The Da Vinci Code", author: "Dan Brown" },
];

// GET endpoint to retrieve the list of books
app.get("/books", (req, res) => {
	res.json(books);
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
