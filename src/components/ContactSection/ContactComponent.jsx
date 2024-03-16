import './ContactSectionStyle.css';

const checkboxServices = [
  {
    'id': '1',
    'service': 'App Web',
  },
  {
    'id': '2',
    'service': 'escritorio',
  },
  {
    'id': '3',
    'service': 'App Movil',
  },
  {
    'id': '4',
    'service': 'UI/UX',
  },
  {
    'id': '5',
    'service': 'Database',
  },
  {
    'id': '6',
    'service': 'Microservicios',
  },
]

export const ContactComponent = () => {
  return (
    <div className="bg-[#FAFAFA] py-10 px-5 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        {/* Texto de Contacto */}
        <div className='"'>
          <h2 className="text-[70px] font-extralight text-[#1658F4] mb-3">Contáctanos</h2>
          <p className="text-[70px] font-semibold text-[#1658F4] mb-3">Solicita información.</p>
          <p className="text-[40px] text-[#1658F4]">-01. Conviértete en un cliente</p>
          <p className="text-[25px] font-light text-[#1658F4]">Cuéntanos de tu proyecto, escríbenos aquí y pronto te contactaremos</p>
        </div>
        
        {/* Formulario de Contacto */}
        <div className="bg-[#1658F4] rounded-lg p-6 shadow-lg w-full ">
          <form className='w-full'>
            {/*Name and mail*/}
            <div className="mb-4">
              <label className="block text-white text-[26px] font-bold mb-2" htmlFor="name">
                Su nombre:
              </label>
              <input className="text-[24px] shadow appearance-none border rounded w-full py-2 px-3 text-black" id="name" type="text" placeholder="Su nombre" />
            </div>
            <div className="mb-4">
              {/* Resto de los campos del formulario */}
              <label className="block text-white text-[26px] font-bold mb-2" htmlFor="name">
                Su correo electrónico:
              </label>
              <input className="text-[24px] shadow appearance-none border rounded w-full py-2 px-3 text-black" id="name" type="text" placeholder="devneststudios@customerservice.com" />
            </div>

            {/*cellphone number*/}
            <div className="mb-4 flex gap-5">
              <div className=''>
                  <label className="block text-white text-[26px] font-bold mb-2" htmlFor="name">
                    Cod. Postal
                  </label>
                  <input className="text-[24px] shadow appearance-none border rounded w-full py-2 px-3 text-black" id="name" type="text" placeholder="+503" />
                </div>
                <div>
                <label className="block text-white text-[26px] font-bold mb-2" htmlFor="name">
                    Su número de teléfono:
                  </label>
                  <input className="text-[24px] w-[500px] shadow appearance-none border rounded  py-2 px-3 text-black" id="name" type="text" placeholder="71403076" />
                </div>
              </div>

            {/* Checkbox Section */}
            <div className="mb-4">
              <label className="block text-white text-[26px] font-bold mb-2">
                Seleccione en qué podemos ayudarle:
              </label>
              <div className="grid grid-cols-4 gap-3 w-auto">
                {checkboxServices.map((item) => (
                  <div key={item.id}>
                    <label className="text-[24px] inline-flex items-center bg-white p-2 rounded-lg hover:cursor-pointer ">
                      <input type="checkbox" className="form-checkbox w-6 h-6  " />
                      <span className="ml-2 ">{item.service}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Cuentenos de su proyecto */}
            <div className="mb-4">
              <label className="block text-white text-[26px] font-bold mb-2" htmlFor="project-description">
                Cuéntenos de su proyecto:
              </label>
              <textarea
                className="text-[24px] shadow appearance-none border rounded w-full py-2 px-3 text-black"
                id="project-description"
                rows="3" // Esto determina la cantidad de líneas que el área de texto mostrará por defecto
                placeholder="Me gustaría que me ayuden en..."
              />
            </div>
            

            {/*Send Button*/}
            <div className="flex flex-col items-center justify-between text-center">
              <button className="text-3xl bg-white hover:bg-green-500 text-black  hover:text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline hover:shadow-2xl" type="button">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
