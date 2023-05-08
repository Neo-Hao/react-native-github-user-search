import { StatusBar as DefaultStatusBar } from 'react-native';
import { useThemeColors } from 'hooks/useThemeColors';

export const StatusBar = ({ ...rest }) => {
  const { theme, colors } = useThemeColors();

  const barStyle = theme === 'dark' ? 'light-content' : 'dark-content';

  return (
    <DefaultStatusBar
      barStyle={barStyle}
      backgroundColor={colors.background}
      {...rest}
    />
  );
};
