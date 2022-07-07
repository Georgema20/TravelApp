import { Text, TextInput, View, StyleSheet} from 'react-native';
import { useState, useContext, useEffect} from 'react';
import firebaseLogIn from '../../backend/logIn';
import { AuthContext } from '../store/auth-context';
import CenteredContainer from '../components/CenteredContainer';


const LogInPage = ({navigation}) => {

  //mounted (to prevent memoryleaks and warnings)

  let isMounted = true; 

  //create context
  const ctx = useContext(AuthContext);

  //useEffect -make logged in if already logged in 
  useEffect(()=>{
    if(ctx.isAuthenticated){
      navigation.navigate('SignedIn');
    }
  })


  //Creating state for log in text inputs
  const [logInState, setLogInState] = useState({ email: null, password: null });

  //Creating state for message
  const [message, setMessage] = useState({ words: null, styles: null });

  //function that handles log in
  const logInHandler = async () => {

    //if there is something in both boxes
if (!logInState.email || !logInState.password ) {
  setMessage({ words: 'Fill all inputs', styles: null });
  setTimeout(() => {
    if (isMounted) {
      setMessage({ words: null, styles: null });
    }
  }, 2500);
  return;
}

    const response = await firebaseLogIn(logInState.email, logInState.password);

    if (response.message === 'success') {
      //authenticating in ctx
      ctx.authenticate(response.data.uid);
      //clearing out everything
      setLogInState({ email: null, password: null });
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

  //sign uphandler 
  const signUpHandler = () =>{
    //set to empty or else it will keep bc it a stack nav
     setLogInState( { email: null, password: null });

     //change isMounted 
     isMounted = false; 

     //change message 
     setMessage({ words: null, styles: null });

     //navigate there
    navigation.navigate('SignUp');
  
  }


  return (
    <CenteredContainer>
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
          <Text onPress={signUpHandler}>Sign Up</Text>
          <Text onPress={logInHandler}>Button</Text>

          {message.words ? <Text>{message.words}</Text> : null}
        </View>
      </View>
    </CenteredContainer>
  );
};


const styles = StyleSheet.create({
});

export default LogInPage;
