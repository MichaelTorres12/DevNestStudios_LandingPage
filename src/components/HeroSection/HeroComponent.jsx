import './HeroSectionStyle.css';
import { ContactAndProjectsButtons } from '../ButtonsReusables/ContactAndProjectsButtons';

export const HeroComponent = () => {
  return (
    <div className="relative bg-[#EDEDED] pb-11 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 max-w-[1440px] pt-16 ">
        {/* Contenido textual */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <div className='pt-4 flex flex-col  justify-center'>
              <div className='flex '>
                <h2 className='text-8xl md:text-4  text-center lg:text-left mb-6 font-bold'>Desarrollo</h2>.
                <picture>
                  <img className='ml-10' src="/hero/earth.svg" alt="mundiMap" />
                </picture>
              </div>
              <h2 className="text-[105px] leading-extra-loose md:text-4 md:leading-extra-loose text-center lg:text-left mb-6 font-bold animated-gradient-text">
              de Software Personalizado
              </h2>
            <p className="text-2xl text-center lg:text-left mb-10 md:leading-tiny-lineHeight">
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
        <div className="pt-10 w-auto">
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
