import { StyleSheet } from 'react-native';

import { ColorCodes, Layout } from '../../../common';
import { getResponsiveFontSize } from '../../../common/DFont';

const styles = StyleSheet.create({
  container: {
    paddingTop: Layout.height * 0.2,
  },
  input: {
    borderWidth: 1,
    borderRadius: Layout.borderRadiusTiny,
    paddingLeft: Layout.width * 0.03,
    fontSize: getResponsiveFontSize(16),
  },
  button: {
    backgroundColor: ColorCodes.swift,
    marginTop: Layout.height * 0.02,
  },
  buttonText: {
    color: ColorCodes.white,
  },
  divider: {
    marginVertical: Layout.height * 0.02,
  },
});

export default styles;
