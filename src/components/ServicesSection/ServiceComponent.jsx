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
      <div className="container mx-auto py-10 lg:flex xsm:flex-none gap-12  max-w-[1460px]">
        <div className="text-left align-center justify-center flex flex-col xsm:justify-center xsm:items-center lg:items-baseline">
          <div className='flex items-center md:mb-10 xsm:mb-5 xsm:px-3 lg:px-0 '>
            <picture className='xsm:hidden md:block'>
              <img src="/SectionsIndicatorIcon.svg" alt="Sections Indicator" />
            </picture>
            <p className='ml-2 md:text-2xl xsm:text-xl font-bold nuestros-servicios-color'>Nuestros servicios</p>
          </div>
          <h2 className="font-bold mb-6 w-full lg:mr-40 lg:text-left xsm:text-center xsm:px-3 lg:px-0
          xsm:text-5xl lg:-6xl md:text-6xl
          ">
            <strong className='md:text-[75px] xsm:text-[50px] gradient-text'>Soluciones innovadoras,</strong> para cada desafío digital
          </h2>
          <p className="text-xl lg:text-left xsm:text-center lg:mb-20 xsm:mb-7 md:leading-tiny-lineHeight xsm:px-3 lg:px-0">
            En DevNet Studios, transformamos ideas en realidades digitales. Con un enfoque personalizado
            y tecnología de punta, impulsamos tu éxito en el dinámico mundo digital.
          </p>

            <div className="flex justify-left flex-wrap gap-6">
              <ContactAndProjectsButtons/>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xsm:px-3 lg:px-0 xsm:mt-8 lg:mt-0">
          {services.map((service) => (
            <div key={service.id} className=".gradient-cards md:p-6 xsm:p-4 rounded-2xl shadow-md gradient-cards hover:drop-shadow-2xl hover:cursor-default">
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
