import { View as DefaultView } from 'react-native';
import { SafeAreaView as DefaultSafeAreaView } from 'react-native-safe-area-context';

import { useCustomTheme } from 'hooks/useCustomTheme';

export const View = ({ style, ...rest }) => {
  const { colors } = useCustomTheme();

  return (
    <DefaultView
      style={[{ backgroundColor: colors.background }, style]}
      {...rest}
    />
  );
};

export const ViewContrast = ({ style, ...rest }) => {
  const { colors } = useCustomTheme();

  return (
    <DefaultView
      style={[{ backgroundColor: colors.backgroundSecondary }, style]}
      {...rest}
    />
  );
};

export const SafeAreaView = ({ style, ...rest }) => {
  const { colors } = useCustomTheme();

  return (
    <DefaultSafeAreaView
      style={[{ backgroundColor: colors.background }, style]}
      {...rest}
    />
  );
};
