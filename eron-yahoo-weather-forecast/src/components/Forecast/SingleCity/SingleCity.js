import React from 'react';

const singleCity = (props) => (


// if (transformedIngredients.length === 0) {
//     transformedIngredients = <p>Por favor! Insira ingredientes!</p>;
// }  

    <div>
        {props.id}--
        {props.name}--
        {props.country}--
        {props.temp}
    </div>
);


export default singleCity;
