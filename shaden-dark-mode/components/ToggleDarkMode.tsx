"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

const ToggleDarkMode = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // Use CSS for visual representation, applying conditional classes based on the theme
    return (
        <Button
            onClick={toggleTheme}
            variant="secondary"
            size="icon"
            aria-label="Toggle Dark Mode"
            className="relative inline-flex justify-center items-center"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    );
};

export default ToggleDarkMode;
