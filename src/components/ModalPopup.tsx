/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Modal, StyleSheet, View} from 'react-native';

export const ModalPopup = ({visible, children}: any) => {
  const [showModal, setShowModal] = useState(visible);
  let scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => {
        setShowModal(false);
      }, 200);

      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
    console.log(scaleValue);
  };

  return (
    <Modal transparent visible={showModal}>
      <View style={[style.modalBackground]}>
        <Animated.View
          style={[style.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
});
