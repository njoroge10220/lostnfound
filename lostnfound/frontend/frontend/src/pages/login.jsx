
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

import Button from "./button";

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function postLogin(){
        if(username != '' && password != ''){
            try{
                await axios.post('http://127.0.0.1:8000/api/login/', 
                { username, password })
                alert(`Login was successful,  ${username} welcome!`)
                navigate('/browse-found-items')
            }catch(err){
                alert(`Login failed due to: ${err.message} `)
            }
        }else{
            alert('input field is empty')
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        postLogin()

        username = ''
        password = ''
    }

    return(
        <>
        <div className=" w-[80%]  place-content-center mx-auto h-screen flex flex-col bg-[#aaabab80] ">
            <form onSubmit={handleSubmit}  className="w-[80%] place-content-center flex flex-col  mx-auto  p-10">
                <h2 className="w-full text-center my-5 font-bold text-xl">Login</h2>
                <input placeholder="enter your username" onChange={(e) => setUsername(e.target.value)} name="username" className="p-2 my-2 w-[80%] mx-auto  rounded-md "/>
                <input placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} name="password" className="p-2  my-2 w-[80%] mx-auto rounded-md  "/>
                <div className="mx-auto my-5"><Button>Log in</Button>  </div>            
            </form>
            <div className="mx-auto my-5"><a href="/"><Button>Register</Button></a></div>
            </div>
        </>
    )
}

export default Login