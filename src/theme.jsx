import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === "dark" ? "#202023" : "#f0e7db",
      color: props.colorMode === "dark" ? "white" : "gray.800",
    },
  }),
};

const colors = {
  gray: {
    50: "rgba(255,255,255,0.2)",
    100: "#edf2f7",
    200: "#e2e8f0",
    300: "#cbd5e0",
    400: "#a0aec0",
    500: "#718096",
    600: "#4a5568",
    700: "#2d3748",
    800: "#202023", // Custom dark mode background color
    900: "#171923",
  },
  transparent: {
    502: "rgba(255,255,255,0.3)",
    50: "rgba(255,255,255,0.1)",
  },
  // Add more custom colors if needed
};

const breakpoints = {
  base: "0em",
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "1200px", // 992px
  xl: "75em", // 1200px (Custom breakpoint)
};

const theme = extendTheme({ config, styles, colors, breakpoints });

export default theme;
