import React from 'react';

import './BurgerControl.css';

const BurgerControl = (props) => (
    <div className="burger_control">
        <div className="burger_control_label">{props.label}</div>
        <button 
            className="burger_control_burgerBtn"
            onClick={props.removed} 
            disabled={props.disabled}>Less</button>
        <button 
            className="burger_control_burgerBtn"
            onClick={props.added}>More</button>
    </div>
);

export default BurgerControl;