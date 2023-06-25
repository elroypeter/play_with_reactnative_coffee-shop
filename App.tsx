import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardScreen from './src/screens/OnboardScreen';
import HomeScreen from './src/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from './src/constants/colors';

import IconHome from './src/assets/icons/home.svg';
import IconHeart from './src/assets/icons/heart.svg';
import IconCart from './src/assets/icons/cart.svg';
import IconProfile from './src/assets/icons/person.svg';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabIcons: any = {
  HomeTab: {name: 'Home', icon: (props: any) => <IconHome {...props} />},
  FavouriteTab: {
    name: 'Favourite',
    icon: (props: any) => <IconHeart {...props} />,
  },
  CartTab: {name: 'Cart', icon: (props: any) => <IconCart {...props} />},
  ProfileTab: {
    name: 'Profile',
    icon: (props: any) => <IconProfile {...props} />,
  },
};

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunch] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    const getAppData = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');

      if (appData === null) {
        setIsAppFirstLaunch(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunch(false);
      }
    };

    getAppData();
  }, []);

  return (
    isAppFirstLaunched !== null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isAppFirstLaunched && (
            <Stack.Screen component={OnboardScreen} name="onboardScreen" />
          )}
          <Stack.Screen component={TabNavigation} name="homeScreen" />
          <Stack.Screen component={DetailsScreen} name="DetailsScreen" />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="FavouriteTab" component={HomeScreen} />
      <Tab.Screen name="CartTab" component={HomeScreen} />
      <Tab.Screen name="ProfileTab" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const TabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={{...style.tabBar}}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              borderTopWidth: 4,
              borderTopColor: isFocused ? COLORS.primary : 'transparent',
            }}>
            <View
              style={{
                alignItems: 'center',
                marginTop: 'auto',
              }}>
              <View style={{marginBottom: 5}}>
                {TabIcons[route.name].icon({
                  fill: isFocused ? COLORS.primary : COLORS.faded,
                })}
              </View>
              <Text
                style={{
                  color: isFocused ? COLORS.primary : COLORS.faded,
                  fontWeight: 'bold',
                }}>
                {TabIcons[route.name].name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  tabBar: {
    height: Platform.OS === 'ios' ? 95 : 75,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingBottom: Platform.OS === 'ios' ? 25 : 5,
  },
});

export default App;
