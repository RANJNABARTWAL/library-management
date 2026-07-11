 alert("JavaScript Loaded");

function issueBook() {
    alert("Button Clicked");
} 

 function issueBook() {
 let selectedBook = document.getElementById("book").value;

    document.getElementById("message").innerHTML =
    "✅ " + selectedBook + " has been issued successfully!"
    
}
