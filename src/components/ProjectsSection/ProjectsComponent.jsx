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
    title: 'METABIO Tech',
    description: 'Empresa colombiana dedicada a fabricar sistemas que evaluan la presión de infección ambiental, colaboramos con el diseño de la interfáz gráfica y la elaboración de su landing page con React.JS',
    tags: ['UI/UX', 'Figma', 'Frontend', 'React', ],
    image: '/projects/metaBioTechProject.webp',
  },
  {
    id: 2,
    title: 'LECA Industries',
    description: 'Landing page del sitio oficial de Coocking Site, elaboramos todo el diseño del producto completo.',
    tags: ['Frontend', 'Backend', 'UI/UX', 'Product Design', ],
    image: '/projects/lecaIndustriesLandingPageImage.webp',
  },
  {
    id: 3,
    title: 'Suivar Codes',
    description: 'Elaboramos el sitio web completo de esta empresa Salvadoreña dedica a proveer servicios de diseño gráfico y programación de sitio No-Code',
    tags: ['Frontend', 'Backend', 'UI/UX', 'Product Design', 'Angular'],
    image: '/projects/suivarCodesImage.webp',
  },
  {
    id: 4,
    title: 'Juegos Deportivos Chilenos',
    description: 'Landing page del sitio oficial de Coocking Site, elaboramos todo el diseño del producto completo.',
    tags: ['Frontend', 'Backend', 'Flutter', 'App Movil', 'Product Design', 'MongoDB'],
    image: '/projects/JDEProject.webp',
  },
  {
    id: 5,
    title: 'Inventional AI',
    description: 'Desarrollamos el diseño y codificación de la Landing Page de InventionalAI, una start-up de bélgica dedicada a Chatbots con IA',
    tags: ['Frontend', 'Backend', 'UI/UX', 'React.Js', 'Figma'],
    image: '/projects/inventionalAiImage.webp',
  },
  {
    id: 6,
    title: 'PaveEnergy',
    description: 'Landing page de PaveEnergy, empresa dedica a la generación de energía renovable usando el tráfico vehicular, trabajamos desde el diseño hasta el deployment',
    tags: ['Frontend', 'ReactJS', 'UI/UX', 'Product Design', 'Figma'],
    image: '/projects/paveEnergyImage.webp',
  },
];

//El elemento que se muestra de los proyectos
const ProjectCard = ({ project }) => {
  return (
    <div className="group relative p-4 bg-white rounded-lg shadow-lg lg:w-[430px] lg:h-[500px] xsm:w-full hover:cursor-grab transition duration-300 ease-in-out">
      <img src={project.image} alt={project.title} className="rounded-lg mb-4" loading="lazy"/>
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
        <img className='w-16 h-16 ' src="/projects/buttonHoverProject.webp" alt="Button to see project" loading="lazy"/>
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
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  };

  return (
    <section id='Proyectos'>
    <>
      {/* SVG Wave en la parte superior */}
      <div className="bg-[#FAFAFA] top-0 left-0 w-full overflow-hidden h-[100px] #1251F4, #71a7ff">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <path id="wavepath" d="M 0 2000 0 500 Q 62.5 315 125 500 t 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0  v1000 z" />
          </defs>
          <g>
            <use href="#wavepath" y="125" fill="#EDEDED">
              <animateMotion dur="3s" repeatCount="indefinite">
                <mpath href="#motionpath" />
              </animateMotion>
            </use>
          </g>
        </svg>
      </div>

      {/* Contenido principal */}
      <div className="bg-[#EDEDED] md:pt-12 xsm:pt-1 pb-20 relative">
        <div className="container mx-auto px-6 max-w-[1440px]">
      
        
        {/* Info + ProjectCards Wrapper */}
        <div className="flex flex-wrap md:flex-nowrap justify-center ">
    
          {/* Texto de Nuestros Proyectos */}
          <div className="w-full lg:md:w-1/2 mt-8 md:mt-0 md:pl-8 flex flex-col justify-center xsm:text-center md:text-left">
            <h2 className="animated-gradient-text-project text-5xl font-extrabold lg:text-[80px] md:text-[60px] xsm:text-[45px] lg:mb-8 xsm:mb-6 ">
              Mira <br></br> Nuestros <br></br> Proyectos
            </h2>
            <p className="text-xl xsm:text-center md:text-left lg:mb-16 md:mb-4 xsm:mb-5 md:leading-tiny-lineHeight lg:w-[550px] xsm:w-full">
              Nuestros proyectos son la mejor prueba de nuestra capacidad para enfrentar y superar desafíos técnicos.
            </p>
            <div className="flex flex-wrap gap-6 xsm:hidden md:block lg:mt-0 justify-left">
              <ContactAndProjectsButtons/>
            </div>
          </div>

          {/* Slider de Proyectos */}
          <div className="slider-container">
            <Slider className='bg-[#E5ETEB] flex justify-center items-center lg:w-[920px] xsm:w-[320px]' {...settings}>
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </div>
  </>
  </section>
  );
}
