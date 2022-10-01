import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#FFF",

      primary: "#8257e6",
      primaryLight: "#9871f5",

      gray100: "#e1e1e6",
      gray300: "#c4c4cc",
      gray800: "#202024",
      gray900: "#121214",

      green500: "#00875f",
      green600: "#00b37e",
    },
    fontSizes: {
      sm: "1.125rem",
      md: "1.25rem",
      lg: "1.5rem",
      xl: "2rem",
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    lineHeights: {
      default: "160%",
    },
  },
});
