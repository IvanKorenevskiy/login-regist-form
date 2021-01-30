import './App.css';
import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import LoginRegForm from "./components/login-reg-form.js";
import PersonalAccount from "./components/personal-account.js";
import firebase from 'firebase'
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

//Функция регистрации  (пока без подтверждения пароля, для отправки емейл сообщения нужен домен. Валидация ещё не доделана)
  function Regist () {
    if (checkPassword === password&&password.length>=6&&email.length!==0&&name.length>=2&&lastName.length>=2){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( onfulfilled => alert ("Регистрация прошла успешно!")) 
      .catch()
    }else {
      alert ("Заполните корректно форму регистрации!")
    }
  }
//функция входа 
  function SignIn () {
    firebase.auth().signInWithEmailAndPassword(signInEmail, signInPassword)
    .then( onfulfilled => {setHasAccount(true)})
    .catch(error => console.log(error))
    
  }
//функции, слушающие изменения в инпутах
  function ListenName (event) {
    setName(event)
  }

  function ListenLastName (event) {
    setLastName(event)
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
    if (checkPassword === password) {
      console.log(true)
    }
  }
  function ListenSignInEmail (event) {   
    setSignInEmail(event)
  }

  function ListenSignInPassword (event) {   
    setSignInPassword(event)
  }


  //возвращаем вёрстку, если пользователь залогинился, перекидываем на страницу личного кабинета
  return (
    <div class="login-page">
      {hasAccount ?(
      <PersonalAccount/>
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
        />
      )}
    </div>
  );
}
export default App;



