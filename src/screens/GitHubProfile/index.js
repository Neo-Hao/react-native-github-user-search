import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import InputArea from './InputArea';
import Header from './Header';
import UserCard from './UserCard';
import Layout from 'layouts/Main';
import { useUsers } from 'hooks/useUsers';

const GitHubProfile = () => {
  const { curUsername, setUsers } = useUsers();

  console.log(curUsername);

  // one state that stores the user data
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
          `https://api.github.com/users/${curUsername}`
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
        setError('User not found!');
      }
    };
    loadUser();
  }, [curUsername]);

  // add a new user
  const addUser = (user) => {
    const userObj = {
      name: user.name,
      login: user.login,
      avatar_url: user.avatar_url,
    };

    setUsers((prevUsers) => {
      if (prevUsers.some((u) => u.login === user.login)) {
        return prevUsers;
      } else {
        return [...prevUsers, userObj];
      }
    });
  };

  return (
    <Layout>
      <Header user={user} addUser={addUser} style={{ padding: 20 }} />
      <ScrollView style={{ padding: 20 }} keyboardShouldPersistTaps='handled'>
        <InputArea
          setUser={setUser}
          setError={setError}
          setLoading={setLoading}
          loading={loading}
        />
        <UserCard user={user} error={error} loading={loading} />
      </ScrollView>
    </Layout>
  );
};

export default GitHubProfile;
