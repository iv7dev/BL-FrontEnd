import { Colors } from "./types";

export const baseColors = {
  failure: "#CC66CC",
  primary: "#336699",
  primaryBright: "#3399CC",
  primaryDark: "#0066CC",
  secondary: "#9933CC",
  success: "#0099FF",
  warning: "#FF9900",
};

export const additionalColors = {
  binance: "#FFCC00",
  overlay: "#9933CC",
  gold: "#FFCC00",
  silver: "#999999",
  bronze: "#CC9966",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#F4F4F4",
  backgroundDisabled: "#E1E4EA",
  backgroundAlt: "#F3F9FF",
  backgroundAlt2: "rgba(255, 255, 255, 0.7)",
  cardBorder: "#D7C8E8",
  contrast: "#341E4C",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#F5F5FC",
  input: "#EEEAF4",
  inputSecondary: "#BBB7E5",
  tertiary: "#E6E2ED",
  text: "#f0f8ff", // page text
  textDisabled: "#BDC2C4",
  textSubtle: "#9379BC", // menu text
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #EFE2F7 0%, #EAE9F2 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #E1DBFC 0%, #D7FEFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #EDE2ED 0%, #D8E9EF 100%)",
    blue: "linear-gradient(180deg, #EDCAF9 0%, #95B6EF 100%)",
    violet: "linear-gradient(180deg, #D3B5F7 0%, #C0ACF9 100%)",
    violetAlt: "linear-gradient(180deg, #BFD9E8 0%, #9489CC 100%)",
    gold: "linear-gradient(180deg, #FFC200 0%, #F99716 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#8935BA",
  background: "#140F1C",
  backgroundDisabled: "#302838",
  backgroundAlt: "#1E1C2B", // menu bar
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",
  cardBorder: "#15153D",
  contrast: "#262035",
  dropdown: "#F9F9F9",
  dropdownDeep: "#1A191C",
  invertedContrast: "#100C18",
  input: "#1E0D21",
  inputSecondary: "#3D233F",
  primaryDark: "#1E182D",
  tertiary: "#0099FF",
  text: "#F6F0FF",
  textDisabled: "#F6F0FF",
  textSubtle: "#F6F0FF",
  disabled: "#4F3C5E",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #334968 0%, #311E56 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #311E56 0%, #334968 100%)",
    cardHeader: "linear-gradient(166.77deg, #32436D 0%, #332051 100%)",
    blue: "linear-gradient(180deg, #03628C 0%, #15989E 100%)",
    violet: "linear-gradient(180deg, #7E53BC 0%, #8935BA 100%)",
    violetAlt: "linear-gradient(180deg, #353B87 0%, #4A3F8C 100%)",
    gold: "linear-gradient(180deg, #FFC200 0%, #F99716 100%)",
  },
};
