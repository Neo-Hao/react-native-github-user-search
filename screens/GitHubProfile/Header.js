import { View, StyleSheet } from 'react-native';
import { MyTextBold } from '../../components/MyText';

const Header = () => {
  return (
    <View style={styles.header}>
      <MyTextBold style={styles.title}>devfinder</MyTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 50,
  },
  title: {
    fontSize: 28,
    lineHeight: 30,
    color: '#fff',
  },
});

export default Header;
