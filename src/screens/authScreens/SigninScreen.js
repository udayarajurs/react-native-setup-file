import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function SigninScreen({title, navigation}) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DrawerNavigator');
        }}>
        <Text>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({});
