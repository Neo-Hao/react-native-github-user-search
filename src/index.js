import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'context/Theme';
import { UsersProvider } from 'context/Users';
import RootNavigation from 'navigation/RootNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <UsersProvider>
          <RootNavigation />
        </UsersProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
