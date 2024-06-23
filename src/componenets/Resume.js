/* eslint-disable jsx-a11y/alt-text */
import resume from '../assets/resume.jpg';
export default function Resume()
{
  return <section className='flex flex-col bg-secondary md:flex-row' id='resume'>
    <div className='flex justify-center py-5 md:justify-end md:w-1/2'>
     <img className='w-[300px]' src={resume} />
    </div>
    <div className='flex justify-center text-white md:w-1/2'>
       <div className='flex flex-col justify-center'>
       <h1 className='mb-5 text-4xl border-b-4 w-[130px] font-bold border-primary'>Resume</h1>
       <p className='pb-5'>you can view my resume  <a  className='btn' href=''>Download</a></p>
      
       </div>
    </div>
  </section>
}