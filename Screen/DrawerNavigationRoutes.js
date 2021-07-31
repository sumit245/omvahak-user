// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import MyOrders from "./MyOrders"
import RFQ from './RFQ';
import LoadInquiry from './LoadInquiry';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Home', //Set Header Title
                    headerLeft: () => (
                        <NavigationDrawerHeader navigationProps={navigation} />
                    ),
                    headerStyle: {
                        backgroundColor: '#307ecc', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
};

const profileScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="SettingsScreen"
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerHeader navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#307ecc', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                },
            }}>
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    title: 'Settings', //Set Header Title
                }}
            />
        </Stack.Navigator>
    );
};
const settingScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="SettingsScreen"
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerHeader navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#307ecc', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                },
            }}>
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    title: 'Settings', //Set Header Title
                }}
            />
        </Stack.Navigator>
    );
};
const orderScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="My Orders"
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerHeader navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#307ecc', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                },
            }}>
            <Stack.Screen
                name="My Order"
                component={MyOrders}
                options={{
                    title: 'My Orders', //Set Header Title
                }}
            />
        </Stack.Navigator>
    );
};
const rfqScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Request Quotation"
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerHeader navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#307ecc', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                },
            }}>
            <Stack.Screen
                name="Request Quotation"
                component={RFQ}
                options={{
                    title: 'Request Quotation', //Set Header Title
                }}
            />
        </Stack.Navigator>
    );
};
const loadinquiryScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Load Inquiry"
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerHeader navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#307ecc', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                },
            }}>
            <Stack.Screen
                name="Load Inquiry"
                component={LoadInquiry}
                options={{
                    title: 'Load Inquiry', //Set Header Title
                }}
            />
        </Stack.Navigator>
    );
};
const DrawerNavigatorRoutes = (props) => {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#cee1f2',
                color: '#cee1f2',
                itemStyle: { marginVertical: 5, color: 'white' },
                labelStyle: {
                    color: '#d8d8d8',
                },
            }}
            screenOptions={{ headerShown: false }}
            drawerContent={CustomSidebarMenu}>
            <Drawer.Screen
                name="homeScreenStack"
                options={{ drawerLabel: 'Home' }}
                component={homeScreenStack}
            />
            <Drawer.Screen
                name="loadInquiryStack"
                options={{ drawerLabel: 'Load Inquiry' }}
                component={loadinquiryScreenStack}
            />
            <Drawer.Screen
                name="Request Quotation"
                options={{ drawerLabel: 'Request for Quotation' }}
                component={rfqScreenStack}
            />
            <Drawer.Screen
                name="My Orders"
                options={{ drawerLabel: 'My Orders' }}
                component={orderScreenStack}
            />
            <Drawer.Screen
                name="profileScreenStack"
                options={{ drawerLabel: 'My Profile' }}
                component={profileScreenStack}
            />
            <Drawer.Screen
                name="settingScreenStack"
                options={{ drawerLabel: 'Setting' }}
                component={settingScreenStack}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigatorRoutes;