import { useState } from 'react';
import axios from 'axios';
import { View, Pressable, StyleSheet, TextInput, Image } from 'react-native';
import { MyText } from '../../components/MyText';

const InputArea = ({ setUser, setError }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

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
          source={require('../../assets/images/icon-search.png')}
          style={{ width: 30, height: 30, marginRight: 5 }}
        />
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          keyboardType='default'
          placeholder='Enter GitHub username'
          placeholderTextColor='#fff'
          autoCapitalize='none'
          autoCorrect={false}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={handleSubmit}
        disabled={!username || loading}
        testID='searchButton'
      >
        <MyText>Search</MyText>
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
    backgroundColor: '#1e2a47',
    borderColor: '#1e2a47',
    borderRadius: 5,
  },
  input: {
    fontFamily: 'SpaceMono-Regular',
    marginLeft: 5,
    color: '#fff',
  },
  button: {
    backgroundColor: '#0079ff',
    width: 80,
    height: 40,
    borderColor: '#0079ff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InputArea;
