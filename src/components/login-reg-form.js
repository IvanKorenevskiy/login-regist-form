import './login-reg-form.scss';
import React from 'react';
import {useEffect, useState} from "react";



const LoginRegForm = (props) => {
	const [classes, setClasses] = useState({log: "display-block", reg: "display-none"})


	function ShowRegForm () {	
		setClasses ({
			log:"display-none",
			reg:"display-block"
		})			
	} 
	function ShowLogForm () {	
		setClasses ({
			log:"display-block",
			reg:"display-none"
		})			
	} 
	
		
  return (
    <div className="form">
      <form className={`${classes.reg} form__registeration `}>
        <p className="form__title">Введите имя</p>
        {props.NameWarning()}
      	<input type="text" placeholder="Имя" onChange={(event)=>{props.ListenName(event.target.value)}}></input>
        <p className="form__title">Введите фамилию</p>
        {props.LastNameWarning()}
      	<input type="text" placeholder="Фамилия" onChange={(event)=>{props.ListenLastName(event.target.value)}}></input>
        <p className="form__title">Введите пароль</p>
        {props.PasswordWarning()}
        <input type="password" placeholder="Пароль" onChange={(event)=>{props.ListenPassword(event.target.value)}}></input>
        <p className="form__title">Повторите пароль</p>
        {props.CheckPasswordWarning()}
        <input  type="password" placeholder="Пароль" onChange={(event)=>{props.CheckPassword(event.target.value)}}></input>        
        <p className="form__title">Введите адрес почты</p>
        {props.EmailWarning()}
        <input type="text" placeholder="Почта" onChange={(event)=>{props.ListenEmail(event.target.value)}}></input>
        <button onClick={(event)=>{props.Regist()}}>Создать</button>
	    <p className="form__message">Уже есть аккаунт? <a href="#" onClick={(event)=>{ShowLogForm()}}>Войти</a></p>
      </form>
      <form className={`${classes.log} form__logining`}>
        <p className="form__title">Введите адрес почты</p>
        <input type="text" placeholder="Почта" onChange={(event)=>{props.ListenSignInEmail(event.target.value)}}></input>
        <p className="form__title">Введите пароль</p>
        <input type="password" placeholder="Пароль" onChange={(event)=>{props.ListenSignInPassword(event.target.value)}}></input>
        <button onClick={(event)=>{props.SignIn()}}>Войти</button>
        <p className="form__message">Не зарегистрированны? <a href="#" onClick={(event)=>{ShowRegForm()}}>Создать аккаунт</a></p>
      </form>
    </div>
    )
}


export default LoginRegForm;