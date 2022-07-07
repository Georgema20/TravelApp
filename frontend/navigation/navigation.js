//Need to create the stack navigator 

import { createNativeStackNavigator } from "@react-navigation/native-stack";
//importing pages 
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import SignedInPage from "../pages/SignedInPage";


const Navigation = () =>{
  //creating navigator
const Stack = createNativeStackNavigator();

return (
  <Stack.Navigator>
    <Stack.Screen
      name="LogIn"
      component={LogInPage}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpPage}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignedIn"
      component={SignedInPage}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
};

export default Navigation; 