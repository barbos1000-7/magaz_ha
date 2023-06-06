import React from 'react';
import ObjItem from "../../components/objects/ObjItem";
import s from './Search.module.css'
const Search = ({value, onChange, objs, changeLike}) => {
    return (
        <div className={s.src}>
            <input className={s.inp} value={value} onChange={e => onChange(e.target.value)} placeholder='введите название...'/>
            <div className={s.bl}>
            {objs.map(p => <ObjItem obj={p} changeLike={changeLike}/>)}</div>
        </div>
    );
};

export default Search;