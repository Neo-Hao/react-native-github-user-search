import Ionicons from '@expo/vector-icons/Ionicons';
import { useCustomTheme } from 'hooks/useCustomTheme';

const Icon = ({ name, size, color, ...rest }) => {
  const { colors } = useCustomTheme();

  return (
    <Ionicons
      name={name}
      size={size}
      {...rest}
      color={color ? color : colors.text}
    />
  );
};

export default Icon;
export { Icon };