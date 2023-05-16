import { StatusBar as DefaultStatusBar } from 'react-native';
import { useCustomTheme } from 'hooks/useCustomTheme';

export const StatusBar = ({ ...rest }) => {
  const { theme, colors } = useCustomTheme();

  const barStyle = theme === 'dark' ? 'light-content' : 'dark-content';

  return (
    <DefaultStatusBar
      barStyle={barStyle}
      backgroundColor={colors.background}
      {...rest}
    />
  );
};
