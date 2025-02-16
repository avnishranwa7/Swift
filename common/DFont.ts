import { Dimensions, Platform, StyleSheet, TextStyle } from 'react-native';

import { ColorCodes } from '.';

export const getResponsiveFontSize = (baseFontSize: number) => {
  const { width, height } = Dimensions.get('window');
  const smallestDimension = Math.min(width, height);

  // Define breakpoints for different device types (phones and tablets)
  const isTablet =
    Platform.OS === 'android'
      ? smallestDimension >= 600
      : smallestDimension >= 720;

  // Adjust font size based on device type
  const scaleFactor = isTablet ? 1.5 : 1;

  return Math.round(baseFontSize * scaleFactor);
};

export type fontSizeTypes =
  | 'tiny'
  | 'small'
  | 'regular'
  | 'md'
  | 'medium'
  | 'semi'
  | 'large'
  | 'xl'
  | 'xxl';
const fontSizes = {
  tiny: getResponsiveFontSize(10),
  small: getResponsiveFontSize(12),
  regular: getResponsiveFontSize(14),
  md: getResponsiveFontSize(16),
  medium: getResponsiveFontSize(18),
  semi: getResponsiveFontSize(20),
  large: getResponsiveFontSize(24),
  xl: getResponsiveFontSize(30),
  xxl: getResponsiveFontSize(36),
};

export interface FontOptions {
  size?: fontSizeTypes;
  color?: string;
  weight?: TextStyle['fontWeight'];
  align?: TextStyle['textAlign'];
  fontStyle?: TextStyle['fontStyle'];
  textDecorationStyle?: TextStyle['textDecorationStyle'];
  textDecorationColor?: TextStyle['textDecorationColor'];
  textDecorationLine?: TextStyle['textDecorationLine'];
  fontFamily?: TextStyle['fontFamily'];
}

export default function (font?: FontOptions) {
  console.log(font);
  return StyleSheet.create({
    font: {
      fontSize: font?.size ? fontSizes?.[font?.size] : fontSizes.regular,
      color: font?.color ?? ColorCodes.black,
      letterSpacing: 0.2,
      fontWeight: font?.weight ?? '400',
      textAlign: font?.align ?? 'left',
      fontStyle: font?.fontStyle ?? 'normal',
      textDecorationStyle: font?.textDecorationStyle ?? undefined,
      textDecorationColor: font?.textDecorationColor ?? undefined,
      textDecorationLine: font?.textDecorationLine ?? undefined,
      fontFamily: font?.fontFamily ?? undefined,
    },
  }).font;
}
