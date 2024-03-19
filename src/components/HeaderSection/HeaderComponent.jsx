//Header Component
import  { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'


export const HeaderComponent = () => {
  let Links =[
    {name: 'Home', link: '/'},
    {name: 'Servicios', link: '/'},
    {name: 'Sobre nosotros', link: '/'},
    {name: 'Equipo', link: '/'},
    {name: 'Proyectos', link: '/'},
    {name: 'Testimonios', link: '/'},
  ];
  let [open, setOpen] =useState(false);
  
  return (
    <div className='shadow-md w-full  fixed z-50 top-0 left-0 bg-[#EDEDED] '>
       <div className='md:flex items-center justify-between py-4 md:px-10 px-7 container mx-auto flex  max-w-8xl mt-2 mb-2'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-2'>
            <img className='w-20 h-20' src="/devNestStudiosLogo.svg" alt="DevNest Studios Logo" />
            <span className='text-blue-700 text-3xl'></span>
        </div>
        {/* Menu icon */}
        <div onClick={()=>setOpen(!open)} className='absolute right-8 top-14 cursor-pointer md:hidden w-7 h-7 items-center justify-center'>
            {
                open ? <XMarkIcon/> : <Bars3BottomRightIcon />
            }
        </div>
        {/* linke items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#EDEDED]  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-24' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    // eslint-disable-next-line react/jsx-key
                    <li className='md:ml-8 md:my-0 my-7 font-semibold mr-2'>
                        <a href={link.link} className='text-black text-[24px] hover:text-blue-700  duration-100'>{link.name}</a>
                    </li>))
                }
                <button className='btn text-2xl font-semibold bg-[#1658F4] text-white px-4 py-2 rounded-3xl  hover:bg-[#081273] hover:shadow-lg hover:gray-500/100 duration-300 ml-5'>Contáctanos</button>
            </ul>
      {/* button */}
      </div>
        </div>
    );
};

export default HeaderComponent;