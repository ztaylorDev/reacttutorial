import React from 'react';
import Book from '../Book/book';


function BookViewer(props){ 
    return(
        <div className="row row-spacer"> 
            <div className="col-md-4">
                <button onClick={() => props.previousBook()}>Pevious Book</button> 
            </div>
            <div className="col-md-4">
                <Book book={props.book}/>
            </div>
            <div className="col-md-4">
             <button onClick={() => props.nextBook()}>Next Book</button> 
            </div>
        </div>
    )
}








export default BookViewer;