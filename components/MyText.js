import { Text } from 'react-native';

const MyText = ({ style, children, ...rest }) => {
  return (
    <Text
      {...rest}
      style={[
        { fontFamily: 'SpaceMono-Regular', color: '#fff', fontSize: 16 },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const MyTextBold = ({ style, children, ...rest }) => {
  return (
    <Text
      {...rest}
      style={[
        { fontFamily: 'SpaceMono-Bold', color: '#fff', fontSize: 16 },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export { MyText, MyTextBold };
export default MyText;
