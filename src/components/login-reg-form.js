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
      <form className={`${classes.reg} register-form `}>
      	<input type="text" placeholder="Имя" onChange={(event)=>{props.ListenName(event.target.value)}}/>
      	<input type="text" placeholder="Фамилия" onChange={(event)=>{props.ListenLastName(event.target.value)}}/>
        <input type="password" placeholder="password" onChange={(event)=>{props.ListenPassword(event.target.value)}}/>
        <input type="password" placeholder="password" onChange={(event)=>{props.CheckPassword(event.target.value)}}/>
        <input type="text" placeholder="email address" onChange={(event)=>{props.ListenEmail(event.target.value)}}/>
        <button onClick={(event)=>{props.Regist()}}>create</button>
	    <p className="message">Уже есть аккаунт? <a href="#" onClick={(event)=>{ShowLogForm()}}>Войти</a></p>
      </form>
      <form className={`${classes.log} login-form`}>
        <input type="text" placeholder="email address" onChange={(event)=>{props.ListenSignInEmail(event.target.value)}}/>
        <input type="password" placeholder="password" onChange={(event)=>{props.ListenSignInPassword(event.target.value)}}/>
        <button onClick={(event)=>{props.SignIn()}}>login</button>
        <p className="message">Не зарегистрированны? <a href="#" onClick={(event)=>{ShowRegForm()}}>Создать аккаунт</a></p>
      </form>
    </div>
    )
}


export default LoginRegForm;