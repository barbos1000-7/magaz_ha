import React from 'react';
import s from './MyButton.module.css'
const MyButton = ({...props}) => {
    return (
        <button className={s.btn} {...props}>

        </button>
    );
};

export default MyButton;