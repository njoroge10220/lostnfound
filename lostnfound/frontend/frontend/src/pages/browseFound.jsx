
import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "./button";
import Navbar from "./navbar";
import ItemCard from "./itemCard";


function BrowserFound(){

    const [foundItems, setFoundItems] = useState([
        {
            id:0,
            found_item_name:'',
            found_item_description:'',
            founder_contact:'',
            found_item_img:'',
        }
    ])

    async function getFoundItems(){
        try{
            const gotItems = await axios.get('http://127.0.0.1:8000/api/found-item-create/')
            setFoundItems(gotItems.data)
        }catch(err){
            alert(`Errors in gathering the found items ${err.message}`)
        }
    }

    useEffect(() =>{
        getFoundItems()
    }, [])
    return(
        <>
        <Navbar />
        <div className="py-4">
        <h2 className="w-full text-center my-5 font-bold text-xl">Found Items</h2>
            <div className="w-[80%] mx-auto ">
              <ul className=" grid md:grid-cols-2 grid-cols-1 ">
                {foundItems.map((item) =>(
                    <li key={item.id} className=" p-4">
                        <ItemCard 
                        title={item.found_item_name}
                        image={item.found_item_img}
                        descrption={item.found_item_description}
                        contact={item.founder_contact}
                        />
                    </li>
                ))}
              </ul>
            </div>          
        </div>
        </>
    )
}

export default BrowserFound