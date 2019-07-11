import React, { Component } from 'react';


class BurgerIngredients extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bottom' ):
                ingredient = <li className="bottom"></li>;
                break;
            case ( 'top' ):
                ingredient = (
                    <li className="top"></li>
                );
                break;
            case ( 'meat' ):
                ingredient = <li className="meat"></li>;
                break;
            case ( 'cheese' ):
                ingredient = <li className="cheese"></li>;
                break;
            case ( 'bacon' ):
                ingredient = <li className="bacon"></li>;
                break;
            case ( 'salad' ):
                ingredient = <li className="salad"></li>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}



export default BurgerIngredients;