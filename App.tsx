import { StyleSheet } from 'react-native';
import AuthContextProvider from './frontend/store/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './frontend/navigation/navigation';
import SignUpContextProvider from './frontend/store/SignUpContext';

//Needed for some reason to have things work 
import { decode, encode } from 'base-64';
//Needed for some reason to have things work 
declare var global: any;
//Needed for some reason to have things work 
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
