import React, {
  ImageBackground,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../constants/colors';
import {useState} from 'react';

const {width, height} = Dimensions.get('window');

const Slide = ({item}: any) => {
  return (
    <View style={{justifyContent: 'flex-end', width, alignItems: 'center'}}>
      <Text style={[styles.title]}>{item.title}</Text>
      <Text style={[styles.description]}>{item.description}</Text>
    </View>
  );
};

const OnboardScreen = ({navigation}: any) => {
  const slides = [
    {
      title: 'Good Coffee',
      description: 'The best grain, the finest roast, the most powerful flavor',
    },
    {
      title: 'Good friends',
      description: 'The best grain, the finest roast, the most powerful flavor',
    },
    {
      title: 'Lets blend it',
      description: 'The best grain, the finest roast, the most powerful flavor',
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.2,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 10,
          }}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && {
                  backgroundColor: COLORS.primary,
                  width: 27,
                  height: 5,
                },
              ]}
            />
          ))}
        </View>

        <View
          style={{
            marginBottom: 20,
            height: 65,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={[styles.btn]} onPress={getStarted}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const getStarted = () => {
    navigation.replace('homeScreen');
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/onboard.jpg')}
        style={{flex: 1, justifyContent: 'center'}}>
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.backDrop}}>
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor={'transparent'}
          />
          <View style={{flex: 1}}>
            <FlatList
              data={slides}
              renderItem={({item}) => <Slide item={item} />}
              horizontal
              pagingEnabled
              contentContainerStyle={{height: height * 0.7}}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={updateCurrentSlideIndex}
            />
            <Footer />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.light,
    fontWeight: 'bold',
    fontSize: 30,
  },
  description: {
    color: COLORS.white,
    marginVertical: 20,
    maxWidth: '60%',
    textAlign: 'center',
  },
  indicator: {
    width: 5,
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },
  btn: {
    flex: 1,
    width: width * 0.7,
    backgroundColor: COLORS.primary,
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardScreen;
