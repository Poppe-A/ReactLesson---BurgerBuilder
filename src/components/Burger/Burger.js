import React from 'react';

import classes from './burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let ingredients = Object.keys(props.ingredients)
        .map(igKey => { //ingredientKey
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                   return <BurgerIngredient key={igKey + i} type={igKey}/>;
                })
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, [])
    if (ingredients.length === 0) {
        ingredients = <p>Please add ingredients</p>;
    }
    console.log("klkkk", ingredients)
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;