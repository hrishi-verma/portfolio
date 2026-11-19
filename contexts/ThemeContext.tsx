'use client';

import { createContext, useContext, useEffect, useSyncExternalStore, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_EVENT = 'themechange';

// Fallback when localStorage is blocked (private mode, disabled site data)
let memoryTheme: Theme | null = null;

// Saved theme lives in localStorage; default remains dark - no system preference check
function readTheme(): Theme {
    try {
        return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    } catch {
        return memoryTheme ?? 'dark';
    }
}

function subscribe(onChange: () => void) {
    window.addEventListener(THEME_EVENT, onChange);
    window.addEventListener('storage', onChange);
    return () => {
        window.removeEventListener(THEME_EVENT, onChange);
        window.removeEventListener('storage', onChange);
    };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    // Server snapshot is 'dark', so hydration matches the server HTML before switching to the saved theme
    const theme = useSyncExternalStore(subscribe, readTheme, () => 'dark' as Theme);

    useEffect(() => {
        // Update document class
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        const next: Theme = theme === 'dark' ? 'light' : 'dark';
        memoryTheme = next;
        try {
            localStorage.setItem('theme', next);
        } catch {
            // Storage unavailable; memoryTheme keeps the choice for this visit
        }
        window.dispatchEvent(new Event(THEME_EVENT));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    // Return default values during SSR
    if (context === undefined) {
        return {
            theme: 'dark' as Theme,
            toggleTheme: () => { }
        };
    }

    return context;
}
