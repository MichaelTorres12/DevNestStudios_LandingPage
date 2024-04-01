import'./logosSlider.css';



const logos = [
    "/testimonials/brands/3m.webp",
    "/testimonials/brands/budweiser.webp",
    "/testimonials/brands/forbes.webp",
    "/testimonials/brands/mrbeast.webp",
    "/testimonials/brands/buzzfeed.webp",

  ];

export const LogoSlider = () => {
    return (
        <div className="logos">
          <div className="logos-slide hover:cursor-pointer md:inline-flex ">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt="Company Logo" loading="lazy"/>
            ))}
          </div>
          <div className="logos-slide hover:cursor-pointer xsm:hidden lg:inline-flex ">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt="Company Logo" loading="lazy"/>
            ))}
          </div>
        </div>
      );
}
