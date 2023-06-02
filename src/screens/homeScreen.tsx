/* eslint-disable react-native/no-inline-styles */
import React, {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../constants/colors';
import {ModalPopup} from '../components/ModalPopup';
import {useState} from 'react';

const HomeScreen = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ModalPopup visible={visible}>
            <View style={{alignItems: 'center'}}>
              <View style={style.modalHeader}>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Image
                    source={require('../assets/x.png')}
                    style={{height: 30, width: 30}}
                  />
                </TouchableOpacity>
              </View>
              <Image
                source={require('../assets/success.png')}
                style={{height: 150, width: 150}}
              />
              <Text style={{marginVertical: 30, fontSize: 20}}>Success</Text>
            </View>
          </ModalPopup>
          <Button
            title="Open Modal"
            onPress={() => setVisible(true)}
            color={COLORS.primary}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  modalHeader: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default HomeScreen;
