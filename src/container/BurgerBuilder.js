import React,{Component} from 'react';
import Burger from '../Components/Burger/Burger';
import BuildControl from '../Components/BuildControl/BuildControl';
import './BurgerBuilder.css';
import Aux from '../hoc/Aux/Aux';

const price = {
    salad: 2.5,
    cheese: 1.5,
    meat: 3,
    bacon: 2
};

class BurgerBuilder extends Component{

    state={
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
       
    }
       
    addIngrediant =(type)=>{
        const count = this.state.ingredients[type];
        const newCount = count + 1;
        const ingredientCopy = {
            ...this.state.ingredients
        };
        ingredientCopy[type] = newCount;
        const ingredientPrice = price[type];

        this.setState( { totalPrice: this.state.totalPrice+ingredientPrice,
             ingredients: ingredientCopy } );
    }

    removeIngrediant = (type) =>{
        const count = this.state.ingredients[type];
        if(count <=0)
        {
            return;
        }
        const newCount = count - 1;
        const ingredientCopy = {
            ...this.state.ingredients
        };
        ingredientCopy[type] = newCount;
        const ingredientPrice = price[type];

        this.setState( { totalPrice: this.state.totalPrice-ingredientPrice,
             ingredients: ingredientCopy } );
    }
    render()
    {
        return(
            <Aux>
                 <Burger ingredients={this.state.ingredients}/>
            <div className="burger_builder">
                <p>Price : <strong>{this.state.totalPrice}</strong></p>
                <BuildControl addIngrediant={(type)=>this.addIngrediant(type)}
                removeIngrediant={(type)=> this.removeIngrediant(type)}
                />
            </div>   
            </Aux>
            
        )
    }
}

export default BurgerBuilder;