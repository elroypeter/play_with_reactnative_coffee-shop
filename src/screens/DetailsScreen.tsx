import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  ScrollView,
} from 'react-native';
import {COLORS} from '../constants/colors';
import RatingStar from '../components/RatingStar';

import IconCoffee from '../assets/icons/coffee.svg';
import IconChocolate from '../assets/icons/chocolate-bar.svg';
import CoffeeBtn from '../components/CoffeeBtn';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const DetailsScreen = ({navigation, route}: any) => {
  const itemDetails: any = route.params;
  return (
    <View style={{flex: 1}}>
      <View style={[styles.headerBg]}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <ImageBackground
          source={itemDetails.image}
          style={{flex: 1, width: '100%'}}>
          <View style={[styles.headerTitle]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 28,
                    color: COLORS.white,
                    lineHeight: 32,
                    fontWeight: '700',
                    marginBottom: 5,
                  }}>
                  {itemDetails.name}
                </Text>
                <Text
                  style={{color: COLORS.white, lineHeight: 12, fontSize: 12}}>
                  {itemDetails.with}
                </Text>
              </View>
              <View>
                <RatingStar
                  rating={itemDetails.rating}
                  starSize={16}
                  fontSize={14}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={[styles.detailsCard]}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View
            style={{
              ...styles.flexCenter,
              backgroundColor: 'rgba(166, 166, 170, 0.21)',
              borderRadius: 30,
              padding: 20,
            }}>
            <View style={{...styles.flexCenter}}>
              <IconCoffee />
              <Text style={{color: Colors.dark}}>Coffee</Text>
            </View>
            <View style={[styles.spacer]} />
            <View style={{...styles.flexCenter}}>
              <IconChocolate />
              <Text style={{color: Colors.dark}}>Coffee</Text>
            </View>
            <View style={[styles.spacer]} />
            <View>
              <Text style={{color: Colors.dark}}>Medium Roasted</Text>
            </View>
          </View>

          <Text
            style={{
              fontSize: 24,
              fontWeight: '600',
              marginTop: 30,
              color: Colors.dark,
            }}>
            Coffee Size
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CoffeeBtn isActive={true}>
              <Text
                style={{
                  fontSize: 18,
                  color: true ? COLORS.white : Colors.dark,
                }}>
                Small
              </Text>
            </CoffeeBtn>
            <CoffeeBtn>
              <Text
                style={{
                  fontSize: 18,
                  color: false ? COLORS.white : Colors.dark,
                }}>
                Medium
              </Text>
            </CoffeeBtn>
            <CoffeeBtn>
              <Text
                style={{
                  fontSize: 18,
                  color: false ? COLORS.white : Colors.dark,
                }}>
                Large
              </Text>
            </CoffeeBtn>
          </View>

          <View style={{marginTop: 30}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                marginBottom: 10,
                color: Colors.dark,
              }}>
              About
            </Text>
            <Text style={{lineHeight: 20, color: Colors.dark}}>
              {itemDetails.about}
            </Text>
          </View>

          <View style={{marginVertical: 40}}>
            <CoffeeBtn
              isActive={true}
              extraStyle={{
                height: 65,
                paddingHorizontal: 50,
                borderRadius: 32.5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Text style={{fontSize: 20, color: COLORS.white}}>
                  Add to Cart
                </Text>
                <View
                  style={{
                    height: 25,
                    width: 1.5,
                    backgroundColor: COLORS.white,
                    marginLeft: 'auto',
                  }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: COLORS.white,
                    marginLeft: 30,
                  }}>
                  5000k
                </Text>
              </View>
            </CoffeeBtn>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBg: {
    height: '45%',
    width: '100%',
  },
  headerTitle: {
    height: 120,
    backgroundColor: 'rgba(0, 0, 0, 0.30)',
    marginTop: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  detailsCard: {
    top: -50,
    height: '65%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  flexCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacer: {
    height: '100%',
    width: 2,
    backgroundColor: Colors.dark,
    marginHorizontal: 19,
  },
});

export default DetailsScreen;
