import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

const Navigation = (props)=>
{
    return (
        <Aux><a href={props.urlPath} >{props.children}</a></Aux>
        
    )
}

export default Navigation;