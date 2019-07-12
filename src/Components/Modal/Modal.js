import React from 'react';
import './Modal.css';

const Modal = (props) =>
{
    return (

        <div id="popup1" className="overlay"  style={{
            display: props.show ? 'block' : 'none'
            
        }}>
	<div className="popup">
		<h2>{props.title}</h2>
		<a className="close" onClick={props.closeModal}>&times;</a>
		<div className="content">
			{props.children}
		</div>
	</div>
</div>
    )
}

export default Modal;