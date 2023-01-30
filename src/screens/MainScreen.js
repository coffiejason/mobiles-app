import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './Dashboard';
import SettingsScreen from './SettingsScreen';
import ProfilesScreen from './ProfileScreen';
import DetailsScreen from './DetailsScreen';
import LoginScreen from './LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';

//Screen names
const homeName = "Home";
const profileName = "Profile";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Profle Screen" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Settings Screen" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

function MainScreen() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          "tabBarActiveTintColor": "black",
          "tabBarInactiveTintColor": "grey",
          "tabBarLabelStyle": {
            "paddingBottom": 10,
            "fontSize": 10
          },
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]
        })}
      >
        <Tab.Screen name={homeName} component={HomeNavigator} />
        <Tab.Screen name={profileName} component={ProfileNavigator} />
        <Tab.Screen name={settingsName} component={SettingsNavigator} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainScreen;