import './ServicesSectionStyle.css';
import { ContactAndProjectsButtons } from '../ButtonsReusables/ContactAndProjectsButtons';
import { TecnologiasComponent } from './TecnologíasSection/TecnologiasComponent';

//Aqui guardo los diferentes servicios a imprimir en la targeta
const services = [
  {
    id: 1,
    title: 'Desarrollo Web',
    description: 'Sitios web a medida, desde aplicaciones web hasta plataformas e-commerce, optimizadas para una experiencia de usuario excepcional.',
    icon: '/services/webIconService.svg',
  },
  {
    id: 2,
    title: 'Apps Empresariales',
    description: 'Soluciones de software personalizadas para automatizar y optimizar procesos de negocio, mejorando eficiencia y productividad.',
    icon: '/services/appsEmpresarialesIconServices.svg',
  },
  {
    id: 3,
    title: 'APIs y Microservicios',
    description: 'Creamos APIs robustas y microservicios escalables que facilitan la integración y comunicación eficiente entre diferentes sistemas y aplicaciones.',
    icon: '/services/apisIconService.svg',
  },
  {
    id: 4,
    title: 'Diseño UI/UX',
    description: 'Diseñamos interfaces intuitivas y experiencias de usuario cautivadoras, asegurando que cada interacción sea memorable.',
    icon: '/services/uiuxIconService.svg',
  },
  {
    id: 5,
    title: 'Aplicaciones Móviles',
    description: 'Aplicaciones móviles innovadoras para iOS y Android, que conectan marcas con clientes en cualquier momento y lugar.',
    icon: '/services/appMovileService.svg',
  },
  {
    id: 6,
    title: 'Bases de Datos',
    description: 'Diseñamos y optimizamos bases de datos para garantizar almacenamiento, recuperación y manejo eficiente de datos para su negocio.',
    icon: '/services/databaseIconService.svg',
  },
];


export const ServiceComponent = () => {

  return (
    <div className="bg-[#FAFAFA] pb-10">
      <div className="container mx-auto py-10 px-6 flex gap-12">
        <div className="text-left align-center justify-center flex flex-col">
          <div className='flex items-center mb-10'>
            <picture>
              <img src="/SectionsIndicatorIcon.svg" alt="Sections Indicator" />
            </picture>
            <p className='ml-2 text-2xl font-bold nuestros-servicios-color'>Nuestros servicios</p>
          </div>
          <h2 className="text-5xl font-bold mb-6 w-[700px] text-left text-[75px]">
            <strong className='text-[80px] gradient-text'>Soluciones innovadoras,</strong> para cada desafío digital
          </h2>
          <p className="text-xl text-left lg:text-left mb-20 md:leading-tiny-lineHeight">
            En DevNet Studios, transformamos ideas en realidades digitales. Con un enfoque personalizado
            y tecnología de punta, impulsamos tu éxito en el dinámico mundo digital.
          </p>
          <ContactAndProjectsButtons/>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {services.map((service) => (
            <div key={service.id} className=".gradient-cards p-6 rounded-2xl shadow-md gradient-cards hover:drop-shadow-2xl hover:cursor-default">
              <div className="flex items-center justify-center h-16 w-16 mb-4 bg-white rounded-full drop-shadow-lg">
                <img src={service.icon} alt={service.title} className="h-6 w-6" />
              </div>
              <h3 className="text-2xl mb-3 font-semibold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <TecnologiasComponent/>
    </div>
  );
}
