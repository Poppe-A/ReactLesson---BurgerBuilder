import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './layout.css';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../Toolbar/Navigation/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    SideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true});
    }

    render () {
        return (<Aux>
            <Toolbar openSideDrawer={this.SideDrawerOpenHandler}/>
            <SideDrawer open={this.state.showSideDrawer} close={this.SideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>)
    }
} 
export default Layout;