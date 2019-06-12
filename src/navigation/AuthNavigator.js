import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/Auth/Login';
import RegisterScreen from '../screens/Auth/Register';
import screens from './screens';

const routes = {
  [screens.Login]: LoginScreen,
  [screens.Register]: RegisterScreen,
};

export default createStackNavigator(routes, {

});

