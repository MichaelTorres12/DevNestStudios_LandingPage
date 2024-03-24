import'./logosSlider.css';

const logos = [
    "/testimonials/brands/3m.svg",
    "/testimonials/brands/budweiser.svg",
    "/testimonials/brands/buzzfeed.svg",
    "/testimonials/brands/forbes.svg",
    "/testimonials/brands/mrbeast.svg",

  ];

export const LogoSlider = () => {
    return (
        <div className="logos">
          <div className="logos-slide hover:cursor-pointer ">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt="Company Logo" />
            ))}
          </div>
          <div className="logos-slide hover:cursor-pointer">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt="Company Logo" />
            ))}
          </div>
        </div>
      );
}
