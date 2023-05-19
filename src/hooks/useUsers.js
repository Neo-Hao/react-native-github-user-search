import { useContext } from 'react';
import { UsersContext } from 'context/Users';

const useUsers = () => {
  const context = useContext(UsersContext);

  return {
    users: context.users,
    setUsers: context.setUsers,
  };
};

export default useUsers;
export { useUsers };
