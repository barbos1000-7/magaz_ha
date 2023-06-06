import React from 'react';
import ObjItem from "../../../components/objects/ObjItem";
import s from './Objects.module.css'
import MySelect from "../../../components/UI/selected/MySelect";

const Objects = ({objs, changeLikes, options, changeSel, value}) => {
    return (
        <div className={s.all}>
            <div className={s.select}>
            <MySelect onChange={changeSel} value={value} options={options}/></div>
            <div className={s.bl}>
                {objs.map(p => <ObjItem obj={p} key={p.id} changeLike={changeLikes}/>)}
            </div>
        </div>
    );
};

export default Objects;