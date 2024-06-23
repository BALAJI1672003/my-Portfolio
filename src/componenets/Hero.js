/* eslint-disable jsx-a11y/alt-text */
import hero from '../assets/hero.png';
import { FaLinkedinIn, } from "react-icons/fa";
import { FaGithub,FaSquareInstagram  } from "react-icons/fa6";

export default function Hero()
{
    return <section className='flex flex-col justify-center px-5 py-32 bg-primary md:flex-row' id='hero'>
        <div className="flex-col md:w-1/2">
        <h1 className='text-6xl text-white font-hero-font'>Hi, <br/> Im <span className='text-black'>Balaji</span>
        <p className='text-2xl'>I am a Full-stack developer</p>
        </h1>
        <div className='flex py-10'>
         <a href="www.google.com" className='pr-5 hover:text-white'>< FaLinkedinIn size={40}/></a>
         <a href="www.google.com" className='pr-5 hover:text-white'>< FaGithub  size={40}/></a>
         <a href="www.google.com" className='pr-5 hover:text-white'>< FaSquareInstagram size={40}/></a>
        </div>
        </div>
        <img className='md:w-1/3' src={hero}  />
    </section>
}