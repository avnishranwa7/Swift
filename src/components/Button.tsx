import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { DFont, Layout } from '../../common';

interface Props extends TouchableOpacityProps {
  textStyles?: TextStyle;
}
const Button = (props: Props) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      <Text
        style={[
          DFont({
            size: 'md',
            align: 'center',
            fontFamily: 'PoppinsSemiBold',
          }),
          props.textStyles,
        ]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: Layout.borderRadiusTiny,
    paddingTop: Layout.height * 0.015,
    paddingBottom: Layout.height * 0.01,
  },
});
