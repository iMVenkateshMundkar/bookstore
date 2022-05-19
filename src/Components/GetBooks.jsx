import React, {useState, useEffect} from "react";
import axios from "axios";



function GetBooks(){
    let [books, setBooks] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:8000/books')
      .then(res => setBooks(res.data))
      .catch(err => console.log(err))
    })
  console.log(books);
  return (
      <>
        {books.map(book => <h1>{book.author}</h1>)}
      </>
  );
}

export default GetBooks;