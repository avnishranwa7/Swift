import { faCar, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home/index';
import Trips from '@screens/Trips/index';

const Tab = createBottomTabNavigator();

function getIcon(screen: string) {
  if (screen === 'Home') {
    return <FontAwesomeIcon icon={faHome} />;
  }
  return <FontAwesomeIcon icon={faCar} />;
}

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => getIcon('Home') }}
      />
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{ tabBarIcon: () => getIcon('Trips') }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
