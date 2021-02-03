import React from 'react';
import Classes from './Button.css';

const button = (props) => (
    //classname must be a string
    <button
        className={[Classes.Button, Classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}
    </button>
);

export default button;