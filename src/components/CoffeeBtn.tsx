import React from 'react';
import {Text, View} from 'react-native';
import {COLORS} from '../constants/colors';
import {generateBoxShadow} from '../utils/boxShadow';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CoffeeBtn = ({children, isActive, extraStyle}: any) => {
  return (
    <View
      style={{
        backgroundColor: isActive ? COLORS.primary : COLORS.white,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        borderRadius: 20,
        ...generateBoxShadow(2, 1, 10, 'rgba(0,0,0,0.35)', 2, 0.5),
        ...extraStyle,
      }}>
      {children}
    </View>
  );
};

export default CoffeeBtn;
