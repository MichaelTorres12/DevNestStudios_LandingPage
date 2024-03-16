//Header Component
import './HeaderSectionStyle.css';

export const HeaderComponent = () => {
    return (
        <header className="fixed w-full z-50 bg-[#EDEDED] ">
          <nav className="container mx-auto flex justify-between items-center max-w-7xl mt-2 mb-2">
            <a href="/#inicio" className="text-xl font-semibold text-gray-700">
              <img src="/devNestStudiosLogo.svg" alt="DevNest" className="h-20" />
            </a>
            <div className="flex items-center">
              <ul className="hidden md:flex space-x-6 mr-6">
                <li><a href="#inicio" className="text-2xl font-semibold text-gray-700 hover:text-blue-600 hover:text-[23px]">Inicio</a></li>
                <li><a href="#servicios" className="text-2xl font-semibold text-gray-700 hover:text-blue-600 hover:text-[23px]">Servicios</a></li>
                <li><a href="#sobre-nosotros" className="text-2xl font-semibold text-gray-700 hover:text-blue-600 hover:text-[23px]">Sobre Nosotros</a></li>
                <li><a href="#equipo" className="text-2xl font-semibold text-gray-700 hover:text-blue-600 hover:text-[23px]">Equipo</a></li>
                <li><a href="#proyectos" className="text-2xl font-semibold text-gray-700 hover:text-blue-600 hover:text-[23px]">Proyectos</a></li>
                <li><a href="#testimonios" className="text-2xl font-semibold text-gray-700 hover:text-blue-600 hover:text-[23px]">Testimonios</a></li>
              </ul>
              <a href="#contacto" className="text-2xl font-semibold bg-[#1658F4] text-white px-4 py-2 rounded-3xl  hover:bg-[#081273] hover:shadow-lg hover:gray-500/100">
                Contáctarnos
              </a>
            </div>
          </nav>
        </header>
      );
}

