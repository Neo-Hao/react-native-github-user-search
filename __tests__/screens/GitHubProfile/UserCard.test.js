import { render } from '@testing-library/react-native';
import UserCard from '../../../screens/GitHubProfile/UserCard';

// test if loading is true, and the loading message is displayed
test('test if loading is true, and the loading message is displayed', () => {
  const { getByText } = render(<UserCard loading={true} error={null} />);
  expect(getByText('Searching ...')).toBeTruthy();
});

// test if error is true, and the error message is displayed
test('test if error is true, and the error message is displayed', () => {
  const { getByText } = render(<UserCard loading={false} error={true} />);
  expect(getByText("There's no such a profile")).toBeTruthy();
  expect(getByText('Or something else is wrong')).toBeTruthy();
});
