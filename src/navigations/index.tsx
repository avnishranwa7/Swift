import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from 'screens/Auth';

import TabNavigator from './TabNavigator';
import { useAppSelector } from '../../hooks/store';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  const isLoggedIn = useAppSelector(state => state.auth.logged_in);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen
              name="Auth"
              children={Auth}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="Tabs"
              children={TabNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
