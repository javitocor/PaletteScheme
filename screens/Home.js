import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  Text,
} from 'react-native';
//import Touchable from '../components/Touchable';
import PalettePreview from '../components/PalettePreview';
import { COLORS, RAINBOW, FRONTEND_MASTERS } from '../helpers/helpers';

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: COLORS },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
  { paletteName: 'Rainbow', colors: RAINBOW },
];

const url = 'https://color-palette-api.kadikraman.now.sh/palettes';

const Home = ({ navigation, route }) => {
  const newPalette = route.params ? route.params.newPalette : null;
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleFetchPalettes = useCallback(async () => {
    const result = await fetch(url);
    if (result.ok) {
      const colours = await result.json();
      setPalettes(colours);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    handleFetchPalettes();
  }, []);

  useEffect(() => {
    if (newPalette) {
      setPalettes((current) => [newPalette, ...current]);
    }
  }, [newPalette]);

  return (
    //<View>
    {
      /*<Touchable name="Solarized" palette={COLORS} navigation={navigation} />
      <Touchable name="Rainbow" palette={RAINBOW} navigation={navigation} />
      <Touchable
        name="Frontend Masters"
        palette={FRONTEND_MASTERS}
        navigation={navigation}
  />*/
    },
    (
      <FlatList
        style={styles.list}
        //data={COLOR_PALETTES}
        data={palettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            onPress={() => navigation.navigate('ColorPalette', item)}
            palette={item}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        ListHeaderComponent={
          <TouchableOpacity
            style={styles.zone}
            onPress={() => {
              navigation.navigate('AddNewPalette');
            }}
          >
            <Text style={styles.text}>Add a color scheme</Text>
          </TouchableOpacity>
        }
      />
    )
    //</View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  text: {
    fontWeight: 'bold',
    color: 'teal',
    fontSize: 25,
  },
  zone: {
    paddingVertical: 10,
  },
});

export default Home;
