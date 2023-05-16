import { StyleSheet } from 'react-native';
import { View, TextBold } from 'components/themed';

const Header = () => {
  return (
    <View style={styles.header} testID='test-header'>
      <TextBold style={styles.title} testID='test-header-text'>
        devfinder
      </TextBold>
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
  },
});

export default Header;
