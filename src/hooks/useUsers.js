import { useContext } from 'react';
import { UsersContext } from 'context/Users';

const useUsers = () => {
  const context = useContext(UsersContext);

  return {
    curUsername: context.curUsername, 
    setCurUsername: context.setCurUsername,
    users: context.users,
    setUsers: context.setUsers,
  };
};

export default useUsers;
export { useUsers };
