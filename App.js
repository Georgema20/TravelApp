import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInPage from './frontend/pages/LogInPage';
import SignUpPage from './frontend/pages/SignUpPage';

export default function App() {
  return (
    <View style={styles.container}>
     <LogInPage />
     <SignUpPage/>
    </View>
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
