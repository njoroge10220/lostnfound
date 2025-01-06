
import React from "react";

function Button(props){
    return(
        <>
        <button>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-[#1a1a1a] p-2 font-semibold text-center  text-lg ">
                {props.children}
            </div>
        </button>
        </>
    )
}

export default Button
