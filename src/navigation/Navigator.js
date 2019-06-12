import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import ProfileScreen from '../screens/Profile';
import screens from './screens';

const routes = {
  [screens.Auth]: AuthNavigator,
  [screens.Profile]: ProfileScreen,
};

export default createSwitchNavigator(routes, {});
