import { Dimensions } from 'react-native';

const Layout = {
  height: Math.round(Dimensions.get('window').height),
  width: Math.round(Dimensions.get('window').width),
  borderRadiusLarge: 40,
  borderRadiusMedium: 15,
  borderRadiusSmall: 10,
  borderRadiusTiny: 5,
};

export default Layout;
