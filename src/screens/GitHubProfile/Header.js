import { Fragment } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { View, TextBold, Icon } from 'components/themed';
import useUsers from 'hooks/useUsers';

const Header = ({ user, addUser, style, ...rest }) => {
  const { users } = useUsers();

  const addUserTrigger = () => {
    if (user !== null) {
      addUser(user);
    }
  };

  return (
    <View style={[styles.header, style]} {...rest} testID='test-header'>
      <TextBold style={styles.title} testID='test-header-text'>
        devfinder
      </TextBold>

      {user === null ? (
        <Fragment />
      ) : users.some((u) => u.login === user.login) ? (
        <Icon name='checkmark-circle' color='green' size={32} />
      ) : (
        <Pressable onPress={addUserTrigger}>
          <Icon name='add-circle-outline' size={32} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    lineHeight: 30,
  },
});

export default Header;
