import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
export default function Navbar()
{
    const[toggleMenu,setToggleMenu]=useState(false);
   return (
    <header className="flex justify-between px-5 py-5 bg-primary">
        <a  className="text-4xl font-bold text-black font-hero-font" href="./Navbar.js">BALAJI A</a>
        <nav className="hidden md:block">
        <ul className='flex text-2xl text-black font-hero-font'>
            <li className=' hover:border-b-2'><a href='/'>Home</a></li>
            <li className=' hover:border-b-2'><a href='#about'>about</a></li>
            <li className=' hover:border-b-2'><a href='#contact'>contact</a></li>
            <li className=' hover:border-b-2'><a href='#resume'>Resume</a></li>
            <li className=' hover:border-b-2'><a href='#project'>projects</a></li>
        </ul>  
        </nav>
      {toggleMenu&&<nav className="top-0 block md:hidden">
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className='flex flex-col text-black mobile-nav font-hero-font'>
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>about</a></li>
            <li><a href='.#contact'>contact</a></li>
            <li><a href='.#project'>project</a></li>
            <li><a href='#resume'>resume</a></li>
        </ul>  
        </nav>}
        <button className='block md:hidden' onClick={()=>setToggleMenu(!toggleMenu)}><Bars3Icon className='h-5 text-white'/></button>
    </header>
   );
}