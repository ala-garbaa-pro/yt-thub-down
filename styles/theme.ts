import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const globalColors = {
  brand_1: "#0EA5EA",
  brand_2: "#1CC2E7",
  brand_3: "#0BD1D1",
  brand_4: "#21E1AE",
};

const colors = {
  blue_brand: {
    1: "#0EA5EA",
    2: "#0D9DDE",
    3: "#0D94D3",
    4: "#0C8CC7",
    5: "#0B84BB",
    6: "#0A7CB0",
    7: "#0A73A4",
    8: "#096B98",
    9: "#08638C",
    10: "#085B81",
    11: "#075375",
    12: "#064A69",
    13: "#06425E",
    14: "#053A52",
    15: "#043146",
    16: "#03293B",
    17: "#03212F",
  },
  green_brand: {
    1: "#21E1AE",
    2: "#1DD8A6",
    3: "#1CCD9E",
    4: "#1AC195",
    5: "#19B68C",
    6: "#17AA83",
    7: "#169F7B",
    8: "#149472",
    9: "#128869",
    10: "#117D60",
    11: "#0F7258",
    12: "#0E664F",
    13: "#0C5B46",
    14: "#0B503D",
    15: "#094435",
    16: "#08392C",
    17: "#062D23",
  },
  brand: {
    1: globalColors.brand_1,
    2: globalColors.brand_2,
    3: globalColors.brand_3,
    4: globalColors.brand_4,
  },
  border: {
    1: "#D5DFE4",
  },
  text: {
    dark1: "#B9E0F2",
    light1: "#103f55",
  },
  dark: {
    50: "#E6F0FE",
    100: "#D8E6FC",
    200: "#C9DAF6",
    300: "#B8CDEC",
    400: "#A7BDDE",
    500: "#94A9C8",
    600: "#7F92B1",
    700: "#66768E",
    800: "#222F44",
    850: "#131C30",
    900: "#0F172B",
    950: "#0B1223",
  },
  light: {
    950: "#F9FBFE",
    900: "#F9FBFE",
    850: "#E8EDF6",
    800: "#C8D5E9",
    700: "#4E658B",
    600: "#7E9CC8",
    500: "#2E548B",
    400: "#94A9C8",
    300: "#7F92B1",
    200: "#66768E",
    100: "#4A576B",
    50: "#344162",
  },
  success: {
    500: "#6CFFC1",
  },
  danger: {
    500: "#FF756C",
  },
  primary: {
    500: "#1AAEED",
  },
  secondary: {
    500: "#8D99AE",
  },
  info: {
    500: "#27B3D2",
  },
  warning: {
    500: "#FFB067",
  },
  green: {
    500: "#00FF8A",
  },
  yellow: {
    500: "#FFF500",
  },
  pink: {
    500: "#FF6BC4",
  },
  blue: {
    500: "#3AA1FF",
  },
  linear: {
    500: "rgba(14, 165, 234, 1)",
  },
  gray: {
    500: "#667085",
  },
  boxshadow: {
    1: "rgba(11,209,209,0.2) 0px 3px 20px",
    2: "rgba(0, 0, 0, 0.04) 0px 45px 80px",
    3: "rgba(21, 28, 38, 0.1) 0px 47px 65px",
    4: "rgba(228, 92, 35, 0.1) 4px 6px 23px",
    5: "rgba(16, 24, 40, 0.1) 4px 4px 40px",
    inner: "#FCFCFC inset 0px 40px 80px",
    6: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    7: "rgba(11,209,209,0.3) 0px 3px 20px",
  },
  bg: {
    1: `linear-gradient(90deg, ${globalColors.brand_1}, ${globalColors.brand_3} 51%, ${globalColors.brand_1}) 100% / 200%`,
    2: `linear-gradient(90deg, ${globalColors.brand_3} 0%, ${globalColors.brand_1} 100%)`,
    3: `linear-gradient(90deg, ${globalColors.brand_3} 0%, ${globalColors.brand_4} 100%)`,
    4: `linear-gradient(90deg, #0B84BB 0%, #19B68C 100%)`,
  },
};

const fonts = {
  heading: "Poppins",
  body: "Poppins",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
  disableTransitionOnChange: false,
};
const styles = {
  global: (props: any) => ({
    body: {
      // #0F172A => dark.950
      // DDD
      bg: mode("#EEE", "#0F172A")(props),
      // #94A9C9 => dark.500
      // #2E548C => light.500
      color: mode("#2E548C", "#94A9C9")(props),
      transitionDuration: "256ms",
    },
  }),
};

// logo gradient
// 3g, 2d, 1g, 3b

export const theme = extendTheme({ styles, config, colors, fonts });
