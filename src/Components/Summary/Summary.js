import React from 'react';
import Aux from '../../hoc/Aux/Aux';
const Summary = (props) =>
{
    const ingredientSummary = Object.keys( props.ingredients )
    .map( igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li> );
    } );
    return (
        <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul style={{listStyleType: 'none'}}>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {props.price}</strong></p>
              
        </Aux>
                
    )
}
export default Summary;