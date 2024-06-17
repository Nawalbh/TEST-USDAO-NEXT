"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0em", // 0px
  xsm: "17.6em", // ~320px. em is a relative unit and is dependant on the font size.
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "49em", // ~768px
  lg: "65em", // ~  1024px
  xl: "91em", // ~1280px
  "2xl": "160em", // ~1536px
};

const theme = extendTheme({
  breakpoints,
  colors: {
    brand: {
      100: "#ffffff",
      200: "#000000",
      300: "#DD6B20",
      400: "#FFA500",
      500: "#dbdbdb",
    },
  },
});

export function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
