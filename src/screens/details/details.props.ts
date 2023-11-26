import {RouteProp} from '@react-navigation/native';
import {RootStackParamList, Routes} from '../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface IDetailsScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, Routes.Details>;
  route: RouteProp<RootStackParamList>;
}
