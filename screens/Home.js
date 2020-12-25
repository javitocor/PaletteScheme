import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
//import Touchable from '../components/Touchable';
import PalettePreview from '../components/PalettePreview';
import { COLORS, RAINBOW, FRONTEND_MASTERS } from '../helpers/helpers';

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: COLORS },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
  { paletteName: 'Rainbow', colors: RAINBOW },
];

const Home = ({ navigation }) => {
  return (
    <View>
      {/*<Touchable name="Solarized" palette={COLORS} navigation={navigation} />
      <Touchable name="Rainbow" palette={RAINBOW} navigation={navigation} />
      <Touchable
        name="Frontend Masters"
        palette={FRONTEND_MASTERS}
        navigation={navigation}
  />*/}
      <FlatList
        style={styles.list}
        data={COLOR_PALETTES}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            onPress={() => navigation.navigate('ColorPalette', item)}
            palette={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
