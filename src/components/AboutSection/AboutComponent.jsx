import './AboutSectionStyle.css';
import { ContactAndProjectsButtons } from '../ButtonsReusables/ContactAndProjectsButtons'

export const AboutComponent = () => {
  return (
    <div className="bg-[#FAFAFA] pt-10 pb-20">
      <div className="container mx-auto px-6">
        <div className="items-center">
          
          {/* AboutUs Banner */}
          <div className=" flex flex-col items-center justify-center mb-[-30px]">
            {/* Asumiendo que tienes una imagen relevante */}
            <img className="rounded-xl " src="/about/aboutUsBanner.svg" alt="Sobre Nosotros" />

            <div className='flex items-center justify-center border-4 border-black bg-white w-[400px] p-2 px-3 rounded-[40px] translate-y-[-60%] gap-3 hover:shadow-2xl'>
              <img className='w-24 h-24' src="/devNestStudiosLogo.svg" alt="Dev Nest Studios Logo" />
              <h2 className='text-3xl font-semibold'>Sobre nosotros</h2>
            </div>
          </div>

          
          <div className="flex justify-between">
            {/*Left Side Info*/}
            <div className='leftSideText'>
              <h2 className="text-black text-[55px] font-bold mb-10 w-[550px] mr-20 leading-very-tiny-interline">
                <strong className='text-[65px] animated-gradient-text'>DevNet Studios:</strong> Innovación y Experiencia al Servicio de Tus Ideas
              </h2>
              <ContactAndProjectsButtons/>
            </div>

            {/*Right Side Info*/}
            <div className='flex flex-col w-[800px] justify-center'>
              <p className="text-xl text-left lg:text-left mb-5 md:leading-tiny-lineHeight">
                Desde El Salvador para el mundo, en DevNet Studios fusionamos la pasión por la tecnología con el talento nacional para ofrecer soluciones digitales que trascienden fronteras. Nuestro equipo, compuesto por talentos locales con una visión global, dedicados a transformar ideas en soluciones tecnológicas de alto impacto y con ganas de solucionar problemas complejo.
              </p>
              <p className="text-xl text-left lg:text-left  md:leading-tiny-lineHeight">
                Con experiencia en una amplia gama de servicios digitales, nos especializamos en llevar a cabo proyectos que no solo cumplen, sino que superan las expectativas de nuestros clientes, tanto nacionales como internacionales. Creemos firmemente que la innovación, la calidad y la cercanía con nuestros clientes son los pilares que nos permiten construir relaciones de confianza y proyectos exitosos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
