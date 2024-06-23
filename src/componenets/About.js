/* eslint-disable jsx-a11y/alt-text */
import about from '../assets/about.png';
export default function About()
{
  return <section className='flex flex-col w-full h-full bg-secondary md:flex-row' id='about'>
    <div className='py-5 md:w-1/2'>
     <img src={about} />
    </div>
    <div className='flex justify-center text-white md:w-1/3'>
       <div className='flex flex-col justify-center font-hero-font'>
       <h1 className='mb-5 text-4xl border-b-4 w-[170px] font-bold border-primary'>About Me</h1>
       <p>Hello! I'm Balaji, a passionate and skilled software developer specializing in Java and the MERN stack. With a strong foundation in both backend and frontend technologies, I thrive on creating robust, scalable, and user-friendly applications.</p>
       <p className='pt-5'> I am proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), allowing me to build full-stack applications from the ground up. Whether it's creating dynamic, responsive user interfaces with React or developing server-side logic with Node.js, I enjoy bringing ideas to life through code.</p>
       </div>
    </div>
  </section>
}