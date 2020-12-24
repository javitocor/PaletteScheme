import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={[styles.title, styles.white]}>
        <Text style={styles.titletext}>
          Here are some boxes of different colours!
        </Text>
      </View>
      <ColorBox colorName="Cyan" hexCode="#2aa198" />
      <ColorBox colorName="Blue" hexCode="#268bd2" />
      <ColorBox colorName="Magenta" hexCode="#d33682" />
      <ColorBox colorName="Orange" hexCode="#cb4b16" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 35,
  },
  title: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  titletext: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  white: { backgroundColor: 'white' },
});

export default App;
