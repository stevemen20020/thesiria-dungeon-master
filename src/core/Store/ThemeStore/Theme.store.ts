
import { create } from "zustand";
import { LIGHT_COLORS, DARK_COLORS } from "../../../shared/Constants/Theme";

type Theme = "light" | "dark";

type ThemeStore = {
  theme: Theme;
  colors: typeof LIGHT_COLORS;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: "light",
  colors: LIGHT_COLORS,

  toggleTheme: () => {
    const nextTheme = get().theme === "dark" ? "light" : "dark";

    set({
      theme: nextTheme,
      colors: nextTheme === "dark" ? DARK_COLORS : LIGHT_COLORS,
    });
  },
}));
