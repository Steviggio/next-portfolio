"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-500"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-neutral-100" />
      ) : (
        <Moon className="h-5 w-5 text-neutral-800" />
      )}
    </button>
  );
}
