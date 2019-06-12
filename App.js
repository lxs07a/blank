import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from './src/navigation';
import { globalStyles } from './src/styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}

App.propTypes = {};

export default App;