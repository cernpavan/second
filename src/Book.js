import React from 'react';



const Book = ({ book }) => {
    const { image, title, author } = book;
  
    const clickHandler=(  )=>{
      alert("hello world");
    };
    const complexample=(author)=>{
      console.log(author);
    };
  
    return (
      <article className='Books'>
        <img src={image} alt={title}></img>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>submit</button>
        <br/>
        <button type="button" onClick={complexample(author)}>more complex example</button>
      </article>
    );
  };
  
export default Book;