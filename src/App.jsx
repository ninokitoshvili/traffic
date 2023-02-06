import logo from './logo.svg';
import React, { useEffect, useRef } from "react";
import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput'


const App = () => {
  // const [username, setUsername]=useState('')
  // console.log(username)

  // const usernameRef= useRef()
  // console.log('rede')

  const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(usernameRef)
    const data=new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }


  return <div className="App">
      <form onSubmit={handleSubmit}>
        {/* <FormInput placeholder="username" setUsername={setUsername}></FormInput> */}
        {/* <FormInput placeholder="username" refer={usernameRef}></FormInput> */}
        <FormInput name="username" placeholder="username" ></FormInput>
        <FormInput name="email" placeholder="email"></FormInput>
        <FormInput name="full name" placeholder="full name"></FormInput>
        <FormInput name="some" placeholder="some"></FormInput>
        <button>Submit</button>
      </form>
      
  
    </div>
  ;
}

export default App;
