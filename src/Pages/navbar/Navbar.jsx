import React from 'react';
import NavbarItem from "../../components/navbar/NavbarItem";
import s from './Navbar.module.css'
const Navbar = ({objs, changeActive}) => {
    return (
        <div className={s.nav}>
            {objs.map(o => <NavbarItem o={o} changeActive={changeActive} key={o.id}/>)}
        </div>
    );
};

export default Navbar;