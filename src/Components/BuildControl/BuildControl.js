import React from 'react';
import BurgerControl from './Burgercontrol/BurgerControl';
import Aux from '../../hoc/Aux/Aux'

const BurgerData= 
[{label :'salad',type :'salad'},
{label :'cheese',type :'cheese'},
{label :'meat',type :'meat'},
{label :'bacon',type :'bacon'}]

const BuildControl = (props)=>
{
    const list =  BurgerData.map(ins=>(
        <BurgerControl label={ins.label} 
        key={ins.label} 
        added={()=>props.addIngrediant(ins.type)}
        removed ={()=>props.removeIngrediant(ins.type)}
        />
    ))
    return (
        <Aux>
            {list}
        </Aux>
    )
}

export default BuildControl;