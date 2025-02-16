import { FC } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

import { ColorCodes, Layout } from '../../common';

interface Props {
  text?: string;
  style?: ViewStyle;
}

const TextDivider: FC<Props> = ({ text, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.divider} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.divider} />
    </View>
  );
};

export default TextDivider;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    height: Layout.height * 0.001,
    backgroundColor: ColorCodes.grey[400],
  },
  text: {
    marginHorizontal: Layout.width * 0.03,
  },
});
