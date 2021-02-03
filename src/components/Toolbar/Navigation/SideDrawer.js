import React from 'react';

import Classes from './SideDrawer.css'

import Logo from "../../Logo/Logo";
import NavigationItems from "./NavigationItems";
import Backdrop from "../../Ui/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";


const sideDrawer = (props) => {
    let attachedClasses = [Classes.SideDrawer, Classes.Close];
    if (props.open) {
        attachedClasses = [Classes.SideDrawer, Classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.close}></Backdrop>
            <div className={attachedClasses.join(" ")}>
                <div className={Classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
       
    );
};

export default sideDrawer;