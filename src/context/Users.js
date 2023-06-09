import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UsersContext = createContext({
  curUsername: 'octocat',
  setCurUsername: () => {},
  users: [],
  setUsers: () => {},
});

const UsersProvider = ({ children }) => {
  const [curUsername, setCurUsername] = useState('octocat');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const users = await AsyncStorage.getItem('@users');
        if (users !== null) {
          setUsers(JSON.parse(users));
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadUsers();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@users', JSON.stringify(users));
  }, [users]);

  console.log(users);

  return (
    <UsersContext.Provider value={{ curUsername, setCurUsername, users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
