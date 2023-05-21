import SwipeToDelete from './SwipeToDelete';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useUsers } from 'hooks/useUsers';

const UserList = ({ navigation }) => {
  // one state that stores all users
  const { users, setUsers } = useUsers();

  // delete a user from the list
  const deleteUser = (index) => {
    // update the state
    setUsers((prevUsers) => {
      const newUsers = prevUsers.filter((_, i) => i !== index);
      return newUsers;
    });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, marginBottom: 30 }}>
      {users.map((user, i) => (
        <SwipeToDelete
          navigation={navigation}
          user={user}
          onDelete={() => deleteUser(i)}
          key={i + user.login}
        />
      ))}
    </GestureHandlerRootView>
  );
};

export default UserList;
