//Contact Us Button

export const ContactAndProjectsButtons = () => {
  return (
    <div className="flex justify-left flex-wrap gap-6">
        <a href="#contacto" className="flex gap-3 text-2xl font-semibold bg-[#1658F4] text-white px-4 py-2 rounded-3xl  hover:bg-[#081273] hover:shadow-2xl hover:gray-500/100">
        Contáctarnos
        <img src="../../../whiteArrow.svg" alt="goArrowWhite" />
        </a>
        <a href="#contacto" className="flex gap-3 text-2xl border-solid border-2 border-indigo-600 font-semibold bg-[#FFFFFF] text-[#1658F4] px-4 py-2 rounded-3xl   hover:shadow-2xl hover:gray-500/100">
        Ver proyectos
        <img src="../../../blueArrow.svg" alt="goArrowWhite" />
        </a>
    </div>
  )
}
