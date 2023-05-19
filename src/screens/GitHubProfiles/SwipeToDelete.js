import React from 'react';
import { Image, Animated, StyleSheet } from 'react-native';
import { ViewPlain, ViewContrast, Text, Icon } from 'components/themed';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

const SwipeToDelete = ({ user, onDelete }) => {
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

  return (
    <Swipeable renderRightActions={renderRightActions}>
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
    height: 80,
    maxWidth: 80,
    maxHeight: 80,
  },
});

export default SwipeToDelete;
