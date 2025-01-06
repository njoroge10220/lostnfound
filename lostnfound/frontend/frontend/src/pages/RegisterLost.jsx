

import React, { useState } from "react";
import axios from "axios";

import Button from "./button";
import Navbar from "./navbar";

function RegisterLost(){
                
    const [lost_item_name, setLost_item_name] = useState('')
    const [lost_item_description, setLost_item_description] = useState('')
    const [owner_contact, setOwner_contact] = useState('')
    const [lost_item_img, setLost_item_img] = useState(null)
    

    async function postLost(){
        if(lost_item_name != '' || lost_item_description != '' || owner_contact != '' || lost_item_img != ''){
            try{
                await axios.post('http://127.0.0.1:8000/api/lost-item-create/', 
                {lost_item_name, lost_item_description, owner_contact, lost_item_img},
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                }
            )
            alert('Lost Item sucessfully registered')
            }catch(err){
                alert(`Error posting lost item: ${err.message}`)
            }
        }else{
            alert('input filed is empty')
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        postLost()    
        
        setLost_item_name('')
        setLost_item_description('')
        setOwner_contact('')
        setLost_item_img(null)
    }

    return(
        <>
        <Navbar />
        <div className=" w-[80%]  place-content-center mx-auto h-screen flex flex-col bg-[#aaabab80] ">
            <form onSubmit={handleSubmit}  className="w-[80%] place-content-center flex flex-col  mx-auto  p-10">
                <h2 className="w-full text-center my-5 font-bold text-xl">What got Lost?</h2>
                <input type="text" placeholder="enter item name" name = 'name' onChange={(e) => setLost_item_name(e.target.value)} className="p-2 my-2 w-[80%] mx-auto  rounded-md " />
                <input type="text" placeholder="enter item description" name = 'description' onChange={(e) => setLost_item_description(e.target.value)} className="p-2 my-2 w-[80%] mx-auto  rounded-md " />
                <input type="text" placeholder="enter contact" name = 'contact' onChange={(e) => setOwner_contact(e.target.value)} className="p-2 my-2 w-[80%] mx-auto  rounded-md " />
                <input type="file" accept="image/*" name = 'img' onChange={(e) => setLost_item_img(e.target.files[0])} className="p-2 my-2 w-[80%] mx-auto  rounded-md " />
                <div className="mx-auto my-5"><Button>Register Lost Item</Button>  </div>                   
            </form>
        </div>
        </>
    )
}

export default RegisterLost