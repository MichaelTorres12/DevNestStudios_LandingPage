import './ProjectsSectionStyle.css'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import PropTypes from 'prop-types';
import { ContactAndProjectsButtons } from '../ButtonsReusables/ContactAndProjectsButtons';

//Nuestros proyectos, luego podria pasarlo a una DB
const projects = [
  {
    id: 1,
    title: 'PaveEnergy',
    description: 'Landing page del sitio oficial de Coocking Site, elaboramos todo el diseño del producto completo.',
    tags: ['Frontend', 'Backend', 'UI/UX', 'Product Design'],
    image: '/projects/paveEnergyImage.svg',
  },
  {
    id: 2,
    title: 'LECA Industries',
    description: 'Landing page del sitio oficial de Coocking Site, elaboramos todo el diseño del producto completo.',
    tags: ['Frontend', 'Backend', 'UI/UX', 'Product Design', ],
    image: '/projects/lecaIndustriesLandingPageImage.svg',
  },
  {
    id: 3,
    title: 'Suivar Codes',
    description: 'Landing page del sitio oficial de Coocking Site, elaboramos todo el diseño del producto completo.',
    tags: ['Frontend', 'Backend', 'UI/UX', 'Product Design', 'Shopify'],
    image: '/projects/suivarCodesImage.svg',
  },
  {
    id: 4,
    title: 'DevNest Studios',
    description: 'Landing page del sitio oficial de Coocking Site, elaboramos todo el diseño del producto completo.',
    tags: ['Frontend', 'Backend', 'UI/UX', 'Product Design'],
    image: '/projects/devNestStudiosLandingPageImage.svg',
  },
  {
    id: 5,
    title: 'Inventional AI',
    description: 'Landing page del sitio oficial de Coocking Site, elaboramos todo el diseño del producto completo.',
    tags: ['Frontend', 'Backend', 'UI/UX', 'Product Design', 'Shopify'],
    image: '/projects/inventionalAiImage.svg',
  },
  {
    id: 6,
    title: 'Anuncio de Fiverr',
    description: 'Landing page del sitio oficial de Coocking Site, elaboramos todo el diseño del producto completo.',
    tags: ['Frontend', 'Backend', 'UI/UX', 'Product Design'],
    image: '/projects/anuncioImage.svg',
  },
];

//El elemento que se muestra de los proyectos
const ProjectCard = ({ project }) => {
  return (
    <div className="group relative p-4 bg-white rounded-lg shadow-lg w-[430px] h-[500px] hover:cursor-grab transition duration-300 ease-in-out">
      <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
      <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span key={index} className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      {/* Botón que aparece al hacer hover */}
      <a href="/project-link" // Asegúrate de usar el enlace correcto aquí
         className="absolute bottom-4 right-0 px-4  rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out ">
        <img className='w-16 h-16 ' src="/projects/buttonHoverProject.svg" alt="Button to see project" />
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export const ProjectsComponent = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      {/* SVG Wave en la parte superior */}
      <div className="bg-[#FAFAFA] top-0 left-0 w-full overflow-hidden h-[100px]">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <path id="wavepath" d="M 0 2000 0 500 Q 62.5 315 125 500 t 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0  v1000 z" />
          </defs>
          <g>
            <use href="#wavepath" y="125" fill="#EDEDED">
              <animateMotion dur="5s" repeatCount="indefinite">
                <mpath href="#motionpath" />
              </animateMotion>
            </use>
          </g>
        </svg>
      </div>

      {/* Contenido principal */}
      <div className="bg-[#EDEDED] pt-12 pb-20 relative">
        <div className="container mx-auto px-6">
      
        
        {/* Info + ProjectCards Wrapper */}
        <div className="flex flex-wrap md:flex-nowrap">
    
          {/* Texto de Nuestros Proyectos */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 flex flex-col justify-center">
            <h2 className="text-5xl font-extrabold text-[80px] animated-gradient-text mb-8">
              Mira <br></br> Nuestros <br></br> Proyectos
            </h2>
            <p className="text-xl text-left lg:text-left mb-16 md:leading-tiny-lineHeight w-[550px]">
              Nuestros proyectos son la mejor prueba de nuestra capacidad para enfrentar y superar desafíos técnicos.
            </p>
            <ContactAndProjectsButtons/>
          </div>

          {/* Slider de Proyectos */}
          <div className="w-full md:w-1/2 slider-container">
            <Slider className='bg-[#E5ETEB] flex justify-center items-center w-[920px] p-3' {...settings}>
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </div>
  </>
  );
}
