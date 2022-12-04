import { StyleSheet } from 'react-native';
import AuthContextProvider from './frontend/store/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './frontend/navigation/navigation';
import SignUpContextProvider from './frontend/store/SignUpContext';

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
