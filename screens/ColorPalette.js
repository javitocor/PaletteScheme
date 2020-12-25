import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';
import COLORS from '../helpers/helpers';

const ColorPalette = () => {
  return (
    <FlatList
      style={styles.container}
      data={COLORS}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
      )}
      ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ColorPalette;
