import { Fragment } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { View, Text } from 'components/themed';
import { useThemeColors } from 'hooks/useThemeColors';
import { useCustomTheme, Themes } from 'context/Theme';
import Header from './Header';
import Layout from 'layouts/Main';

const Border = () => {
  const { colors } = useThemeColors();
  return <View style={[styles.border, { backgroundColor: colors.text }]} />;
};

const ThemeRow = ({ children, checked, onPress }) => {
  const { colors } = useThemeColors();

  const checkedStyle = [styles.checkbox, { borderColor: colors.text }];

  if (checked) {
    checkedStyle.push({
      borderColor: colors.primarySecondary,
      backgroundColor: colors.primary,
    });
  }

  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View style={checkedStyle} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const Settings = () => {
  const { theme, setTheme } = useCustomTheme();

  return (
    <Layout>
      <Header />
      {Themes.map((key, index) => (
        <Fragment key={key}>
          <ThemeRow onPress={() => setTheme(key)} checked={theme === key}>
            {key}
          </ThemeRow>
          {index !== Themes.length - 1 && <Border />}
        </Fragment>
      ))}
    </Layout>
  );
};

const styles = StyleSheet.create({
  border: {
    flex: 1,
    height: 1,
    backgroundColor: 'red',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 10,
  },
});

export default Settings;
