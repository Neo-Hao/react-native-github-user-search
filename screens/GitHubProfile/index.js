import { useState } from 'react';
import InputArea from './InputArea';
import Header from './Header';
import UserCard from './UserCard';

const GitHubProfile = () => {
  // one state that stores the user data
  // the user data comes from the GitHub API
  const [user, setUser] = useState(null);

  // one state that stores the error message
  const [error, setError] = useState(null);

  // one state that stores the loading status
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      <InputArea
        setUser={setUser}
        setError={setError}
        setLoading={setLoading}
        loading={loading}
      />
      <UserCard user={user} error={error} loading={loading} />
    </>
  );
};

export default GitHubProfile;
