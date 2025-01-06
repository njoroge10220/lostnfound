
import React from "react";

import Button from "./button";

function ItemCard({ title, image, descrption, contact}){
    return(
        <>
        <body>
            <div className="flex flex-col bg-[#aaabab] rounded-md mx-auto w-[80%] "> 
                <div>
                    <img src={image} alt={`lost ${title} image `} className="w-full rounded-t-md" />
                </div>
                <div className="w-[90%] flex flex-col mx-auto py-2 px-4 text-xl font-semibold "> <h2>name: {title} </h2> </div>
                <div className="w-[90%] flex flex-col mx-auto py-2 px-4  font-semibold ">
                    <p> {descrption} </p>
                </div>
                <div className="w-[90%] flex flex-col mx-auto py-2 px-4 text-xl font-semibold ">
                    <h3> call: {contact} </h3>
                </div>
                
            </div>
        </body>
        </>
    )
}

export default ItemCard
