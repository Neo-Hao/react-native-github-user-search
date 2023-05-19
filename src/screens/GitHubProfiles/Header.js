import { StyleSheet } from 'react-native';
import { View, TextBold } from 'components/themed';

const Header = ({style, ...rest}) => {
  return (
    <View style={[styles.header, style]} {...rest} testID='test-header'>
      <TextBold style={styles.title} testID='test-header-text'>
        devfinder: Profiles
      </TextBold>
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
