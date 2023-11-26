import {RouteProp} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface IHomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, Routes.Home>;
  route: RouteProp<RootStackParamList>;
}
