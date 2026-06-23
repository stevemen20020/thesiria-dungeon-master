import { PALETTE } from "./Theme/Palette";

export const THEME = {
  SPACING: {
    xxxs: "0.05rem",
    xxs: "0.10rem",
    xs: "0.25rem",
    s: "0.5rem",
    m: "0.75rem",
    l: "1rem",
    xl: "1.5rem",
    xxl: "2rem",
    xxxl: "2.5rem",
  },

  RADIUS: {
    xs: "2px",
    s: "5px",
    m: "10px",
    l: "15px",
    xl: "20px",
    xxl: "30px",
    xxxl: "40px",
    round: "9999px",
  },

  FONT_SIZE: {
    xs: "0.75rem",
    s: "0.87rem",
    m: "1rem",
    l: "1.12rem",
    xl: "1.25rem",
    xxl: "1.35rem",
    xxxl: "1.5rem",
  },

  FONT_WEIGHT: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  LINE_HEIGHT: {
    xs: "0.2rem",
    s: "0.4rem",
    m: "0.6rem",
    l: "0.8rem",
    xl: "1rem",
  },

  SHADOWS: {
    s: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },

    m: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },

    l: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
    },
  },

  Z_INDEX: {
    base: 0,
    dropdown: 10,
    sticky: 100,
    overlay: 1000,
    modal: 1100,
    toast: 1200,
  },

  OPACITY: {
    disabled: 0.5,
    muted: 0.7,
    full: 1,
  },

  COLORS: {
    primary: PALETTE.MEDIUM_PINK,
    primaryStrong: PALETTE.HOT_PINK,
    primarySoft: PALETTE.PINK,

    // Accents
    secondary: PALETTE.LIGHT_BLUE,
    accent: PALETTE.LIGHT_PINK,

    // Backgrounds
    background: PALETTE.WHITE,
    surface: PALETTE.SUPER_LIGHT_PINK,
    surfaceAlt: PALETTE.LIGHT_BLUE,

    // Text
    textPrimary: PALETTE.OFF_BLACK,
    textSecondary: PALETTE.MEDIUM_PINK,
    textOnPrimary: PALETTE.WHITE,

    // UI
    border: PALETTE.LIGHT_PINK,
    divider: "rgba(33, 37, 41, 0.1)",

    // States
    success: "#2ecc71",
    warning: "#f1c40f",
    error: "#e63946",

    // Overlay
    overlay: "rgba(0,0,0,0.4)",

    disabled: PALETTE.DISABLED,
    dark_border: PALETTE.DARK_GRAY,
  },
};

export type ColorVariant = keyof typeof THEME.COLORS
export type SpacingVariant = keyof typeof THEME.SPACING
export type RadiusVariant = keyof typeof THEME.RADIUS
export type FontSizeVariant = keyof typeof THEME.FONT_SIZE
export type FontWeightVariant = keyof typeof THEME.FONT_WEIGHT
export type LineHeightVariant = keyof typeof THEME.LINE_HEIGHT
export type ShadowsVariant = keyof typeof THEME.SHADOWS
export type ZIndexVariant = keyof typeof THEME.Z_INDEX
export type OpacityVariant = keyof typeof THEME.OPACITY