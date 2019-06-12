import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationService } from '../../../services';
import s from './styles';

function LoginScreen() {
  return (
    <View style={s.container}>
      <Text>Login Screen</Text>
      <Button title="Go to registration" 
        onPress={() => NavigationService.navigateToRegister()}
      />
    </View>
  );
}

LoginScreen.navigationOptions = () => ({
  title: 'Login',
});

LoginScreen.propTypes = {};

export default LoginScreen;