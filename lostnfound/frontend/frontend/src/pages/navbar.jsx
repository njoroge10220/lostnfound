
import { React, useState } from 'react'

import Button from './button'

function Navbar(){

    const navbar_Links = [
        {id:1, link: '/browse-lost-items', text:'Browser Lost Items'},        
        {id:2, link: '/register-lost-items', text:'Register Lost Items'},
        {id:3, link: '/browse-found-items', text:'Browser Found Items'},
        {id:4, link: '/register-found-items', text:'Register Found Items'},
    ]
    return (
        <>
            <nav className='w-full bg-[#ffffff80] '>
                <div className='w-[80%] mx-auto p-4 '>
                    <div className=" flex flex-row justify-between">
                        {navbar_Links.map((link) =>(
                            <a href={link.link} key={link.id} className='px-2 flex flex-grow'><Button> {link.text} </Button></a>
                        ))}                   
                    </div>
                </div>
            </nav>
        </>
    )
}export default Navbar

