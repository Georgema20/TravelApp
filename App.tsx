//test
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthContextProvider from './frontend/store/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './frontend/navigation/navigation';
import SignUpContextProvider from './frontend/store/SignUpContext';

import { decode, encode } from 'base-64';

declare var global: any;

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
} 


export default function App() {
  
  return (
    <AuthContextProvider>
      <SignUpContextProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </SignUpContextProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
