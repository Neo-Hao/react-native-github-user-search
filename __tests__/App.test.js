import { render, waitFor } from '@testing-library/react-native';
import App from '../App';

// test if the app renders correctly without crashing
test('renders correctly', async () => {
  const { getByTestId } = render(<App />);
  
  await waitFor(() => {
    const component = getByTestId('test-header');
    expect(component).not.toBeNull();
  }, {timeout: 6000});

}, 10000);
