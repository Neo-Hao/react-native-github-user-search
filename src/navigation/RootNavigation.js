import { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import BottomTabs from 'navigation/BottomTabs';
import { useThemeColors } from 'hooks/useThemeColors';
import { useCustomTheme } from 'hooks/useCustomTheme';
import GitHubProfile from 'screens/GitHubProfile';


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const RootNavigation = () => {
  const { colors } = useThemeColors();
  const { theme } = useCustomTheme();

  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('../../assets/fonts/SpaceMono-Regular.ttf'),
    'SpaceMono-Bold': require('../../assets/fonts/SpaceMono-Bold.ttf'),
  });

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...DefaultTheme.colors,
      primary: colors.primary,
      background: colors.background,
      card: colors.background,
      text: colors.text,
      border: 'transparent',
    },
  };

  // wait for the theme and fonts to load before hiding the splash screen
  useEffect(() => {
    const fetchSetting = async () => {
      if (!theme.loading && fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    fetchSetting();
  }, [theme.loading, fontsLoaded]);

  if (theme.loading) return null;
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer theme={navigationTheme}>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default RootNavigation;
