import './HeroSectionStyle.css';
import { ContactAndProjectsButtons } from '../ButtonsReusables/ContactAndProjectsButtons';

export const HeroComponent = () => {
  return (
    <section id="Inicio">
    <div className="generalWrapper relative  pb-11 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 max-w-[1440px] xl:pt-12 xsm:pt-16 ">
        {/* Contenido textual */}
        <div className="flex flex-1 flex-col text items-center lg:items-start">
          <div className='pt-4 flex flex-col xsm:justify-center xsm:items-center lg:items-baseline'>
              <div className='flex items-center justify-center lg:pt-5'>
                <h2 className='animated-gradient-text-HeroSection xl:text-[105px] lg:text-[97px] md:text-[90px] sm:text-[80px] xsm:text-[55px]  md:text-4 text-center lg:text-left mb font-bold '>Desarrollo</h2>.
                <picture>
                  <img className=' 
                  xl:w-28 lg:w-28 md:w-28 md:ml-10 sm:w-20 xsm:w-12 xsm:ml-1' src="/hero/earth.webp" alt="mundiMap" loading="lazy" />
                </picture>
              </div>
              <h2 className="animated-gradient-text-HeroSection xl:text-[105px] lg:text-[97px] md:text-[90px] sm:text-[80px] xsm:text-[55px] leading-extra-loose md:text-4 md:leading-extra-loose xsm:text-center lg:text-left lg:mb-6 xsm:mb-3 font-bold  ">
              de Software Personalizado
              </h2>
            <p className="xl:text-2xl sm:text-2xl xsm:text-xl xsm:p-2 lg:p-0 text-center lg:text-left lg:mb-10 xsm:mb-6 md:leading-tiny-lineHeight xsm:px-3 lg:px-0 ">
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
        <div className="lg:pt-10 xsm:pt-0 w-full">
          <img 
            className="heroServicesImg"
            src="/hero/heroImage.webp" 
            alt="Hero Section Image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    </section>
  );
}
