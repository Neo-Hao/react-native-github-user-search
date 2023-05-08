import { useEffect, useState } from 'react';
import axios from 'axios';
import InputArea from './InputArea';
import Header from './Header';
import UserCard from './UserCard';
import Layout from 'layouts/Main';

const GitHubProfile = () => {
  // one state that stores the user data
  // the user data comes from the GitHub API
  const [user, setUser] = useState(null);

  // one state that stores the error message
  const [error, setError] = useState(null);

  // one state that stores the loading status
  const [loading, setLoading] = useState(false);

  // load a user from the GitHub API
  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/octocat'
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
        setError('User not found!');
      }
    };
    loadUser();
  }, []);

  return (
    <Layout>
      <Header />
      <InputArea
        setUser={setUser}
        setError={setError}
        setLoading={setLoading}
        loading={loading}
      />
      <UserCard user={user} error={error} loading={loading} />
    </Layout>
  );
};

export default GitHubProfile;
