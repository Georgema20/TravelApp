import { Text, TextInput, View, StyleSheet } from 'react-native';
import { useState } from 'react/cjs/react.development';
import firebaseSignIn from '../../backend/signUp';
import { useContext } from 'react';
import { AuthContext } from '../store/auth-context';
import CenteredContainer from '../components/CenteredContainer';

const SignUpPage = ({navigation}) => {
  //create context 
  const ctx = useContext(AuthContext);

  //isMounted (to prevent isMounted memoryleak erros)

  const [isMounted, setIsMounted] = useState(null);

  //Creating state for log in text inputs
  const [signUpState, setSignUpState] = useState({
    username: null,
    email: null,
    confirmEmail: null,
    password: null,
    confirmPassword: null,
  });

  //creating state for message 
  const [message, setMessage] = useState({words:null,styles:null});

  //function that handles sign ups 
  const SignUpHandler = async () => {
    //Check to see if all things filled
    if(!signUpState.username || !signUpState.email || !signUpState.password ){
     
      setMessage({ words: 'Fill all inputs', styles: null });
      setTimeout(() => {
        console.log(isMounted);
        if(isMounted){setMessage({ words: null, styles: null })};
      }, 2500);
      return;
    }
    //Need check to see if user already exists
    //TO DO 


    //Check to see if pass is same
if (signUpState.password!=signUpState.confirmPassword) {
  setMessage({ words: 'Passwords do not match', styles: null });

  setTimeout(() => {
    if(isMounted){setMessage({ words: null, styles: null })};
  }, 2500);
  return;
}
    //Check to see if email is same
if (signUpState.email != signUpState.confirmEmail) {
  setMessage({ words: 'Emails do not match', styles: null });
  setTimeout(() => {
    if(isMounted){setMessage({ words: null, styles: null })};
  }, 2500);
  return;
}
    const response = await firebaseSignIn(
      signUpState.email,
      signUpState.password,
      signUpState.username
    );
    //Success case
    if (response.message === 'success') {
      //authenticating in ctx
      ctx.authenticate(response.data.uid);
      //clearing out everything
      setSignUpState({
        username: null,
        email: null,
        confirmEmail: null,
        password: null,
        confirmPassword: null,
      });
      setMessage({ words: 'Success', styles: null });
    }
    //Error case
    else {
      setMessage({ words: response.message, styles: null });
    }
    //Reset message
    setTimeout(() => {
      if(isMounted){setMessage({ words: null, styles: null });}
    }, 2500);
  };

  const LogInHandler = async () => {
    //change isMounted
    await setIsMounted(false);

    //change message
    setMessage({ words: null, styles: null });

    navigation.navigate('LogIn');
  }
  

  return (
    <CenteredContainer>
      <View style={styles.container}>
        <Text>Sign Up Page</Text>
        <TextInput
          placeholder="Username"
          value={signUpState.username}
          onChangeText={(user) => {
            setSignUpState({ ...signUpState, username: user });
          }}
        />
        <TextInput
          placeholder="Email"
          value={signUpState.email}
          onChangeText={(email) => {
            setSignUpState({ ...signUpState, email: email });
          }}
        />
        <TextInput
          placeholder="Confirm Email"
          value={signUpState.confirmEmail}
          onChangeText={(email) => {
            setSignUpState({ ...signUpState, confirmEmail: email });
          }}
        />
        <TextInput
          placeholder="Password"
          value={signUpState.password}
          onChangeText={(pass) => {
            setSignUpState({ ...signUpState, password: pass });
          }}
        />
        <TextInput
          placeholder="Confirm Password"
          value={signUpState.confirmPassword}
          onChangeText={(pass) => {
            setSignUpState({ ...signUpState, confirmPassword: pass });
          }}
        />
        <View>
          <Text onPress={LogInHandler}>I have an account</Text>
          <Text onPress={SignUpHandler}>Button</Text>
          {message.words ? <Text>{message.words}</Text> : null}
        </View>
      </View>
    </CenteredContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default SignUpPage;
