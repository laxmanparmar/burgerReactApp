import React,{Component} from 'react';
import Burger from '../Components/Burger/Burger';
import BuildControl from '../Components/BuildControl/BuildControl';

import OrderHistory from '../Components/OrderHistory/OrderHistory';
import {connect} from 'react-redux';
import './BurgerBuilder.css';
import Aux from '../hoc/Aux/Aux';
import * as actionType from '../reduxStore/actions';



class BurgerBuilder extends Component{

    
    render()
    {
       
        return(
            <Aux>
             
                 <Burger ingredients={this.props.ingData}/>

            <div className="burger_builder">
                <p>Price : <strong>{this.props.totalPrice}</strong></p>
                <BuildControl addIngrediant={(type)=>this.props.onAddIngrediant(type)}
                removeIngrediant={(type)=> this.props.onRemoveIngrediant(type)}
                ingInfo={this.props.ingData}
                />
                <OrderHistory price={this.props.totalPrice} ingredients={this.props.ingData}/>
            </div>   
            </Aux>
            
        )
    }
}

const mapStateToProps = (state) =>
{
    return  { ingData : state.ingredients,
            totalPrice : state.totalPrice
            };
    
}

const mapDistachToProps =(dispatch) =>
{
    return{
        onAddIngrediant: (iName)=> dispatch({type : actionType.ADD_INGREDIANT,ingName: iName}),
        onRemoveIngrediant: (iName)=> dispatch({type : actionType.REMOVE_INGREDIANT,ingName: iName})
    }
}
export default connect(mapStateToProps,mapDistachToProps)(BurgerBuilder);