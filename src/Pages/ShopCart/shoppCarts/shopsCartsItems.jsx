import React from 'react';
import ObjShopItem from "../../../components/objectsShop/objShopItem";
import s from './ShopsCartsItems.module.css'
import MyButton from "../../../components/UI/button/MyButton";
const ShopsCartsItems = ({objs, clickButtn, totalCost, changeLikes, isAuth}) => {
    let a
    a = objs.length !== 0;
    return (
        <div>
            {isAuth?'':<div className={s.title}>чтобы товары сохранились в корзине войдите в свой аккаунт.</div>}
            {objs.map(p => <ObjShopItem o={p} key={p.id} clickButtn={clickButtn} changeLikes={changeLikes}/>)}
            {a?<div className={s.ttl}><span>ИТОГО: {totalCost}</span><MyButton onClick={()=> alert('My Qiwi: BARBAROSSAA')} style={{marginLeft:'10px'}}>ОПЛАТИТЬ</MyButton></div>:<div style={{textAlign:'center'}}>В КОРЗИНЕ НЕТ ТОВАРОВ</div>}
        </div>
    );
};

export default ShopsCartsItems;