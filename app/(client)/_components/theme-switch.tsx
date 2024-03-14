"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsClient } from "usehooks-ts";

const ThemeSwitch = () => {
  let _theme: string | undefined;
  const { theme, systemTheme, setTheme } = useTheme();

  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  _theme = theme;
  if (theme === "system") {
    _theme = systemTheme;
  }

  return (
    <button
      className=""
      onClick={() => setTheme(_theme === "dark" ? "light" : "dark")}
    >
      {_theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSwitch;
