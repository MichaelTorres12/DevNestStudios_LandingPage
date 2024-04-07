import './TecnologiasStyle.css';
import { ContactAndProjectsButtons } from '../../ButtonsReusables/ContactAndProjectsButtons'

export const TecnologiasComponent = () => {
    return (
        <section className="lg:py-20 xsm:pt-5 xsm:pb-0 bg-[#FAFAFA] ">
          <div className="container mx-auto px-4 max-w-[1440px]">
            <div className=" justify-between items-center">
              <div className="">
                <div className='flex flex-col text-center justify-center '>
                    <p className='mb-3 text-gray-400 md:text-xl xsm:text-sm'>Conoce las herramientas con las que trabajamos</p>
                    <h2 className="text-5xl text-[000000] font-bold mb-3 md:text-[70px] xsm:text-[40px]">Desplegando el futuro digital con</h2>
                    <h2 className="text-5xl herramientas-de-vanguardia-color font-bold mb-5 md:text-[70px] xsm:text-[40px]">Herramientas de Vanguardia</h2>
                </div>

                <div className='flex lg:flex-row xsm:flex-col lg:mt-8 xsm:mt-2  lg:text-left xsm:text-center justify-center items-center'>
                    <div className='lg:w-[950px] xsm:w-full'>
                        <p className="mb-3 md:text-[50px] xsm:text-[40px] font-bold lg:w-[600px] xsm:hidden md:block">Innovación, Eficiencias y Seguridad</p>
                        <p className=" text-xl lg:text-left xsm:text-center lg:mb-16 xsm:mb-0 md:leading-tiny-lineHeight">
                        En DevNest Studios, nos enorgullecemos de utilizar un amplio abanico de tecnologías de vanguardia para llevar tus proyectos al siguiente nivel. Desde lenguajes de programación modernos hasta frameworks líderes y herramientas de desarrollo de última generación, nos equipamos con lo mejor para asegurar soluciones eficientes, seguras y totalmente personalizadas. Nuestra pasión por la tecnología nos impulsa a estar siempre actualizados, garantizando que tu proyecto no solo cumpla, sino exceda las expectativas.
                        </p>
                        <div className="flex flex-wrap gap-4 xsm:hidden lg:block">
                        <ContactAndProjectsButtons/>
                        </div>
                    </div>

                    <div>
                        <picture>
                            <img className='w-[525px] md:h-[525px] xsm:h-[400px] md:mt-10 lg:mt-0' src="/techs/allTechsTogeterIcons.svg" alt="All Technologies we use" loading="lazy" />
                        </picture>
                  </div>
                </div>        
            </div>
          </div>
          </div>
        </section>
      );
}
