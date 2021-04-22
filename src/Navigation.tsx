import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons  } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import HomeScreen from './screens/Home';
import ExploreScreen from './screens/Explore';
import FindScreen from './screens/Find';
import CheckinScreen from './screens/Checkin';


const Navigation: React.FC = () => (
  <Tab.Navigator initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: "#000",
      inactiveTintColor: "#333",
      safeAreaInsets: {
        bottom: 10,
        top: 10
      }
    }}
  >
    <Tab.Screen 
      component={HomeScreen} 
      name="Home" 
      options={{
        tabBarLabel: 'Inicio',
        tabBarIcon: ({ color, size, focused }) => 
        <Ionicons name={focused ? "home-sharp" : "ios-home-outline"} size={size} color={color}/>
      }} 
    />

    <Tab.Screen 
      component={ExploreScreen} 
      name="Explore" 
      options={{
        tabBarLabel: 'Explorar',
        tabBarIcon: ({ color, size, focused }) => 
        <Ionicons name={focused ? "compass" : "compass-outline"} size={size} color={color} />,
      }}
    />

    <Tab.Screen
      component={FindScreen}
      name="Find"
      options={{
        tabBarLabel: 'Buscar',
        tabBarIcon: ({ color, size, focused }) => 
          <Ionicons name="search" size={focused ? size + 1 : size} color={color} />,

      }}
      />

    <Tab.Screen
      component={CheckinScreen}
      name="CheckIn"
      options={{
        tabBarLabel: 'Check-in',
        tabBarIcon: ({ color, size, focused }) => 
        <Ionicons name={focused ? "location" : "location-outline"} size={size} color={color}/>
      }}
    />

  </Tab.Navigator>
);

export default Navigation;