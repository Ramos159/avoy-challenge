import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RestaurantSelectScreen } from './Screens/RestaurantSelectScreen';
import { RestaurantDetailScreen } from './Screens/RestaurantDetailScreen'
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="RestaurantSelect">
          <Stack.Screen
          name="Restaurants" 
          component={RestaurantSelectScreen}
          options={{
            headerShown: false
          }}
          />
          <Stack.Screen
            name="RestaurantDetail" 
            component={RestaurantDetailScreen}
            options={{
            headerShown: false
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
