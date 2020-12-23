import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View>
      <StatusBar />
      <View style={styles.container}>
        <Text>Hello Bonica!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'teal',
  },
});

export default App;
