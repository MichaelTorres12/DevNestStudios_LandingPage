//Header Component
import './HeaderSectionStyle.css';
import  { useState, } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

export const HeaderComponent = () => {
  let Links =[
    {name: 'Inicio', link: '../HeroSection/HeroComponent.jsx'},
    {name: 'Servicios', link: '../ServicesSection/ServiceComponent'},
    {name: 'Sobre nosotros', link: '/'},
    {name: 'Equipo', link: '/'},
    {name: 'Proyectos', link: '/'},
    {name: 'Testimonios', link: '/'},
  ];
  let [open, setOpen] =useState(false);
  

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false); // Agrega esta línea para cerrar el menú
    }
  };

  return (
    <div className={`generalWrapperResponsive w-full fixed z-50 top-0 left-0 bg-[#1e3a8a]`}>
       <div className='xl:flex items-center justify-between px-5 container mx-auto flex  max-w-8xl mt-1 mb-1 max-w-[1440px]'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-2'>
            <img className='logoImg md:w-20 sm:h-20 xsm:w-16 xsm:h-16' src="/devNestStudiosLogo.webp" alt="DevNest Studios Logo" loading="lazy"/>
        </div>
        {/* Menu icon */}
        <div onClick={()=>setOpen(!open)} className='absolute right-8 cursor-pointer xl:hidden w-7 h-7 items-center justify-center text-white font-bold'>
            {
                open ? <XMarkIcon/> : <Bars3BottomRightIcon />
            }
        </div>
        {/* linke items */}
        <ul className={` xl:flex xl:items-center xl:pb-0 pb-12 absolute xl:static bg-[#1e3a8a]  xl:z-auto z-[-1] left-0 w-full xl:w-auto xl:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-[70px]' : 'top-[-490px]'}`}>
                {
                  Links.map((link) => (
                    // eslint-disable-next-line react/jsx-key
                    <li className='mr-5 xl:ml-8 xl:my-0 my-7 font-semibold'>
                      <button onClick={() => scrollToSection(link.name)} className='text-white text-[24px] hover:text-[#ffff00] duration-100'>
                        {link.name}
                      </button>
                    </li>))
                }
                <button onClick={() => scrollToSection('ContactUs')} className='btn text-2xl font-semibold bg-[#1658F4] text-white px-4 py-2 rounded-3xl hover:bg-[#ffff00] hover:text-black hover:shadow-xl hover:gray-500/100 duration-300'>Contáctanos</button>
            </ul>
      {/* button */}
      </div>
        </div>
    );
};

export default HeaderComponent;