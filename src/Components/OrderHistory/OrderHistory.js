import React,{Component} from 'react';
import Modal from '../Modal/Modal';
import Aux from '../../hoc/Aux/Aux';
import './OrderHistory.css';
import Summary from '../Summary/Summary';

import { withRouter} from 'react-router-dom';

class OrderHistory extends Component 
{
   state={
       showModal:false
   }
   closeModal = ()=>
   {
       this.setState({showModal:false});
   }

   goToCheckOut =() =>
   {
    //    const queryParams = [];

    //    for(let i in this.props.ingredients)
    //    {
    //     queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.props.ingredients[i]));
    //    }
    //    const queryString = queryParams.join("&");
       this.props.history.push({
           pathname :'/checkout'
           //search :'?'+queryString
       })
      // console.log(this.props);
   }
   render(){
    return (
        <Aux>
            <br/>
        <a className="order_button" onClick={()=> this.setState({showModal : true})}>Order Now</a>
        <Modal title='Order History' show={this.state.showModal} closeModal={this.closeModal}>
                <Summary price={this.props.price} ingredients={this.props.ingredients}/>
                <p>Continue to Checkout?</p>
                <a className="buttonCancel" onClick={this.closeModal}>Close</a>
                <a className="buttonOk" onClick={this.goToCheckOut}>Checkout</a>
        </Modal>
        </Aux>
    )
   }
   
}

export default withRouter(OrderHistory);