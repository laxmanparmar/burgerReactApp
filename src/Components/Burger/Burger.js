import React from 'react';

import BurgerIngrediants from '../Burger/BurgerIngrediants/BurgerIngrediants';
import './Burger.css';
const Burger = (props)=>
{
    let result = Object.keys(props.ingredients).map(keyData =>{
        return [...Array(props.ingredients[keyData])].map((val,index)=>{
            return  <BurgerIngrediants key={keyData + index} type={keyData} />
        })
    })
    const ingredCount = [].concat.apply([], result).length;
   
    return (
        <center>
                  <div className="burger-menu">
                  
                  <BurgerIngrediants type="top"/>
                  {ingredCount ===0? 'Please select Ingrediants' : result}
                    
                  <BurgerIngrediants type="bottom"/>
           
        </div>
        </center>
      
    )
}

export default Burger;