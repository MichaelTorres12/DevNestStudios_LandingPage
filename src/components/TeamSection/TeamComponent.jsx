import './TeamSectionStyle.css';
import { ContactAndProjectsButtons } from '../ButtonsReusables/ContactAndProjectsButtons';

const teamMembers = [
  {
    id: 1,
    name: 'Michael Torres',
    role: 'Desarrollador de Software',
    image: '/team/michaelPic.svg'
  },
  {
    id: 2,
    name: 'Giovanni Bukele',
    role: 'Desarrollador de Software',
    image: '/team/giovanniPic.svg'
  },
  {
    id: 3,
    name: 'Emilio Deras',
    role: 'Desarrollador de Software',
    image: '/team/emilioPic.svg'
  },
  {
    id: 4,
    name: 'Emiliano Torres',
    role: 'Desarrollador de Software',
    image: '/team/emilianoPic.svg'
  },
  {
    id: 5,
    name: 'Jhonatan Zero',
    role: 'Desarrollador de Software',
    image: '/team/jhonaPic.svg'
  },
];

export const TeamComponent = () => {
  return (
    <section id='Equipo'>
    <div className="bg-[#FAFAFA] md:py-10 xsm:pt-1 xsm:pb-10">
      <div className="container mx-auto px-6 text-center flex flex-col justify-center items-center pt-5 max-w-[1440px]">
      <div className='flex items-left justify-left text-left mb-5 '>

        <div className='flex '>
          <img src="/team/ballsItem.svg" alt="ballsItem" />
        </div>
          </div>
            <h2 className="lg:text-[50px] xsm:text-[30px] md:text-[40px] md:px-8 lg:px-0 text-blue-600 font-bold mb-3 md:w-[800px] xsm:w-full leading-very-tiny-interline">
              Brindamos una alta gama de habilidades y experiencias desde diferentes puntos de vista
            </h2>
            <p className="mb-10 text-gray-500 md:text-2xl xsm:text-base">
              Conoce a cada uno de los miembros del equipo que se encargan de hacer tus necesidades realidad
            </p>

        <div className="grid lg:grid-cols-5 xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-10 xsm:gap-3 h-full">
          {teamMembers.map(member => (
            <div key={member.id} className=" bg-gray-100 p-4 rounded-lg text-center hover:drop-shadow-2xl" style={{ backgroundImage: `url(${member.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="mt-[100%] pt-2 pb-2 px-6 bg-gradient-to-b from-gray-100 to-gray-100 rounded-lg">
                <h3 className="text-xl font-semibold mb-1 ">{member.name}</h3>
                <p className="text-gray-800">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className='flex justify-center items-center lg:pt-16 xsm:pt-5'>
        <ContactAndProjectsButtons/>
      </div>
    </div>
    </section>
  );
}
