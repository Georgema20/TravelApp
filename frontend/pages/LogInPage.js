import { Text, TextInput, View, StyleSheet} from 'react-native';
import { useState } from 'react/cjs/react.development';
import firebaseLogIn from '../../backend/logIn';


const LogInPage = () => {
  //Creating state for log in text inputs
  const [logInState, setLogInState] = useState({email:null, 
  password: null})

  //Creating state for message 
  const [message, setMessage] = useState({ words: null, styles: null });
  
  //function that handles log in 
  const logInHandler = async () => {

    const response = await firebaseLogIn(logInState.email, logInState.password);

    if (response === 'success') {
      setLogInState({ email: null, password: null });
    }

    //Error case
    else {
      setMessage({ words: response, styles: null });
    }
    //Reset message
    setTimeout(() => {
      setMessage({ words: null, styles: null });
    }, 2500);
  }

  return (
    <View style={styles.container}>
      <Text>Log In Page</Text>
      <TextInput
        placeholder="Email"
        value={logInState.email}
        onChangeText={(address) => {
          setLogInState({ ...logInState, email: address });
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
        {message.words ? <Text>{message.words}</Text> : null}
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
