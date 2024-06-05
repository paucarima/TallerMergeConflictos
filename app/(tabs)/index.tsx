import { Image, StyleSheet, Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../screens/HomeScreen';
import { Contacts } from '../screens/ContactsScreen';
import { Product } from '../screens/Product';

const WellcomeNav = createNativeStackNavigator();
export default function HomeScreen() {
  return (
    <WellcomeNav.Navigator>
    <WellcomeNav.Screen  name='HomeNav' component={Home} />
    <WellcomeNav.Screen name='CallNumber' component={Contacts} />
    <WellcomeNav.Screen name='ProductNav' component={Product}/>
  </WellcomeNav.Navigator>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
