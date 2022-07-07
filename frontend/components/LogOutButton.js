
import { Text, View, StyleSheet } from 'react-native';
import { AuthContext } from '../store/auth-context';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

const LogOutButton = () => {
  //create context
  const ctx = useContext(AuthContext);

  //creat navigation
  const navigation = useNavigation();

  //log out function
  function LogOutHandler() {
    ctx.logout();
    navigation.navigate('LogIn');
  }

  return <Text onPress={LogOutHandler}>Sign Out</Text>;
}

export default LogOutButton;