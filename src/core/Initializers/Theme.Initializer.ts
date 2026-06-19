import { useEffect } from "react";
import { DARK_COLORS, LIGHT_COLORS } from "../../shared/Constants/Theme";
import { useThemeStore } from "../Store/ThemeStore/Theme.store";

const ThemeInitializer = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

    const root = document.documentElement;

    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--background", colors.background);
    root.style.setProperty("--text", colors.textPrimary);
    root.style.setProperty("--surface", colors.surface);
  }, [theme]);

  return null;
};

export default ThemeInitializer;