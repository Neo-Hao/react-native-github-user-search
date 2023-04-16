import { render, waitFor } from '@testing-library/react-native';
import App from '../App';

// test if the app renders correctly without crashing: jest-expo is required
test('renders correctly', async () =>  {
  const { getByText } = render(<App />);

  await waitFor(() => {
    const asyncContent = getByText('devfinder');
    expect(asyncContent).toBeDefined();
  }, { timeout: 20000 });
});