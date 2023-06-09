import { render, waitFor } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GitHubProfile from '../../src/screens/GitHubProfile';

beforeEach(async () => {
  await AsyncStorage.clear();
  await AsyncStorage.setItem('@user_preferred_theme', 'dark');
});

// test if the app renders correctly without crashing
test('renders correctly', async () => {
  const { getByText } = render(<GitHubProfile />);

  await waitFor(
    () => {
      const appText = getByText('devfinder');
      expect(appText).not.toBeNull();
    },
    { timeout: 6000 }
  );
}, 10000);

// test if the useEffect hook is called properly
// this is an indirect test of useEffect
test('useEffect hook is called properly', async () => {
  const { queryByText } = render(<GitHubProfile />);

  await waitFor(
    () => {
      const appText = queryByText('San Francisco');
      expect(appText).not.toBeNull();
    },
    { timeout: 6000 }
  );
});

// test background color
test('test background color', () => {
  const { getByTestId } = render(<GitHubProfile />);
  const header = getByTestId('test-header'); 

  // if the style is an array, flatten it
  let styles = {};
  if (Array.isArray(header.props.style)) {
    styles = header.props.style.reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, {});
  } else {
    styles = header.props.style;
  }

  expect(styles.backgroundColor).toEqual('#141d2f');
});