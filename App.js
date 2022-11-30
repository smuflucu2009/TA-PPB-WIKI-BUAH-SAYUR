import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from './pages/About';
import BottomNavbar from './pages/BottomNavbar';
import Sayur from './pages/Sayur';
import SayurDetail from './pages/SayurDetail';
import BuahDetail from './pages/BuahDetail';
import Buah from './pages/Buah';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Wiki Buah - Sayur" component={BottomNavbar} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Buah" component={Buah} />
        <Stack.Screen name="Sayur" component={Sayur} />
        <Stack.Screen name="BuahDetail" component={BuahDetail} />
        <Stack.Screen name="SayurDetail" component={SayurDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}