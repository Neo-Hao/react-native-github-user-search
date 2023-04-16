import { render, waitFor, fireEvent } from '@testing-library/react-native';
import InputArea from '../../../screens/GitHubProfile/InputArea';

// test if the search button can trigger the setUser function
test('test if the search button can trigger the searchUser function', async () => {
  const setUser = jest.fn(),
    setError = jest.fn();

  const { getByTestId, getByPlaceholderText } = render(
    <InputArea setUser={setUser} setError={setError} />
  );

  const input = getByPlaceholderText('Enter GitHub username');
  fireEvent.changeText(input, 'test');

  const searchButton = getByTestId('searchButton');
  fireEvent.press(searchButton);

  await waitFor(() => {
    expect(setUser).toHaveBeenCalled();
  });
});

