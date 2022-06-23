import { Text, TextInput, View, StyleSheet } from 'react-native';
import { useState } from 'react/cjs/react.development';

const SignUpPage = () => {

  const [signUpState, setSignUpState] = useState({
    username: null,
    email:null,
    confirmEmail:null,
    password: null,
    confirmPassword:null
  });

  const SignUpHandler = () => {
    console.log(signUpState);
    
  };

  return (
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
        <Text onPress={SignUpHandler}>Button</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default SignUpPage;
