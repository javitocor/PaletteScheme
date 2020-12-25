import React from 'react';
import { View, Text, StatusBar, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import COLORS from './helpers/helpers';
//import ColorBox from './components/ColorBox';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/*<View style={styles.container}>*/}
      {/*<StatusBar />
        <View style={[styles.title, styles.white]}>
        <Text style={styles.titletext}>
          Here are some boxes of different colours!
        </Text>
      </View>
      <ColorBox colorName="Cyan" hexCode="#2aa198" />
      <ColorBox colorName="Blue" hexCode="#268bd2" />
      <ColorBox colorName="Magenta" hexCode="#d33682" />
      <ColorBox colorName="Orange" hexCode="#cb4b16" />
        <FlatList
          style={[styles.list]}
          data={COLORS}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
          )}
          ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
        />*/}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </Stack.Navigator>
      {/*</View>*/}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 35,
  },
  //title: {
  // alignItems: 'flex-start',
  //justifyContent: 'flex-start',
  //marginBottom: 5,
  //},
  //titletext: {
  //fontSize: 16,
  //fontWeight: 'bold',
  //},
  //white: { backgroundColor: 'white' },
  //heading: {
  //fontSize: 18,
  //fontWeight: 'bold',
  // marginBottom: 10,
  //},
  //list: { backgroundColor: 'white' },
});

export default App;
