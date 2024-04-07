//Contact Us Button

//Hacer que al darle a cada botón, haga scroll dentro de la landing a la parte en cuestión.
const scrollToSection = (sectionId) => {
   const section = document.getElementById(sectionId);
   if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


export const ContactAndProjectsButtons = () => {
  return (
    <div className="flex flex-wrap gap-2 xsm:px-8 md:p-0">
        <a onClick={() => scrollToSection('ContactUs')} className="flex md:gap-3 xsm:gap-2 xsm:justify-center text-2xl font-semibold bg-[#1658F4] text-white px-4 py-2 rounded-3xl  hover:bg-[#081273] hover:shadow-2xl hover:gray-500/100 xsm:w-full xsm:m-2 md:w-auto hover:cursor-pointer">
        Contáctarnos
        <img src="../../../whiteArrow.svg" alt="goArrowWhite" loading="lazy"/>
        </a>
        <a onClick={() => scrollToSection('Proyectos')} className="flex md:gap-3 xsm:gap-2 xsm:justify-center text-2xl border-solid border-2 border-indigo-600 font-semibold bg-[#FFFFFF] text-[#1658F4] px-4 py-2 rounded-3xl hover:shadow-2xl hover:gray-500/100 xsm:w-full xsm:m-2 md:w-auto hover:cursor-pointer">
        Ver proyectos
        <img src="../../../blueArrow.svg" alt="goArrowWhite" loading="lazy"/>
        </a>
    </div>
  )
}
