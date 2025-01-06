
import React, { useEffect, useState } from "react";
import axios from "axios";


import Button from "./button";
import Navbar from "./navbar";

function RegisterFound(){

    const [found_item_name, setFound_item_name] = useState('')
    const [found_item_description, setFound_item_description] = useState('')
    const [founder_contact, setFounder_contact] = useState('')
    const [found_item_img, setFound_item_img] = useState(null)

    async function postFound(){
        if(found_item_name  != '' || found_item_description  != '' || founder_contact  != '' || found_item_img != ''){
            try{
                await axios.post('http://127.0.0.1:8000/api/found-item-create/',
                {found_item_name, found_item_description, founder_contact, found_item_img},
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
                alert('found Item sucessfully registered')
            }catch(err){
                alert(`Error posting found item: ${err.message}`)
            }
          }else{
            alert('input filed is empty')
        }
    }

    
    function handleSubmit(e){
        e.preventDefault()
        postFound() 
        
        setFound_item_name('')
        setFound_item_description('')
        setFounder_contact('')
        setFound_item_img(null)
    }

    return(
        <>
        <Navbar />
        <div className=" w-[80%]  place-content-center mx-auto h-screen flex flex-col bg-[#aaabab80] ">
            <form onSubmit={handleSubmit}  className="w-[80%] place-content-center flex flex-col  mx-auto  p-10">
                <h2 className="w-full text-center my-5 font-bold text-xl">What did you find?</h2>
                <input type="text" placeholder="enter item name" name = 'name' onChange={(e) => setFound_item_name(e.target.value)} className="p-2 my-2 w-[80%] mx-auto  rounded-md " />
                <input type="text" placeholder="enter item description" name = 'description' onChange={(e) => setFound_item_description(e.target.value)} className="p-2 my-2 w-[80%] mx-auto  rounded-md " />
                <input type="text" placeholder="enter contact" name = 'contact' onChange={(e) => setFounder_contact(e.target.value)} className="p-2 my-2 w-[80%] mx-auto  rounded-md " />
                <input type="file" accept="image/*" name = 'img' onChange={(e) => setFound_item_img(e.target.files[0])} className="p-2 my-2 w-[80%] mx-auto  rounded-md " />
                <div className="mx-auto my-5"><Button>Register Found Item</Button>  </div>                   
            </form>
        </div>
        </>
    )
}

export default RegisterFound