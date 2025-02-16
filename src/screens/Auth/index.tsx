import { Text, TextInput, View } from 'react-native';

import styles from './styles';
import { ColorCodes, DFont, Styles } from '../../../common';
import { Button, TextDivider } from '../../components';

const Auth = () => {
  return (
    <View style={[Styles.page, styles.container]}>
      <Text
        style={DFont({
          color: ColorCodes.swift,
          size: 'xxl',
          fontFamily: 'PoppinsExtraBold',
          align: 'center',
        })}>
        Swift
      </Text>
      <Text style={DFont({ size: 'md', fontFamily: 'PoppinsRegular' })}>
        Enter your mobile number
      </Text>
      <TextInput
        placeholder="Mobile Number"
        style={styles.input}
        keyboardType="number-pad"
      />
      <Button style={styles.button} textStyles={styles.buttonText}>
        Continue
      </Button>
      <TextDivider text="OR" style={styles.divider} />
    </View>
  );
};
export default Auth;
