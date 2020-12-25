import React from 'react';
import { View } from 'react-native';
import Touchable from '../components/Touchable';
import { COLORS, RAINBOW, FRONTEND_MASTERS } from '../helpers/helpers';

const Home = ({ navigation }) => {
  return (
    <View>
      <Touchable name="Solarized" palette={COLORS} navigation={navigation} />
      <Touchable name="Rainbow" palette={RAINBOW} navigation={navigation} />
      <Touchable
        name="Frontend Masters"
        palette={FRONTEND_MASTERS}
        navigation={navigation}
      />
    </View>
  );
};

export default Home;
