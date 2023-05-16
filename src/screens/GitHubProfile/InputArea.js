import { useState } from 'react';
import axios from 'axios';
import { Pressable, StyleSheet, TextInput, Image } from 'react-native';
import { useThemeColors } from 'hooks/useThemeColors';
import { View, Text } from 'components/themed';
import { white } from 'constants/Colors';

const InputArea = ({ setUser, setError, setLoading, loading }) => {
  const { colors } = useThemeColors();

  const [username, setUsername] = useState('');

  const searchUser = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUser(response.data);
    } catch (error) {
      console.error(error);
      setError('User not found!');
    }

    setLoading(false);
  };

  const handleSubmit = () => {
    searchUser(username);
  };

  return (
    <View style={styles.inputArea}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('../../../assets/images/icon-search.png')}
          style={{ width: 30, height: 30, marginRight: 5 }}
        />
        <TextInput
          style={[styles.input, { color: colors.text }]}
          onChangeText={setUsername}
          value={username}
          keyboardType='default'
          placeholder='Enter GitHub username'
          placeholderTextColor={colors.text}
          autoCapitalize='none'
          autoCorrect={false}
        />
      </View>
      <Pressable
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={handleSubmit}
        disabled={!username || loading}
        testID='searchButton'
      >
        <Text style={{ color: white }}>Search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  input: {
    fontFamily: 'SpaceMono-Regular',
    marginLeft: 5,
  },
  button: {
    width: 80,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InputArea;
