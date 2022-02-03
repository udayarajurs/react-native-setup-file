import React, {useState, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Button, SocialIcon} from 'react-native-elements';

import Swiper from 'react-native-swiper';

export default function SigninWelcomeScreen({title, navigation}) {
  return (
    <Button
      title="Create an account"
      onPress={() => {
        navigation.navigate('SignInScreen');
      }}
    />
  );
}

const Styles = StyleSheet.create({});
