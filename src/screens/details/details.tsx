import React from 'react';
import {IDetailsScreenProps} from './details.props';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './details.styles';
import {Text, TouchableOpacity} from 'react-native';
import {Routes} from '../../navigation';

export default ({navigation}: IDetailsScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.Home);
        }}
        activeOpacity={0.7}>
        <Text>this is a button</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
