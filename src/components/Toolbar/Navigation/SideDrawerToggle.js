import React from "react";

import Classes from './SideDrawerToggle.css';

const sideDrawerToggle = (props) => {
    return ( 
        <div className={Classes.DrawerToggle} onClick={props.openSideDrawer}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default sideDrawerToggle;