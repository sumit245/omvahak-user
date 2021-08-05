import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../DrawerScreens/HomeScreen';
import SettingsScreen from '../DrawerScreens/SettingsScreen';
import LoadInquiry from '../LoadInquiry';
import MyOrders from '../MyOrders';

const Tab = createMaterialBottomTabNavigator();

export default function MyBottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Load Inquiry"
        component={LoadInquiry}
        options={{
          tabBarLabel: 'Load Inquiry',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="My Orders"
        component={MyOrders}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
