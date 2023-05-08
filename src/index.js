import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'context/Theme';
import RootNavigation from 'navigation/RootNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <RootNavigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
