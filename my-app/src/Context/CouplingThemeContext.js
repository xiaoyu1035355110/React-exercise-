import React from 'react';

export const CouplingThemes = {
    light: {
        foreground: '#ffffff',
        background: '#222222'
    },
    dark: {
        foreground: '#000000',
        background: '#eeeeee'
    }
}

export const CouplingThemeContext = React.createContext({
    CouplingTheme: CouplingThemes.dark,
    CouplingToggleTheme: () => {}
})