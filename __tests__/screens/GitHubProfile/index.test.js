import { render, waitFor, fireEvent } from '@testing-library/react-native';
import GitHubProfile from '../../../screens/GitHubProfile/index';

// test if a search can successfully be made, and results are displayed
test('test if a search can successfully be made, and results are displayed', async () => {
  const { getByPlaceholderText, getByText, getByTestId } = render(
    <GitHubProfile />
  );

  const input = getByPlaceholderText('Enter GitHub username');
  fireEvent.changeText(input, 'octocat');

  const searchButton = getByTestId('searchButton');
  fireEvent.press(searchButton);

  await waitFor(() => {
    expect(getByText('@octocat')).toBeTruthy();
    expect(getByText('San Francisco')).toBeTruthy();
  });
});
