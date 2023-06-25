import React, {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {COLORS} from '../constants/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import IconLocation from '../assets/icons/location.svg';
import IconNotification from '../assets/icons/notification.svg';
import IconSearch from '../assets/icons/search.svg';
import IconTune from '../assets/icons/tune.svg';
import IconPlus from '../assets/icons/plus.svg';
import IconStar from '../assets/icons/star.svg';
import IconFire from '../assets/icons/fire.svg';

import {categories} from '../constants/categories';
import {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {coffees} from '../constants/coffees';
import {generateBoxShadow} from '../utils/boxShadow';
import RatingStar from '../components/RatingStar';

const HomeScreen = ({navigation}: any) => {
  const [currentCategory, setCurrentCategory] = useState(0);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor={COLORS.primary}
      />

      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 20,
        }}>
        <View
          style={{
            height: 60,
            width: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 60, width: 60}}
            source={require('../assets/images/profile.png')}
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconLocation height={28} width={28} />
          <Text style={{fontWeight: 'bold', color: Colors.dark}}>
            Bintara, Bekasi
          </Text>
        </View>

        <View>
          <View
            style={{
              position: 'absolute',
              height: 8,
              width: 8,
              borderRadius: 4,
              backgroundColor: COLORS.accentDanger,
              borderWidth: 1,
              borderColor: COLORS.white,
              right: 3,
              top: 4,
              zIndex: 1,
            }}
          />
          <IconNotification height={30} width={30} />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 20}}>
        <View style={{marginHorizontal: 20}}>
          <Text style={{fontSize: 22, fontWeight: '600', color: Colors.dark}}>
            Good morning, Dityo
          </Text>
        </View>

        {/* search */}
        <View style={{...styles.searchBar}}>
          <IconSearch stroke={COLORS.mashGrey} />
          <TextInput
            style={{marginLeft: 4, marginRight: 50}}
            placeholder="Search Coffee.."
          />
          <IconTune style={{marginLeft: 'auto'}} stroke={COLORS.primary} />
        </View>

        {/* categories */}
        <View style={{marginHorizontal: 20}}>
          <Text style={{fontSize: 22, fontWeight: '600', color: Colors.dark}}>
            Categories
          </Text>
          <ScrollView
            horizontal
            style={{marginTop: 30}}
            contentContainerStyle={{gap: 20}}
            showsHorizontalScrollIndicator={false}>
            {categories.map((item, index) => (
              <Category
                key={index}
                item={item}
                index={index}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
              />
            ))}
          </ScrollView>
        </View>

        {/* coffees */}
        <View>
          <FlatList
            horizontal
            data={coffees}
            renderItem={({item, index}) => (
              <CoffeeCard
                key={index}
                item={item}
                index={index}
                navigation={navigation}
              />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 15, padding: 20}}
          />
        </View>

        {/* specail offer */}
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 22, fontWeight: '600', color: Colors.dark}}>
              Special Offer
            </Text>
            <IconFire height={24} width={24} style={{marginLeft: 8}} />
          </View>

          <View style={[styles.specialCard, styles.cardShadow, styles.card]}>
            <Image
              style={{height: 139, width: 169, borderRadius: 15}}
              source={require('../assets/images/special.png')}
            />
            <View style={{marginLeft: 15, flex: 1}}>
              <View
                style={{
                  height: 25,
                  width: 75,
                  backgroundColor: COLORS.primary,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  marginBottom: 20,
                }}>
                <Text style={{color: COLORS.white}}>Limited</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '800',
                  color: Colors.dark,
                }}>
                Buy 1 get 1 free if you buy with Gopay
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Category = ({item, currentCategory, setCurrentCategory, index}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setCurrentCategory(index)}>
      <View
        style={[
          styles.category,
          currentCategory === index && styles.categoryActive,
        ]}>
        {item.icon({
          fill: currentCategory === index ? COLORS.white : Colors.dark,
          height: 18,
          width: 18,
        })}
        <Text
          style={{
            marginLeft: 5,
            fontWeight: 'bold',
            color: currentCategory === index ? COLORS.white : Colors.dark,
          }}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const CoffeeCard = ({item, navigation}: any) => {
  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor={COLORS.white}
      onPress={() => navigation.navigate('DetailsScreen', item)}>
      <View style={[styles.card, styles.cardShadow]}>
        <View>
          <View style={{position: 'absolute', right: 5, top: 5, zIndex: 1}}>
            <RatingStar rating={item.rating} />
          </View>

          <Image
            style={{height: 129, width: 159, borderRadius: 15}}
            source={item.image}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View>
            <Text style={{color: Colors.dark, fontSize: 20, fontWeight: '400'}}>
              {item.name}
            </Text>
            <Text style={{color: Colors.dark, fontSize: 10}}>{item.with}</Text>
            <Text style={{color: Colors.dark, fontSize: 16, fontWeight: '700'}}>
              {item.price} k
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
              height: 40,
              width: 40,
              backgroundColor: COLORS.primary,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IconPlus height={20} width={20} stroke={COLORS.light} />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginVertical: 40,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.light,
    height: Platform.OS === 'ios' ? 50 : 50,
    borderRadius: 50,
    paddingHorizontal: 20,
    borderColor: COLORS.faded,
    borderWidth: 1,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  categoryActive: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 15,
  },
  cardShadow: {
    ...generateBoxShadow(2, 1, 10, 'rgba(0,0,0,0.25)', 7, 0.4),
  },
  specialCard: {
    flexDirection: 'row',
  },
});

export default HomeScreen;
