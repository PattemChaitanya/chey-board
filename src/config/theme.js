import { createTheme } from "@mui/material/styles";

// Define breakpoints
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

// Define transitions
const transitions = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
};

// Define typography
const typography = {
  h1: {
    fontSize: "3rem",
    [`@media screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]:
      {
        fontSize: "3.5rem",
      },
    [`@media screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]:
      {
        fontSize: "4rem",
      },
    [`@media screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]:
      {
        fontSize: "4.5rem",
      },
    [`@media screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "5rem",
    },
  },
  h2: {
    fontSize: "2.5rem",
    [`@media screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "4.5rem",
    },
    [`@media screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]:
      {
        fontSize: "4rem",
      },
    [`@media screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]:
      {
        fontSize: "3.5rem",
      },
    [`@media screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]:
      {
        fontSize: "3rem",
      },
  },
  h3: {
    fontSize: "2rem",
    [`@media screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "4rem",
    },
    [`@media screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]:
      {
        fontSize: "3.5rem",
      },
    [`@media screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]:
      {
        fontSize: "3rem",
      },
    [`@media screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]:
      {
        fontSize: "2.5rem",
      },
  },
  h4: {
    fontSize: "1.5rem",
    [`@media screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "3.5rem",
    },
    [`@media screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]:
      {
        fontSize: "3rem",
      },
    [`@media screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]:
      {
        fontSize: "2.5rem",
      },
    [`@media screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]:
      {
        fontSize: "2rem",
      },
  },
  h5: {
    fontSize: "1.25rem",
    [`@media screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "3.25rem",
    },
    [`@media screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]:
      {
        fontSize: "2.75rem",
      },
    [`@media screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]:
      {
        fontSize: "2.25rem",
      },
    [`@media screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]:
      {
        fontSize: "1.75rem",
      },
  },
  h6: {
    fontSize: "1rem",
    [`@media screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "3rem",
    },
    [`@media screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]:
      {
        fontSize: "2.5rem",
      },
    [`@media screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]:
      {
        fontSize: "2rem",
      },
    [`@media screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]:
      {
        fontSize: "1.5rem",
      },
  },
  subtitle1: {
    fontSize: "1rem",
    [`@media screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "2rem",
    },
    [`@media screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]:
      {
        fontSize: "1.75rem",
      },
    [`@media screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]:
      {
        fontSize: "1.5rem",
      },
    [`@media screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]:
      {
        fontSize: "1.25rem",
      },
  },
  subtitle2: {
    fontSize: "0.875rem",
    [`@media screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "1.75rem",
    },
    [`@media screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]:
      {
        fontSize: "1.5rem",
      },
    [`@media screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]:
      {
        fontSize: "1.25rem",
      },
    [`@media screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]:
      {
        fontSize: "1rem",
      },
  },
  body1: {
    fontSize: "1rem",
    [`@media screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "2rem",
    },
    [`@media screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]:
      {
        fontSize: "1.75rem",
      },
    [`@media screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]:
      {
        fontSize: "1.5rem",
      },
    [`@media screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]:
      {
        fontSize: "1.25rem",
      },
  },
  body2: {
    fontSize: "0.875rem",
    [`@media screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "1.75rem",
    },
    [`@media screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]:
      {
        fontSize: "1.5rem",
      },
    [`@media screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]:
      {
        fontSize: "1.25rem",
      },
    [`@media screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]:
      {
        fontSize: "1rem",
      },
  },
  button: {
    fontSize: "1rem",
    [`@media screen and (min-width:${breakpoints.values.xl}px)`]: {
      fontSize: "2rem",
    },
    [`@media screen and (min-width:${breakpoints.values.lg}px) and (max-width:${breakpoints.values.xl}px)`]:
      {
        fontSize: "1.75rem",
      },
    [`@media screen and (min-width:${breakpoints.values.md}px) and (max-width:${breakpoints.values.lg}px)`]:
      {
        fontSize: "1.5rem",
      },
    [`@media screen and (min-width:${breakpoints.values.sm}px) and (max-width:${breakpoints.values.md}px)`]:
      {
        fontSize: "1.25rem",
      },
  },
};

// Define color modes
const palette = {
  light: {
    mode: "light",
    primary: {
      main: "#0969da",
      light: "#2188ff",
      dark: "#005cc5",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#6e5494",
      light: "#8a63d2",
      dark: "#4a3276",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#f6f8fa",
    },
    text: {
      primary: "#24292e",
      secondary: "#586069",
      disabled: "#d1d5da",
      hint: "#6a737d",
    },
    divider: "#e1e4e8",
  },
  dark: {
    mode: "dark",
    primary: {
      main: "#58a6ff",
      light: "#79c0ff",
      dark: "#1f6feb",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d2a8ff",
      light: "#e2c5ff",
      dark: "#a371f7",
      contrastText: "#ffffff",
    },
    background: {
      default: "#0d1117",
      paper: "#161b22",
    },
    text: {
      primary: "#c9d1d9",
      secondary: "#8b949e",
      disabled: "#484f58",
      hint: "#6e7681",
    },
    divider: "#30363d",
  },
};

// Define component styles
const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: "none",
        padding: "8px 16px",
        [`@media (min-width:${breakpoints.values.sm}px)`]: {
          padding: "10px 20px",
        },
        [`@media (min-width:${breakpoints.values.md}px)`]: {
          padding: "12px 24px",
        },
        [`@media (min-width:${breakpoints.values.lg}px)`]: {
          padding: "14px 28px",
        },
        [`@media (min-width:${breakpoints.values.xl}px)`]: {
          padding: "16px 32px",
        },
      },
      containedPrimary: {
        backgroundColor: palette.light.primary.main,
        color: "#fff",
        "&:hover": {
          backgroundColor: "#115293",
        },
      },
      containedSecondary: {
        backgroundColor: palette.light.secondary.main,
        color: "#fff",
        "&:hover": {
          backgroundColor: "#8a63d2",
        },
      },
      outlinedPrimary: {
        borderColor: palette.light.primary.main,
        color: palette.light.primary.main,
        "&:hover": {
          borderColor: "#115293",
          backgroundColor: "rgba(17, 82, 147, 0.04)",
        },
      },
      outlinedSecondary: {
        borderColor: palette.light.secondary.main,
        color: palette.light.secondary.main,
        "&:hover": {
          borderColor: "#8a63d2",
          backgroundColor: "rgba(138, 99, 210, 0.04)",
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        borderBottom: "1px solid #e8e8e8",
        minHeight: 48,
        [`@media (min-width:${breakpoints.values.sm}px)`]: {
          minHeight: 52,
        },
        [`@media (min-width:${breakpoints.values.md}px)`]: {
          minHeight: 56,
        },
        [`@media (min-width:${breakpoints.values.lg}px)`]: {
          minHeight: 60,
        },
        [`@media (min-width:${breakpoints.values.xl}px)`]: {
          minHeight: 64,
        },
      },
      indicator: {
        backgroundColor: palette.light.primary.main,
        height: 4,
        [`@media (min-width:${breakpoints.values.sm}px)`]: {
          height: 5,
        },
        [`@media (min-width:${breakpoints.values.md}px)`]: {
          height: 6,
        },
        [`@media (min-width:${breakpoints.values.lg}px)`]: {
          height: 7,
        },
        [`@media (min-width:${breakpoints.values.xl}px)`]: {
          height: 8,
        },
      },
      scrollButtons: {
        color: palette.light.primary.main,
        "&.Mui-disabled": {
          opacity: 0.3,
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        [`@media (min-width:${breakpoints.values.xs}px)`]: {
          height: 56,
          backgroundColor: palette.light.primary.main,
        },
        [`@media (min-width:${breakpoints.values.sm}px)`]: {
          height: 64,
          backgroundColor: palette.light.primary.dark,
        },
        [`@media (min-width:${breakpoints.values.md}px)`]: {
          height: 72,
          backgroundColor: palette.light.secondary.main,
        },
        [`@media (min-width:${breakpoints.values.lg}px)`]: {
          height: 80,
          backgroundColor: palette.light.secondary.dark,
        },
        [`@media (min-width:${breakpoints.values.xl}px)`]: {
          height: 88,
          backgroundColor: palette.light.primary.light,
        },
      },
    },
  },
  MuiMobileStepper: {
    styleOverrides: {
      root: {
        [`@media (min-width:${breakpoints.values.xs}px)`]: {
          height: 40,
        },
        [`@media (min-width:${breakpoints.values.sm}px)`]: {
          height: 48,
        },
        [`@media (min-width:${breakpoints.values.md}px)`]: {
          height: 56,
        },
        [`@media (min-width:${breakpoints.values.lg}px)`]: {
          height: 64,
        },
        [`@media (min-width:${breakpoints.values.xl}px)`]: {
          height: 72,
        },
      },
    },
  },
  MuiModal: {
    styleOverrides: {
      root: {
        [`@media (min-width:${breakpoints.values.xs}px)`]: {
          padding: 16,
        },
        [`@media (min-width:${breakpoints.values.sm}px)`]: {
          padding: 24,
        },
        [`@media (min-width:${breakpoints.values.md}px)`]: {
          padding: 32,
        },
        [`@media (min-width:${breakpoints.values.lg}px)`]: {
          padding: 40,
        },
        [`@media (min-width:${breakpoints.values.xl}px)`]: {
          padding: 48,
        },
      },
    },
  },
  MuiSnackbar: {
    styleOverrides: {
      root: {
        [`@media (min-width:${breakpoints.values.xs}px)`]: {
          bottom: 16,
        },
        [`@media (min-width:${breakpoints.values.sm}px)`]: {
          bottom: 24,
        },
        [`@media (min-width:${breakpoints.values.md}px)`]: {
          bottom: 32,
        },
        [`@media (min-width:${breakpoints.values.lg}px)`]: {
          bottom: 40,
        },
        [`@media (min-width:${breakpoints.values.xl}px)`]: {
          bottom: 48,
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        [`@media (min-width:${breakpoints.values.xs}px)`]: {
          fontSize: "0.75rem",
        },
        [`@media (min-width:${breakpoints.values.sm}px)`]: {
          fontSize: "0.875rem",
        },
        [`@media (min-width:${breakpoints.values.md}px)`]: {
          fontSize: "1rem",
        },
        [`@media (min-width:${breakpoints.values.lg}px)`]: {
          fontSize: "1.125rem",
        },
        [`@media (min-width:${breakpoints.values.xl}px)`]: {
          fontSize: "1.25rem",
        },
      },
    },
  },
};

// Define zIndex
const zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

// Create and export the theme
const theme = (mode) => {
  return createTheme({
    breakpoints,
    transitions,
    typography,
    palette: palette[mode],
    components,
    zIndex,
  });
};

export default theme;
