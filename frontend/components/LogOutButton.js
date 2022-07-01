
import { Text, View, StyleSheet } from 'react-native';
import { AuthContext } from '../store/auth-context';
import { useContext } from 'react';

const LogOutButton = () => {
  //create context
  const ctx = useContext(AuthContext);

  //log out function
  function LogOutHandler() {
    ctx.logout();
  }

  return <Text onPress={LogOutHandler}>Sign Out</Text>;
}

export default LogOutButton;