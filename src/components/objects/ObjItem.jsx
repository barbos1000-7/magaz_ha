import React from 'react';
import s from './Obj.module.css'
import {prettify} from "../../hepler/helpFunc";
const ObjItem = ({obj, changeLike}) => {
    let clLov = [s.like]
    obj.onLikes?clLov.push(s.likeL):clLov.push('aa')
    return (
        <div className={s.card}>
            <div>{obj.name}</div>
            <div><img src={obj.img} alt='none'/></div><div>цена: {prettify(obj.price)}</div>
            <div> количество в наличии: {obj.count}</div>
            <button onClick={()=> {
                changeLike(obj.id, !obj.onLikes)
            }}    className={clLov.join(' ')}>❤</button>

        </div>
    );
};

export default ObjItem;