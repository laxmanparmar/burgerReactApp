import React, { Component } from 'react';

import Aux from '../Aux/Aux';

import NavBar from '../../Components/NavBarMenu/NavBar/NavBar';

class Layout extends Component {

    render () {
        return (
            <Aux>
                <NavBar/>
                {this.props.children}
            </Aux>
        )
    }
}

export default Layout;