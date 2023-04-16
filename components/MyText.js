import { Text } from 'react-native';

const MyText = (props) => {
  return (
    <Text
      {...props}
      style={[{ fontFamily: 'SpaceMono-Regular', color: '#fff' }, props.style]}
    >
      {props.children}
    </Text>
  );
};

const MyTextBold = (props) => {
  return (
    <Text
      {...props}
      style={[{ fontFamily: 'SpaceMono-Bold', color: '#fff' }, props.style]}
    >
      {props.children}
    </Text>
  );
};

export { MyText, MyTextBold };
export default MyText;
