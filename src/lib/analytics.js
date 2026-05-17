import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-NMTQ5S8M0N");
};

export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};
