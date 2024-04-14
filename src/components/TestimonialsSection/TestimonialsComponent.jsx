import './TestimonialsSectionStyle.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LogoSlider } from './clientsBar/LogoSlider';

import PropTypes from 'prop-types';
import { ContactAndProjectsButtons } from '../ButtonsReusables/ContactAndProjectsButtons';

// Definir los testimonios como un array
const testimonials = [
  {
    'id': '1',
    'name': 'Transbank',
    'quote': '"En Devnest son expertos en su trabajo, con una explicación muy limitada de nuestra parte sobre nuestro proyecto, lograron conseguir el resultado que esperabamos"',
    'position': 'Principal operador POS en Chile',
    'image': './testimonials/transBankClient.webp',
  },
  {
    'id': '2',
    'name': 'Artagon',
    'position': 'CEO of Inventional AI',
    'quote': '"Estoy feliz de compartir mi experiencia trabajando con estas mentes creativas y talentosas. Su profesionalismo y creatividad para ofrecer un producto superó mis expectativas"',
    'image': './testimonials/inventionalAiClient.webp',
  },
  {
    'id': '3',
    'name': 'Felipe',
    'position': 'Juegos Deportivos Escolares Chilenos',
    'quote': '"Excelente comunicación, muy rápido y de gran calidad de trabajo pese a los cortos tiempos planteados, seguro volveremos por más!"',
    'image': './testimonials/jdeClient.webp',
  },
  {
    'id': '4',
    'name': 'Randy Ray',
    'position': 'Encargado de RestElectronics',
    'quote': '"Excelente comunicación y a los cortos tiempos de entrega un trabajo de gran calidad"',
    'image': './testimonials/restElectronicClient.webp',
  },
  {
    'id': '5',
    'name': 'Pablo Conti',
    'position': 'Colaborador de LECA Indumentarias',
    'quote': 'Muy buen trabajo! Excelente comunicación y facilidad de implementación de cambios, me ayudaron en el diseño UI/UX de la Landing Page de Leca Indumentarias',
    'image': './testimonials/LecaIndustriesClient.webp',
  },
  {
    'id': '6',
    'name': 'Juan Carlos',
    'position': 'CEO of PaveEnergy',
    'quote': '"Muy agradecido y satisfecho con el trabajo realizado por Devnest Studios, me ayudaron creando la App Movil de nuestra empresa, una experiencia muy grata"',
    'image': './testimonials/paveEnergyLogo.webp',
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <section id='Testimonios'>
    <div className="bg-white p-6 rounded-3xl shadow-md m-4 hover:shadow-lg md:w-[350px] hover:cursor-grab">
      <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto" loading="lazy"/>
      <div className="text-center mt-4">
        <p className="font-extrabold text-2xl">{testimonial.name}</p>
        <p className="font-bold text-gray-400">{testimonial.position}</p>
        <p className="text-lg mt-2">{testimonial.quote}</p>
        <div className="flex justify-center mt-2">
          {/* Iconos de estrellas */}
        </div>
      </div>
    </div>
    </section>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  }).isRequired
};

export const TestimonialsComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 1560,
        settings: {
          slidesToShow: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="bg-[#FAFAFA] py-16">
      <div className="container mx-auto  max-w-[1540px] ">
        <div className='px-6'>
        <div className='flex flex-col text-center'>
          <h2 className="text-5xl font-extrabold lg:text-[80px] md:text-[60px] xsm:text-[45px] lg:mb-0 xsm:mb-4 gradient-text">
          Testimonios de nuestros clientes
          </h2>
          <p className='lg:mb-10 xsm:mb-4 text-gray-500 text-xl'>No solamente confíes en lo que te decimos, confía en lo que ellos te dicen.</p>
        </div>
        <Slider {...settings} >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
        </div>
          <div className='mt-16 mb-16 flex items-center justify-center px-none'>
            <ContactAndProjectsButtons/>
          </div>
      </div>
      <LogoSlider/>
    </div>
  );
};