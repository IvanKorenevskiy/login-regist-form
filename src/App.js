import './App.css';
import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import LoginRegForm from "./components/login-reg-form.js";
import PersonalAccount from "./components/personal-account.js";
import firebase from 'firebase'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyCd6OBQoFaJIlhfosRw7V1OsryNPBWhVjY",
  authDomain: "users-850df.firebaseapp.com",
  databaseURL: "https://users-850df-default-rtdb.firebaseio.com",
  projectId: "users-850df",
  storageBucket: "users-850df.appspot.com",
  messagingSenderId: "326696285108",
  appId: "1:326696285108:web:5732d6f5aaa29444afb8e1"
}

firebase.initializeApp (firebaseConfig);


function App(props) {
  const [appState, setAppState] = useState();
  const [password, setPassword] = useState("")
  const [checkPassword, setCheckPassword] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [signInEmail, setSignInEmail] = useState("")
  const [signInPassword, setSignInPassword] = useState("")
  const [hasAccount, setHasAccount] = useState(false)



//Функция регистрации
  function Regist () {
    if (checkPassword === password&&password.length>=6&&email.length!==0&&name.length>=2&&lastName.length>=2){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( onfulfilled => alert ("Регистрация прошла успешно!")) 
      .catch(error => {
        if (error.code==="auth/email-already-in-use") {
          alert ("Пользователь с такой почтой уже существует!")
        } 
      })
    }else {
      alert ("Заполните корректно форму регистрации!")
    }
  }
// Валидация
function CheckPasswordWarning (argument) {
  if (checkPassword !== password) {
    return (
      <p style = {{color: "red"}}>Пароли должны совпадать *</p>
      )    
  }else {return null}
}

function NameWarning (argument) {
  if (name.length<2) {
    console.log(name);
    return (<p style = {{color: "red"}}>Имя должно состоять не менее чем из двух символов *</p>)    
  }else {
    return null
  }
}

function LastNameWarning (argument) {
  if (lastName.length<2) {
    return (<p style = {{color: "red"}}>Фамилия должно состоять не менее чем из двух символов *</p>)    
  }else {
    return null
  }
}


function PasswordWarning (argument) {
  if (password.length<6) {
    return (<p style = {{color: "red"}}>Пароль должен состоять не менее чем из 6 символов *</p>)    
  }else {
    return null
  }
}

function EmailWarning (argument) {
   let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(email)===false) {
    return (<p style = {{color: "red"}}>Введите корректные адрес почты *</p>)
  }
}

//функция входа 
  function SignIn () {
    firebase.auth().signInWithEmailAndPassword(signInEmail, signInPassword)
    .then( onfulfilled => {setHasAccount(true)})
    .catch(error => {alert ("Неправильный логин или пароль!")})
    
  }
//функции, слушающие изменения в инпутах
  function ListenName (event) {
    setName(event)
    NameWarning()
  }

  function ListenLastName (event) {
    setLastName(event)
    LastNameWarning()
  }

  function ListenEmail (event) {   
    setEmail(event)
  }

  function ListenPassword (event) {   
    setPassword(event)
    if (password.length>= 6){
      console.log(true)
    }
  }
          
  function CheckPassword (event) {   
    setCheckPassword(event) 
    CheckPasswordWarning()
  }

  function ListenSignInEmail (event) {   
    setSignInEmail(event)
  }

  function ListenSignInPassword (event) {   
    setSignInPassword(event)
  }

   function LogOut (event) {   
    setHasAccount(false)
  }

  //возвращаем вёрстку, если пользователь залогинился, перекидываем на страницу личного кабинета
  return (
    <div className="login-page">
      {hasAccount ?(

            <PersonalAccount LogOut={LogOut}/>

      )
      :
      (
        <LoginRegForm 
          ListenName={ListenName} 
          ListenLastName={ListenLastName} 
          ListenEmail={ListenEmail} 
          ListenPassword={ListenPassword} 
          CheckPassword={CheckPassword}
          Regist={Regist} 
          ListenSignInEmail={ListenSignInEmail}
          ListenSignInPassword={ListenSignInPassword}
          SignIn={SignIn}
          CheckPasswordWarning={CheckPasswordWarning}
          NameWarning={NameWarning}
          LastNameWarning={LastNameWarning}
          PasswordWarning={PasswordWarning}
          EmailWarning={EmailWarning}
        />
      )}
    </div>
  );
}
export default App;



