import React from 'react'; 
import './book.css';


function Book(props){
    return (
        <div className="book">
            <div className="cover">
                <h1 className="title">{props.book.title}</h1>
                <h4 className="description">{props.book.description}</h4>
            </div>
        </div>

    ); 

}




export default Book;