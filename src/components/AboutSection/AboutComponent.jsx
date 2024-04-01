import './AboutSectionStyle.css';
import { ContactAndProjectsButtons } from '../ButtonsReusables/ContactAndProjectsButtons'

export const AboutComponent = () => {
  return (
    <section id='Sobre nosotros'>
    <div className="bg-[#FAFAFA] md:pt-10 xsm:pt-16 lg:pb-20 xsm:pb-12">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="items-center">
          {/* AboutUs Banner */}
          <div className=" flex flex-col items-center justify-center mb-[-30px]">
            
            {/*Banner Image*/}
            <img className="rounded-xl xsm:hidden md:block" src="/about/aboutUsBanner.webp" alt="Sobre Nosotros" loading="lazy" />

            <div className='flex items-center justify-center border-4 border-black bg-white md:w-[400px] xsm:w-full p-2 px-3 md:rounded-[40px] xsm:rounded-[20px] translate-y-[-60%] gap-3 hover:shadow-2xl'>
              <img className='md:w-24 md:h-24 xsm:w-14 xsm:h-14' src="/devNestStudiosLogo.webp" alt="Dev Nest Studios Logo" loading="lazy" />
              <h2 className='md:text-3xl xsm:text-xl font-semibold'>Sobre nosotros</h2>
            </div>
          </div>

          
          <div className="flex justify-between xsm:flex-col lg:flex-row">
            {/*Left Side Info*/}
            <div className='leftSideText lg:text-left xsm:text-center'>
              <h2 className="text-black md:text-[55px] xsm:text-[40px] font-bold md:mb-10 xsm:mb-5 lg:w-[550px] xsm:w-full mr-20 leading-very-tiny-interline">
                <strong className='md:text-[55px] xsm:text-[40px] animated-gradient-text'>DevNet Studios:</strong> Innovación y Experiencia al Servicio de Tus Ideas
              </h2>
              <div className="flex flex-wrap gap-4 xsm:hidden lg:block">
                <ContactAndProjectsButtons/>
              </div>
            </div>

            {/*Right Side Info*/}
            <div className='flex flex-col justify-center '>
              <p className="text-xl lg:text-left xsm:text-center mb-5 md:leading-tiny-lineHeight">
                Desde El Salvador para el mundo, en DevNet Studios fusionamos la pasión por la tecnología con el talento nacional para ofrecer soluciones digitales que trascienden fronteras. Nuestro equipo, compuesto por talentos locales con una visión global, dedicados a transformar ideas en soluciones tecnológicas de alto impacto y con ganas de solucionar problemas complejos.
              </p>
              <p className="text-xl lg:text-left xsm:text-center  md:leading-tiny-lineHeight xsm:hidden md:block">
                Con experiencia en una amplia gama de servicios digitales, nos especializamos en llevar a cabo proyectos que no solo cumplen, sino que superan las expectativas de nuestros clientes, tanto nacionales como internacionales. Creemos firmemente que la innovación, la calidad y la cercanía con nuestros clientes son los pilares que nos permiten construir relaciones de confianza y proyectos exitosos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 xsm:block md:hidden xsm:mt-5 lg:mt-0 justify-left">
        <ContactAndProjectsButtons/>
      </div>
    </div>
    </section>
  );
}
