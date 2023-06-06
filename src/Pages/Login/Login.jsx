import React from 'react';
import MyInput from "../../components/UI/input/MyInput";
import s from './Login.module.css'
import MyButton from "../../components/UI/button/MyButton";
const Login = ({isAuth, changeAuth}) => {
    return (
        <div className={s.log}>
            {!isAuth ? <div >
                <MyInput placeholder='введите логин' type='text'/>
                <MyInput placeholder='пароль' type='password'/>
                <MyButton onClick={()=> changeAuth(true)}>Войти</MyButton>
            </div> : <div><div>вы вошли</div>
                <MyButton onClick={()=> changeAuth(false)}>Выйти</MyButton></div>}
        </div>
    );
};

export default Login;