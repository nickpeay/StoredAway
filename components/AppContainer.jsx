import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import AddContainer from './screens/AddContainer';
import Home from './screens/Home';
import Scan from './screens/Scan';
import Search from './screens/Search';

const Tab = createBottomTabNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarBackground: () => {
            <View style={styles.tabBar} />;
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'list-outline';
            } else if (route.name === 'Add') {
              iconName = 'add-circle-outline';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Scan') {
              iconName = 'camera';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#37423D',
          tabBarInactiveTintColor: '#778F84',
        })}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Add' component={AddContainer} />
        <Tab.Screen name='Search' component={Search} />
        <Tab.Screen name='Scan' component={Scan} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EFE9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    backgroundColor: '#F2EFE9',
  },
});
