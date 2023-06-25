import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/colors';
import IconStar from '../assets/icons/star.svg';

const RatingStar = ({rating, fontSize = 12, starSize = 14}: any) => {
  return (
    <View style={[styles.rating]}>
      <IconStar
        style={{marginRight: 4}}
        height={starSize}
        width={starSize}
        fill={COLORS.white}
      />
      <Text style={{color: COLORS.light, fontSize, fontWeight: '700'}}>
        {rating}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 15,
  },
});

export default RatingStar;
