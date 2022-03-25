const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}) and (max-width: 800px)`,
  mobile: `(min-width: ${size.mobileM}) and (max-width: 900px)`,
  mobileL: `(min-width: ${size.mobileL}) and (max-width: 950px)`,
  tablet: `(min-width: ${size.tablet}) and (max-width: 1023px)`,
  laptop: `(min-width: ${size.laptop}) and (max-width: 1439px)`,
  laptopL: `(min-width: ${size.laptopL}) and (max-width: 2559px)`,
  desktop: `(min-width: ${size.desktop})`,
};