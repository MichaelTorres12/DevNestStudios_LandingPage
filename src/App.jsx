//Prinicipal Component where we are grouping the whole sections together.

import './App.css'
import { HeaderComponent } from './components/HeaderSection/HeaderComponent';
import { HeroComponent } from './components/HeroSection/HeroComponent';
import { ServiceComponent } from './components/ServicesSection/ServiceComponent';
import { AboutComponent } from './components/AboutSection/AboutComponent';
import { TeamComponent } from './components/TeamSection/TeamComponent';
import { ProjectsComponent } from './components/ProjectsSection/ProjectsComponent';
import { TestimonialsComponent } from './components/TestimonialsSection/TestimonialsComponent';
import { ContactComponent } from './components/ContactSection/ContactComponent';
import { FooterComponent } from './components/FooterSection/FooterComponent';

//Para llevar analytics desde Vercel Dashboard
import { Analytics } from "@vercel/analytics/react"

//Para hacer que mi carrusel funcione
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    // mx-auto centra el contenido horizontalmente
    // max-w-7xl establece un ancho máximo (puedes ajustarlo según tus necesidades)
    <div className='generalWrapper mx-auto '>
      
      <HeaderComponent/>
      <HeroComponent/>
      <ServiceComponent/>
      <AboutComponent/>
      <TeamComponent/>
      <ProjectsComponent/>
      <TestimonialsComponent/>
      <ContactComponent/>
      <FooterComponent/>

      <Analytics />
      
    </div>
  )
}

export default App
