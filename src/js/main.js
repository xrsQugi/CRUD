// const BASE_URL = "http://localhost:3000";


//! ===================== GET (READ)=====================
// function fetchBooks(){
//     return fetch(`${BASE_URL}/books`)
//     .then((res) => res.json())
//     .then(console.log)
//     .catch(error => {console.log(error)});
// }

// function fetchBookById(id){
//     return fetch(`${BASE_URL}/books/${id}`)
//      .then((res) => res.json())
//      .then(console.log)
//      .catch(error => {console.log(error)});
// }

//? ===================== Виклик функції =====================
// fetchBooks();
// fetchBookById(4);


//! ===================== POST (CREATE)=====================
// function addBook(book){
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(book)
//     }
//     return fetch(`${BASE_URL}/books/`, options)
//      .then((res) => res.json())
//      .then((book) => renderBook(book));
// }

// function renderBook(book){
//     console.log("Прийшла наша книжка");
//     console.log(book);
// }

//? ===================== Виклик функції =====================
// addBook({
//     "title": "WORKBOOK",
//     "author": "Oksna Nikolaevna",
//     "genres": ["school book"],
//     "rating": 5
// });



//! ===================== PATCH (UPDATE)=====================
// function updatePatchBookById(update, bookId){
//     const options = {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(update)
//     }
//     return fetch(`${BASE_URL}/books/${bookId}`, options)
//         .then((res) => res.json())
//         .then(console.log("Значення книги оновлені"));
// }

//? ===================== Виклик функції =====================
// updatePatchBookById({
//     title: "UPDATE BOOK",
//     author: "Artem",
//     rating: 9,
// }, 7);

//! ===================== PUT (UPDATE)=====================
// function updatePutBookById(update, bookId){
//     const options = {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(update)
//     }
//     return fetch(`${BASE_URL}/books/${bookId}`, options)
//         .then((res) => res.json())
//         .then(console.log("Книга оновлена повністю"));
// }

//? ===================== Виклик функції =====================
// updatePutBookById({
//     title: "UPDATE BOOK",
//     author: "Artem",
//     rating: 9,
// }, 7);

//! ===================== DELETE (UPDATE)=====================

// function removeBook(bookId){
//     const options = {
//         method: "DELETE",
//     }
//     return fetch(`${BASE_URL}/books/${bookId}`, options)
//         .then((res) => res.json())
//         .then(console.log(`Книга з "id ${bookId}" видалена`));
// }

//? ===================== Виклик функції =====================
// for(let i = 10; i < 100; i += 1){
//     removeBook(i);
// }

// removeBook(12)