import { ScrollView, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import GitHubProfile from './screens/GitHubProfile';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('./assets/fonts/SpaceMono-Regular.ttf'),
    'SpaceMono-Bold': require('./assets/fonts/SpaceMono-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView
          style={styles.container}
          onLayout={onLayoutRootView}
          keyboardShouldPersistTaps='handled'
        >
          <GitHubProfile />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#141d2f',
  },
  container: {
    padding: 20,
  },
});

export default App;
