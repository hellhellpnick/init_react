import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "theme/GlobalStyles";
import { useTheme } from "theme/useTheme";

export default function App() {
    const { theme, themeLoaded } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);

    return (
        <ThemeProvider theme={selectedTheme}>
            <div className="App" />
        </ThemeProvider>
    );
}
