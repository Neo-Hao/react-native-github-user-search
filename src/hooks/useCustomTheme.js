import { useContext } from 'react';
import { ThemeContext } from 'context/Theme';

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);

  return {
    theme: context.theme,
    colors: context.colors,
    setTheme: context.setTheme,
    loading: context.loading,
  };
};