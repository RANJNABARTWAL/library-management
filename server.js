const express = require("express");

const app = express();

app.use(express.json());

const books = [];

app.get("/", (req, res) => {
    res.send("Library Management System Backend Running");
});

app.post("/addBook", (req, res) => {

    const book = req.body;

    books.push(book);

    res.json({
        message: "Book Added Successfully!",
        data: book
    });

});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
function issueBook() {

    const selectedBook = document.getElementById("book").value;

    fetch("http://localhost:3000/issueBook", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            book: selectedBook
        })

    })

    .then(response => response.json())

    .then(data => {

        document.getElementById("message").innerHTML = data.message;

    });

}