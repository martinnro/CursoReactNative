import React,{ Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs'
import Login from '../screens/Auth/Login'
import Home from '../screens/Home';
import { useSelector } from 'react-redux';
import { appSelector } from '../redux/appRedux';

const Stack = createStackNavigator();

export default AppStack = (props) => {
const isLogged = useSelector(appSelector.jwt)
return(
    <Stack.Navigator screenOptions = {{headerShown: false}} >
        {
            isLogged? (
                <Stack.Screen name="AppStack" component={Tabs} />
            ) : (
                <Stack.Screen name="LogIn" component={Login} />
            )
            }
    </Stack.Navigator>
    )
}
