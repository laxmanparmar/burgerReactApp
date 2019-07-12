import React,{Component} from 'react';
import Summary from '../Summary/Summary';
import {connect} from 'react-redux';
import axios from '../../common/axiosInstance';

class Checkout extends Component
{
    orderBurger = ()=>
    {
        const orderData= {
            ...this.props.ingData,
            totalPrice : this.props.totalPrice
        }
        
        axios.post('/order.json',orderData)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
   render()
    {
        return(
            <div>
                    <Summary ingredients={this.props.ingData} price={this.props.totalPrice}/>
                    <a className="buttonOk" onClick={this.orderBurger}>Order</a>
            </div>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return  { ingData : state.ingredients,
        totalPrice : state.totalPrice
        };
}
export default connect(mapStateToProps)(Checkout);