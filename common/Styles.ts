import { StyleSheet } from 'react-native';

import ColorCodes from './ColorCodes';
import Layout from './Layout';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: Layout.width * 0.04,
    paddingVertical: Layout.height * 0.01,
    backgroundColor: ColorCodes.white,
  },
});

export default styles;
