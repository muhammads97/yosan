import React from 'react';
import {IHomeScreenProps} from './home.props';
import {SafeAreaView} from 'react-native-safe-area-context';
import homeStyles from './home.styles';
import {Text, TouchableOpacity} from 'react-native';
import {Routes} from '../../navigation';

export default ({navigation}: IHomeScreenProps) => {
  return (
    <SafeAreaView style={homeStyles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.Details);
        }}
        activeOpacity={0.7}>
        <Text>this is a button</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
