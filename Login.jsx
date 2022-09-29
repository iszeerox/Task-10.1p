import React, {useState}  from 'react'
import Input from './Input'
import Button from './Button'
import Greeting from './Greeting'
import './App.css'
import { response } from 'express'
import { json } from 'body-parser'



const Login = (props)=>{
    const [contact , setContact] = useState({
        username:'',
        password:''
    })

 

    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    const handleClick = async()=>{
        await fetch ('http://localhost:8003/' , {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                username: contact.username,
                password: contact.password
            })

    })
        .then (response => response.json())
        .then(data => JSON.parse(data))
        .catch(err =>{
            console.log("Error: " + err)
        })

    }

    return <div className= 'header-div'>

       <Greeting 
       htext = {contact.username}
       ptext = {contact.password}
       />

       <Input 
       name= 'username'
       type= 'text'
       placeholder ='username'
       onChange = {handleChange}
       value = {contact.username}
       />

       <br></br>

       <Input 
       name='password'
       type= 'password'
       placeholder ='password'
       onChange = {handleChange}
       value = {contact.password}
       />

       <br></br>

       <Button 
           type = 'submit'
           text='Login'
           onClick = {handleClick}
       />

    </div>

}
export default Login