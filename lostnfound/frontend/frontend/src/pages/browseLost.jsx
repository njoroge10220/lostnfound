

import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "./button";
import Navbar from "./navbar";
import ItemCard from "./itemCard";

function BrowserLost(){
    const [lostItems, setLostItems] = useState([
        {
            id:0,
            lost_item_name:'',
            lost_item_description:'',
            owner_contact:'',
            lost_item_img:'',
        }
    ])

    async function getLostItems(){
        try{
            const gotItems = await axios.get('http://127.0.0.1:8000/api/lost-item-create/')
            setLostItems(gotItems.data)          
        }catch(err){
            alert(`Errors in fetching lost items : ${err.message}`)
        }
    }

    useEffect(() =>{
        getLostItems()
    },[])

    return(
        <>
        <Navbar />
        <div className="py-4">
            <h2 className="w-full text-center my-5 font-bold text-xl">Lost Items</h2>
            <div className="w-[80%] mx-auto  ">
              <ul className=" grid md:grid-cols-2 grid-cols-1 ">
              {lostItems.map((item) =>(
                    <li key={item.id} className=" p-4">
                        <ItemCard 
                        title={item.lost_item_name}
                        image={item.lost_item_img}
                        descrption={item.lost_item_description}
                        contact={item.owner_contact}
                        />
                    </li>
                ))}
              </ul>
            </div>
        </div>
        </>
    )
}

export default BrowserLost