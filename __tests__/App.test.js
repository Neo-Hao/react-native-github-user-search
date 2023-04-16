import { render, waitFor } from '@testing-library/react-native';
import App from '../App';

// test if the app renders correctly without crashing: jest-expo is required
test('renders correctly', async () =>  {
  const { getByText } = render(<App />);

  // wait for the async content to be rendered
  await new Promise((resolve) => setTimeout(resolve, 500));

  await waitFor(() => {
    const asyncContent = getByText('devfinder');
    expect(asyncContent).toBeDefined();
  });
});