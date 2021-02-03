import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../Ui/Button/Button';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map((igKey, index) => {
            return (
            <li key={index}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]} 
            </li> 
            //style {{}} pour annoncer du contenu dynamique et pour js object
            ) // paranthese parce que return sur plusieurs lignes
        });

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A burger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <p>Total Price: {props.totalPrice.toFixed(2)}</p>
            <p>Continue to checkout ?</p>
            <Button clicked={props.cancelPurchase} btnType="Danger">CANCEL</Button>
            <Button clicked={props.continuePurchase} btnType="Success">CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;