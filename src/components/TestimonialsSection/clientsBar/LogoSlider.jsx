import'./logosSlider.css';



const logos = [
    "/testimonials/brands/metaBixLogo.svg",
    "/testimonials/brands/lecaLogo.webp",
    "/testimonials/brands/transbankLogo.webp",
    "/testimonials/brands/paveEnergyLogo.webp",
    "/testimonials/brands/suivarCodesLogo.svg",

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
