import { Text, TextInput, View, StyleSheet} from 'react-native';
import { useState } from 'react/cjs/react.development';


const LogInPage = () => {

  const [logInState, setLogInState] = useState({username:null, 
  password: null})

  const logInHandler = () => {
    console.log(logInState);
    setLogInState({username:null, 
    password:null})
  }

  return (
    <View style={styles.container}>
      <Text>Log In Page</Text>
      <TextInput
        placeholder="Username"
        value={logInState.username}
        onChangeText={(user) => {
          setLogInState({ ...logInState, username: user });
        }}
      />
      <TextInput
        placeholder="Password"
        value={logInState.password}
        onChangeText={(passwd) => {
          setLogInState({ ...logInState, password: passwd });
        }}
      />
      <View>
        <Text onPress={logInHandler}>Button</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
   margin:20, 
  },
});

export default LogInPage;
