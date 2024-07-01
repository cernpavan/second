import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {books} from './books';
import Book from './Book';
import { greeting } from  './testing/testing';




function BookList() {
  return (
    <section className='Bookslist'>
      {books.map((book, index) => (
        <Book book={book} />
      ))}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));



// const names=['susan','pavan'];

// const newname=names.map((name)=>{
//   return <h1>{name}</h1>;
// });
