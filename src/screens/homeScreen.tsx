import React, {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
  Text,
} from 'react-native';
import {COLORS} from '../constants/colors';

import IconLocation from '../assets/icons/location.svg';
import IconNotification from '../assets/icons/notification.svg';

const HomeScreen = () => {
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
          paddingHorizontal: 20,
          paddingTop: 20,
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
          <Text style={{fontWeight: 'bold'}}>Bintara, Bekasi</Text>
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
    </SafeAreaView>
  );
};

export default HomeScreen;
