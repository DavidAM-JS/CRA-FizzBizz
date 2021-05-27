import React from 'react';
import './FizzBuzz.css';

function FizzBuzz({count, color, text}){
    return(
        <div className={color}>
            <h1 className="text">{text}</h1>
            <span className="count">{count}</span>
        </div>
    )
}

export default FizzBuzz;