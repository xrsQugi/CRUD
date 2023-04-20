const BASE_URL = "http://localhost:3000";


// //! ===================== GET (READ)=====================
async function fetchBooks(){
    try {
        const response = await fetch(`${BASE_URL}/books`)
        const books = await response.json();
        return console.log(books);;
    } catch (error) {
        console.log(error);
    }
    
}

async function fetchBookById(id){
    try {
        const res = await fetch(`${BASE_URL}/books/${id}`)
        const bookById = await res.json();
        return console.log(bookById);
    } catch (error) {
        console.log(error);
    }
    
}

// //? ===================== Виклик функції =====================
fetchBooks();
fetchBookById(4);
