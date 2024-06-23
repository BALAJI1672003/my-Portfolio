/* eslint-disable jsx-a11y/alt-text */
import firstImage from '../assets/ecommerce-websites.jpg' ;
import secondImage from '../assets/food-ecommerce.jpg';
import thirdImage from '../assets/website-blog.jpg';

export default  function Project()
{
    return <section className="flex flex-col justify-center bg-primary" id='project'>
          <div className="w-full">
            <div>
                <h1 className='mb-5 text-4xl border-b-4 w-[150px] font-bold border-secondary ml-10 mt-5 font-hero-font'>Projects</h1>
                <p className='mt-5 mb-5 ml-10 text-2xl font-hero-font'>These are my webprjects build with react and node.js</p>
            </div>
          </div>
          <div className="w-full">
          <div className='flex flex-col gap-20 p-10 md:flex-row'>
        <div className='relative'>            
        <img className='h-[200px] w-[500px] rounded-2xl' src={firstImage}/>
        <div className='project-content'>
            <p className='pt-10 text-center'>This E-commerce website is developed using MERN stack</p>
        </div>
        </div>  
        <div className='relative'>
        <img className='h-[200px] w-[500px] rounded-2xl'src={secondImage} />  
        <div  className='project-content'>
            <p  className='pt-10 text-center'>hotel Mangement System used to manage the food details and food orders</p>
        </div>
        </div>
        <div className='relative'>            
        <img className='h-[200px] w-[500px] rounded-2xl'src={thirdImage} /> 
        <div className='project-content'>
            <p  className='pt-10 text-center'>Basic block website build with React</p>
        </div>
        </div>
          </div>
          </div>
    </section>
}