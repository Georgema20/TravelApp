import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInPage from './frontend/pages/LogInPage';
import SignUpPage from './frontend/pages/SignUpPage';
import AuthContextProvider from './frontend/store/auth-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './frontend/navigation/navigation';
import CenteredContainer from './frontend/components/CenteredContainer';


export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
          <Navigation />
      </NavigationContainer>
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
