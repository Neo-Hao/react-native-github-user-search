import { StyleSheet } from 'react-native';
import { View, TextBold } from 'components/themed';

const Header = ({ style, ...rest }) => {
  return (
    <View style={[styles.header, style]} {...rest}>
      <TextBold style={styles.title}>devfinder: Setting</TextBold>
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
