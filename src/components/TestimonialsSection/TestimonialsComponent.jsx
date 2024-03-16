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
    'name': 'Nayib Bukele',
    'quote': '"Muy buen trabajo la verdad, son demasiado profesionales"',
    'position': 'CEO of El Salvador',
    'image': './testimonials/bukeleClientPic.svg',
  },
  {
    'id': '2',
    'name': 'Jennifer Lopez',
    'position': 'CEO of Music Records',
    'quote': '"La verdad mi carrera musical no fuese tan buena si nunca los hubiese conocido, los amo."',
    'image': './testimonials/client02Pic.svg',
  },
  {
    'id': '3',
    'name': 'Mario Oscar',
    'position': 'CEO of Super Selectos',
    'quote': '"Ellos hicieron el sistema de POS que ocupo en mi cadena de supermercado y vale la pena."',
    'image': './testimonials/client03Pic.svg',
  },
  {
    'id': '4',
    'name': 'Benito Martinez',
    'position': 'CEO of Bad Bunny',
    'quote': 'Muy buen trabajo la verdad, son demasiado profesionales',
    'image': './testimonials/client04Pic.svg',
  },
  {
    'id': '5',
    'name': 'Nayib Bukele',
    'position': 'CEO of El Salvador',
    'quote': 'Muy buen trabajo la verdad, son demasiado profesionales',
    'image': './testimonials/client05Pic.svg',
  },
  {
    'id': '6',
    'name': 'Luis Miguel',
    'position': 'CEO of El Sol de Mexico',
    'quote': '"Si tan solo tu me hubieras dicho la verdad... Si tan solo me hubieses amado de verdad"',
    'image': './testimonials/client06Pic.svg',
  },
  {
    'id': '7',
    'name': 'Kanye West',
    'position': 'CEO of YeezY',
    'quote': '"Kim, dejame ver a los niños, creeme que ya deje el alcohol y estoy sacando puro temazo!!"',
    'image': './testimonials/client07Pic.svg',
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md m-4 hover:shadow-lg w-[350px] hover:cursor-grab">
      <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto " />
      <div className="text-center mt-4">
        <p className="font-extrabold text-2xl">{testimonial.name}</p>
        <p className="font-bold text-gray-400">{testimonial.position}</p>
        <p className="text-lg mt-2">{testimonial.quote}</p>
        <div className="flex justify-center mt-2">
          {/* Iconos de estrellas */}
        </div>
      </div>
    </div>
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#FAFAFA] py-16">
      <div className="container mx-auto px-6">
        <div className='flex flex-col text-center'>
          <h2 className="text-center font-bold text-[70px] mb-0 animated-gradient-text">
          Testimonios de nuestros clientes
          </h2>
          <p className='mb-10 text-gray-500 text-xl'>No solamente confíes en lo que te decimos, confía en lo que ellos te dicen.</p>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>

        <div className='mt-16 mb-16 flex items-center justify-center'>
          <ContactAndProjectsButtons/>
        </div>

        
      </div>
      <LogoSlider/>
    </div>
  );
};