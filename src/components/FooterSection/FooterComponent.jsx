import './FooterSectionStyle.css';

export const FooterComponent = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4 grid lg:grid-cols-4 md:grid-cols-2 xsm:grid-cols-1  xsm:gap-8 md:gap-6 max-w-[1440px]">
        {/* Logo y navegación */}
        <div className='flex items-center justify-center'>
          <img src="/devNestStudiosLogo.webp" alt="DevNest" className="xsm:w-20 xsm:h-20 md:w-24 md:h-24 lg:w-26 lg:h-26" loading="lazy"/>
          {/* Incluir enlaces de navegación aquí */}
        </div>
        
        {/* Links de navegación */}
        <div className='flex flex-col xsm:px-14 lg:px-0'>
          <h4 className="font-bold text-2xl mb-3">Directorio:</h4>
            <a href=""><p className='text-xl mb-2'>Inicio</p></a>
            <a href=""><p className='text-xl mb-2'>Servicios</p></a>
            <a href=""><p className='text-xl mb-2'>Tecnologías que usamos</p></a>
            <a href=""><p className='text-xl mb-2'>Quieneso somos</p></a>
            <a href=""><p className='text-xl mb-2'>Equipo</p></a>
            <a href=""><p className='text-xl mb-2'>Proyectos</p></a>
            <a href=""><p className='text-xl mb-2'>Testimonios</p></a>
        </div>

        {/* Servicios */}
        <div className='flex flex-col xsm:px-14 lg:px-0'>
          <h4 className="font-bold text-2xl mb-3">Servicios:</h4>
            <a href=""><p className='text-xl mb-2'>Desarrollo Web</p></a>
            <a href=""><p className='text-xl mb-2'>Desarrollo Empresarial</p></a>
            <a href=""><p className='text-xl mb-2'>Desarrollo Movil</p></a>
            <a href=""><p className='text-xl mb-2'>APIs y Microservicios</p></a>
            <a href=""><p className='text-xl mb-2'>Diseño UI/UX</p></a>
            <a href=""><p className='text-xl mb-2'>Bases de Datos</p></a>
            <a href=""><p className='text-xl mb-2'>Software a la Medida</p></a>
        </div>

        {/* Redes sociales */}
        <div className='flex flex-col xsm:px-14 lg:px-0'>
          <h4 className="font-bold text-2xl mb-3">Nuestras redes sociales:</h4>
          <a className='flex items-center gap-3 mb-5' href="https://www.instagram.com/devnest_studios/" target="_blank">
              <img className='w-8 h-8' src="/footer/instagramLogo.webp" alt="GitHub Logo" />
              <p className='text-xl'>@DevNestStudios</p>
            </a>
            <a className='flex items-center gap-3 mb-5' href="https://github.com/MichaelTorres12" target="_blank">
              <img className='w-8 h-8' src="/footer/githubLogo.webp" alt="GitHub Logo" />
              <p className='text-xl'>@DevNestStudios</p>
            </a>
            <a className='flex items-center gap-3 mb-5' href="" target="_blank">
              <img className='w-8 h-8' src="/footer/facebookLogo.webp" alt="GitHub Logo" />
              <p className='text-xl'>@DevNestStudios</p>
            </a>
            <a className='flex items-center gap-3 mb-5' href="" target="_blank">
              <img className='w-8 h-8' src="/footer/whatsappLogo.webp" alt="GitHub Logo" />
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
