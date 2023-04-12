const BASE_URL = "http://localhost:3000"

//! ===================== GET (READ)=====================
function fetchBooks(){
    return fetch(`${BASE_URL}/books`)
    .then((res) => res.json())
    .then(console.log)
    .catch(error => {console.log(error)})
}

function fetchBookById(id){
    return fetch(`${BASE_URL}/books/${id}`)
    .then((res) => res.json())
    .then(console.log)
    .catch(error => {console.log(error)})
}

fetchBooks();
fetchBookById(10);

//! ===================== POST (CREATE)=====================


function addBook(book){
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(book)
    }
    return fetch(`${BASE_URL}/books/`, options)
    .then((res) => res.json())
    .then(console.log)
}

// addBook({
//     "title": "WORKBOOK",
//     "author": "Oksna Nikolaevna",
//     "genres": ["school book"],
//     "rating": 5
// });

// fetchBookById(12);