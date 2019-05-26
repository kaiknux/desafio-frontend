import React from 'react';

const singleCity = (props) => (


// if (transformedIngredients.length === 0) {
//     transformedIngredients = <p>Por favor! Insira ingredientes!</p>;
// }  

    <div className='Container'>
        <div className="Minmax">{props.tempmin}</div>
        <div className="Minmax">{props.tempmax}</div>
        <div className="Divname">{props.name}</div>
    </div>
);


export default singleCity;
