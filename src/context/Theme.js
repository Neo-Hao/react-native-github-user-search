import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useColorScheme } from 'hooks/useColorScheme';

export const Themes = ['light', 'dark'];

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
  loading: true,
});

export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState(systemTheme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@user_preferred_theme')
      .then((storedTheme) => {
        if (storedTheme) {
          setTheme(storedTheme);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@user_preferred_theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, loading }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);

  let isDark = false;

  if (context.theme === 'dark') {
    isDark = true;
  }

  return {
    isDark,
    theme: context.theme,
    setTheme: context.setTheme,
    loading: context.loading,
  };
};
