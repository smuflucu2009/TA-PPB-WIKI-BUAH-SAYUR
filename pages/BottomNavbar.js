import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import About from './About';
import Buah from './Buah';
import Sayur from './Sayur';

const BottomTab = createBottomTabNavigator();

const BottomNavbar = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Buah" component={Buah} 
      options={{ 
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="apple" color={color} size={size} />
        ),
      }} />
      <BottomTab.Screen name="About" component={About} 
      options={{ 
        headerShown: false, 
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
            ), 
      }} />
      <BottomTab.Screen name="Sayur" component={Sayur} 
      options={{ 
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="carrot" color={color} size={size} />
        ),
      }} />
    </BottomTab.Navigator>
  );
};

export default BottomNavbar;
