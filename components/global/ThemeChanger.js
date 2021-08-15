import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="p-3 rounded-lg bg-gray-200 text-gray-700
     dark:bg-gray-800 dark:text-gray-200"
      onClick={() => {
        resolvedTheme !== "dark" ? setTheme("dark") : setTheme("light");
      }}
    >
      {resolvedTheme !== "dark" ? (
        <MoonIcon className="w-4" />
      ) : (
        <SunIcon className="w-4 text-yellow-400" />
      )}
    </button>
  );
}
