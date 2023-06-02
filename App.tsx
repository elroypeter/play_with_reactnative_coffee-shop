import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardScreen from './src/screens/OnboardScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

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
          <Stack.Screen component={HomeScreen} name="homeScreen" />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
