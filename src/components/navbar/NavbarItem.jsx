import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const NavbarItem = ({o, changeActive}) => {
    let cl = [s.butn]
    o.active ? cl.push(s.active) : cl.push(' ')
    return (
        <NavLink onClick={() => {
            changeActive(o.id)
        }} to={o.to}
                 key={o.id} className={cl.join(' ')}>{o.text}</NavLink>
    );
};

export default NavbarItem;