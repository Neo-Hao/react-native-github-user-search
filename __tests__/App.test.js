import { render, waitFor } from '@testing-library/react-native';
import App from '../App';

// test if the app renders correctly without crashing: jest-expo is required
test('renders correctly', async () =>  {
  const { getByText } = render(<App />);
  let asyncContent;

  await waitFor(() => {
    asyncContent = getByText('devfinder');
  }, { timeout: 20000 });

  expect(asyncContent).toBeDefined();
});