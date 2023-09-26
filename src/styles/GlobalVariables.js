export const colours = {
  white: "#ffffff",
  black: "#000000",
};

// This doesn't get used directly and is only used for the 'device' const below
export const size = {
  mobileM: "360px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1030px",
  laptopL: "1440px",
  desktopL: "1920px",
  desktopXL: "2560px",
};

export const device = {
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktopL: `(min-width: ${size.desktopL})`,
  desktopLL: `(min-width: ${size.desktopXL})`,
};
