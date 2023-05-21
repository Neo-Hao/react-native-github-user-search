import { Image, Animated, StyleSheet } from 'react-native';
import { ViewPlain, ViewContrast, Text, Icon } from 'components/themed';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { useUsers } from 'hooks/useUsers';

const SwipeToDelete = ({ navigation, user, onDelete }) => {
  const { setCurUsername } = useUsers();

  const renderRightActions = (_, dragX) => {
    const transX = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    return (
      <RectButton style={styles.deleteButton} onPress={onDelete}>
        <Animated.Text
          style={[styles.buttonText, { transform: [{ translateX: transX }] }]}
        >
          <Icon name='trash-outline' color='white' size={25} />
        </Animated.Text>
      </RectButton>
    );
  };

  const renderLeftActions = (_, dragX) => {
    const transX = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [-100, 0],
      extrapolate: 'clamp',
    });

    return (
      <RectButton
        style={styles.accessButton}
        onPress={() => {
          setCurUsername(user.login);
          navigation.navigate('Profile');
        }}
      >
        <Animated.Text
          style={[styles.buttonText, { transform: [{ translateX: transX }] }]}
        >
          <Icon name='ribbon-outline' color='white' size={25} />
        </Animated.Text>
      </RectButton>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <ViewContrast style={styles.card}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
        <ViewPlain style={styles.generalInfo}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>@{user.login}</Text>
        </ViewPlain>
      </ViewContrast>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    width: 100,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f00',
  },
  accessButton: {
    width: 100,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006400',
  },
  buttonText: {
    color: '#fff',
    paddingHorizontal: 16,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
  generalInfo: {
    marginLeft: 30,
  },
  avatar: {
    width: 80,
    borderRadius: 50,
    height: 80,
    maxWidth: 80,
    maxHeight: 80,
  },
});

export default SwipeToDelete;
