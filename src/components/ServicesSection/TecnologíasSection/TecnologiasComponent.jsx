import './TecnologiasStyle.css';
import { ContactAndProjectsButtons } from '../../ButtonsReusables/ContactAndProjectsButtons'

export const TecnologiasComponent = () => {
    return (
        <section className="py-20 bg-[#FAFAFA]">
          <div className="container mx-auto px-4">
            <div className=" justify-between items-center">
              <div className="">
                <div className='flex flex-col text-center justify-center '>
                    <p className='mb-3 text-gray-400 text-xl'>Conoce las herramientas con las que trabajamos</p>
                    <h2 className="text-5xl text-[000000] font-bold mb-3 text-[70px]">Desplegando el futuro digital con</h2>
                    <h2 className="text-5xl herramientas-de-vanguardia-color font-bold mb-5 text-[70px]">Herramientas de Vanguardia</h2>

                </div>

                <div className='flex mt-8  text-left justify-center items-center'>
                    <div className='w-[950px]'>
                        <p className="mb-3 text-[50px] font-bold w-[600px]">Innovación, Eficiencias y Seguridad</p>
                        <p className=" w-[900px] text-xl text-left lg:text-left mb-16 md:leading-tiny-lineHeight">
                        En DevNet Studios, nos enorgullecemos de utilizar un amplio abanico de tecnologías de vanguardia para llevar tus proyectos al siguiente nivel. Desde lenguajes de programación modernos hasta frameworks líderes y herramientas de desarrollo de última generación, nos equipamos con lo mejor para asegurar soluciones eficientes, seguras y totalmente personalizadas. Nuestra pasión por la tecnología nos impulsa a estar siempre actualizados, garantizando que tu proyecto no solo cumpla, sino exceda las expectativas.
                        </p>
                        <div className="flex flex-wrap gap-4">
                        <ContactAndProjectsButtons/>
                        </div>
                    </div>

                    <div>
                        <picture>
                            <img className='w-[525px] h-[525px]' src="/techs/allTechsTogeterIcons.svg" alt="All Technologies we use" />
                        </picture>
                    </div>
                </div>        
            </div>
          </div>
          </div>
        </section>
      );
}
