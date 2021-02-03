import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../Ui/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate()  {
        console.log("update")
    }

    render () {
        const ingredients = Object.keys(this.props.ingredients)
        .map((igKey, index) => {
            return (
            <li key={index}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]} 
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
                <p>Total Price: {this.props.totalPrice.toFixed(2)}</p>
                <p>Continue to checkout ?</p>
                <Button clicked={this.props.cancelPurchase} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.continuePurchase} btnType="Success">CONTINUE</Button>
            </Aux>
        )
    }

}
    

export default OrderSummary;