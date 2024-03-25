import'./logosSlider.css';



const logos = [
    "/testimonials/brands/3m.svg",
    "/testimonials/brands/budweiser.svg",
    "/testimonials/brands/forbes.svg",
    "/testimonials/brands/mrbeast.svg",
    "/testimonials/brands/buzzfeed.svg",

  ];

export const LogoSlider = () => {
    return (
        <div className="logos">
          <div className="logos-slide hover:cursor-pointer md:inline-flex ">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt="Company Logo" />
            ))}
          </div>
          <div className="logos-slide hover:cursor-pointer xsm:hidden lg:inline-flex ">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt="Company Logo" />
            ))}
          </div>
        </div>
      );
}
