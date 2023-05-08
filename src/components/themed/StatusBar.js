import { StatusBar as DefaultStatusBar } from "react-native";

import { useThemeColors } from "hooks/useThemeColors";

export const StatusBar = (props) => {
  const { isDark, colors } = useThemeColors();

  const barStyle = isDark ? "light-content" : "dark-content";

  return (
    <DefaultStatusBar
      barStyle={barStyle}
      backgroundColor={colors.background}
      {...props}
    />
  );
};
