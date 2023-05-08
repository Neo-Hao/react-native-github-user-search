import { View as DefaultView } from 'react-native';
import { SafeAreaView as DefaultSafeAreaView } from 'react-native-safe-area-context';

import { useThemeColors } from 'hooks/useThemeColors';

export const View = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultView
      style={[{ backgroundColor: colors.background }, style]}
      {...rest}
    />
  );
};

export const SafeAreaView = (props) => {
  const { style, ...otherProps } = props;
  const { colors } = useThemeColors();

  return (
    <DefaultSafeAreaView
      style={[{ backgroundColor: colors.background }, style]}
      {...otherProps}
    />
  );
};
