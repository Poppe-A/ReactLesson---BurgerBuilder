import React from 'react';
import Classes from './Toolbar.css';
import Logo from '../Logo/Logo';
import SideDrawerToggle from './Navigation/SideDrawerToggle';
import NavigationItems from "./Navigation/NavigationItems";


const toolbar = (props) => (
    <header className={Classes.Toolbar}>
        <SideDrawerToggle openSideDrawer={props.openSideDrawer}/>
        <div className={Classes.Logo}>
            <Logo/>
        </div>
        <nav className={Classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;