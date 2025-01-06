
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //for navigation ie redirecting

import Button from "./button";


function Register(){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function postCredentials(){
        if(username != '' && password != '' && email != ''){
            try{
                await axios.post('http://127.0.0.1:8000/api/register/',
                    { username, email, password }
                );
                alert(`new user registration is successful,  ${username} welcome`) 
                navigate('/browse-found-items')
            }catch(err){
                alert(`the new user registration failed due to: ${err.message}`)
            }
        }else{
            alert('input field is empty')
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        postCredentials()

        username = ''
        email = ''
        password = ''
    }


    return(
        <>
           <div className=" w-[80%]  place-content-center mx-auto h-screen flex flex-col bg-[#aaabab80] ">
           <form onSubmit={handleSubmit}  className="w-[80%] place-content-center flex flex-col  mx-auto  p-10">
                    <h2 className="w-full text-center my-5 font-bold text-xl">Register</h2>
                    <input placeholder="enter your username" onChange={(e) => setUsername(e.target.value)} name="username" className="p-2 my-2 w-[80%] mx-auto  rounded-md "/>
                    <input placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} name="email" className="p-2 my-2 w-[80%]  mx-auto rounded-md "/>
                    <input placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} name="password" className="p-2  my-2 w-[80%] mx-auto rounded-md  "/>
                    <div className="mx-auto my-5"><Button>Register</Button>  </div>                    
                </form>
                <div className="mx-auto my-5"><a href="/login"><Button>Log In</Button></a></div>
           </div>
        </>
    )
}

export default Register