import React from 'react';
import s from './objShopItem.module.css'
import {priceCount} from "../../hepler/helpFunc";

const ObjShopItem = ({o, clickButtn, changeLikes}) => {
    let clLov = [s.like]
    console.log(o)
    o.onLikes ? clLov.push(s.likeL) : clLov.push('aa')
    return (
        <div className={s.card}>
            <div><img src={o.img} alt='none'/></div>
            <div className={s.item}>{o.name}</div>
            <div className={s.item}>
                всего: {o.count} </div>
            <div className={s.item}>
                выбрано: {o.meCount}</div>
            <button className={s.btn} onClick={() => clickButtn(o.id, true)}>+</button>
            <button className={s.btn} onClick={() => clickButtn(o.id, false)}>-</button>
            <div className={s.item}>цена: {priceCount(o.meCount, o.price)}</div>
            <button onClick={() => {
                changeLikes(o.id, !o.onLikes)
            }} className={clLov.join(' ')}>❤
            </button>
        </div>
    );
};

export default ObjShopItem;