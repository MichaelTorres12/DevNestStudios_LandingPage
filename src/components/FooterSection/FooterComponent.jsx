import './FooterSectionStyle.css';

export const FooterComponent = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y navegación */}
        <div>
          <img src="/devNestStudiosLogo.svg" alt="DevNest" className="mb-4" />
          {/* Incluir enlaces de navegación aquí */}
        </div>
        
        {/* Links de navegación */}
        <div>
          <h4 className="font-bold text-lg mb-3">DevNest Studios Website:</h4>
            <a href=""><p className='text-xl mb-2'>Inicio</p></a>
            <a href=""><p className='text-xl mb-2'>Servicios</p></a>
            <a href=""><p className='text-xl mb-2'>Tecnologías que usamos</p></a>
            <a href=""><p className='text-xl mb-2'>Quieneso somos</p></a>
            <a href=""><p className='text-xl mb-2'>Equipo</p></a>
            <a href=""><p className='text-xl mb-2'>Proyectos</p></a>
            <a href=""><p className='text-xl mb-2'>Testimonios</p></a>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="font-bold text-lg mb-3">Servicios:</h4>
            <a href=""><p className='text-xl mb-2'>Desarrollo Web</p></a>
            <a href=""><p className='text-xl mb-2'>Desarrollo Empresarial</p></a>
            <a href=""><p className='text-xl mb-2'>Desarrollo Movil</p></a>
            <a href=""><p className='text-xl mb-2'>APIs y Microservicios</p></a>
            <a href=""><p className='text-xl mb-2'>Diseño UI/UX</p></a>
            <a href=""><p className='text-xl mb-2'>Bases de Datos</p></a>
            <a href=""><p className='text-xl mb-2'>Software a la Medida</p></a>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="font-bold text-lg mb-3">Nuestras redes sociales:</h4>
            <a className='flex items-center gap-3 mb-5' href="">
              <img className='w-8 h-8' src="/footer/githubLogo.svg" alt="GitHub Logo" />
              <p className='text-xl'>@DevNestStudios</p>
            </a>
            <a className='flex items-center gap-3 mb-5' href="">
              <img className='w-8 h-8' src="/footer/instagramLogo.svg" alt="GitHub Logo" />
              <p className='text-xl'>@DevNestStudios</p>
            </a>
            <a className='flex items-center gap-3 mb-5' href="">
              <img className='w-8 h-8' src="/footer/facebookLogo.svg" alt="GitHub Logo" />
              <p className='text-xl'>@DevNestStudios</p>
            </a>
            <a className='flex items-center gap-3 mb-5' href="">
              <img className='w-8 h-8' src="/footer/whatsappLogo.svg" alt="GitHub Logo" />
              <p className='text-xl'>+503 7140-3076</p>
            </a>
            
        </div>
      </div>

      <div className="text-center mt-12">
        <p>https://devneststudios.com derechos reservados 2024</p>
      </div>
    </footer>
  );
}
