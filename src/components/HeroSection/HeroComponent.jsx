import './HeroSectionStyle.css';
import { ContactAndProjectsButtons } from '../ButtonsReusables/ContactAndProjectsButtons';

export const HeroComponent = () => {
  return (
    <div className="generalWrapper relative bg-[#EDEDED] pb-11 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 max-w-[1440px] pt-12 ">
        {/* Contenido textual */}
        <div className="flex flex-1 flex-col text items-center lg:items-start">
          <div className='pt-4 flex flex-col  justify-center items-center'>
              <div className='flex items-center'>
                <h2 className='xl:text-[105px] lg:text-[95px] md:text-[75px] sm:text-[60px] xsm:text-[50px]  md:text-4  text-center lg:text-left mb-6 font-bold'>Desarrollo</h2>.
                <picture>
                  <img className='ml-10 xl:w-24  lg:  md:  sm:  xsm:w-10 ' src="/hero/earth.svg" alt="mundiMap" />
                </picture>
              </div>
              <h2 className="xl:text-[105px] lg:text-[95px] md:text-[75px] sm:text-[60px] xsm:text-[50px] leading-extra-loose md:text-4 md:leading-extra-loose text-center lg:text-center mb-6 font-bold animated-gradient-text ">
              de Software Personalizado
              </h2>
            <p className="xl:text-2xl text-center lg:text-left mb-10 md:leading-tiny-lineHeight ">
              ¿Estás buscando Software a la medida de alta calidad?
              DevNest Studios es tu solución ideal, nos especializamos en
              desarrollo de software personalizado, nuestros servicios van
              desde el desarrollo UI/UX, hasta el desarrollo web, de
              escritorio y para dispositivos móviles
            </p>
            <div className="flex justify-left flex-wrap gap-6">
              <ContactAndProjectsButtons/>
            </div>
          </div>
          
        </div>
        
        {/* Imágenes */}
        <div className="pt-10 w-full">
          <img 
            className="heroServicesImg"
            src="/hero/heroImage.svg" 
            alt="Hero Section Image"
          />
        </div>
      </div>
    </div>
  );
}
