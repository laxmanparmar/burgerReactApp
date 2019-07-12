import React,{Component} from 'react';
import Summary from '../Summary/Summary';
import {connect} from 'react-redux';
class Checkout extends Component
{
   render()
    {
        return(
            <div>
                    <Summary ingredients={this.props.ingData} price={this.props.totalPrice}/>
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