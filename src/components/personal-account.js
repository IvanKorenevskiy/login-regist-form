import './login-reg-form.scss';
import React from 'react';
import {useEffect, useState} from "react";
import LoginRegForm from "./login-reg-form.js";


const PersonalAccount = (props) => {
  return (
  	<div>
    	<h1>Ваш личный кабинет</h1>
    	<button onClick={(event)=>{props.LogOut()}}>Выйти</button>
    </div>
    )
  
}
	


export default PersonalAccount;