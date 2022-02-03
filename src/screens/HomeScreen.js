import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import HomeHeader from '../components/HomeHeader';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <HomeHeader navigation={navigation} />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
