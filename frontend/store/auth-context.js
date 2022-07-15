//importing what we need for context
import { createContext, useState, useEffect} from "react";

//importing what we need to store user stuff on the device 
import AsyncStorage from "@react-native-async-storage/async-storage";

//exporting the context // info 
//creating it for first time to be used in provider

export const AuthContext = createContext(
  //default state
  {uid:'',
isAuthenticated:false, 

//functions in this context
authenticate: () =>{

}, 
logout: () => {

}});

//Place to manage the state and create a wrapper where auth can be accessed 

function AuthContextProvider({children}){
  //loading or not stage (to prevent weird transition if logged in)

  const [loading, setLoading] = useState(true);

  // when initialized check to see if anything in storage
  useEffect(() => {
    //Get uid to see if anything
    async function fetchToken() {
      const storedUid = await AsyncStorage.getItem('uid');

      //if found one then set
      if (storedUid) {
        setUid(storedUid);
      }

      setLoading(false);
    }
    fetchToken();
  });

  //manage token //is empty bc starts w no token
  const [uid, setUid] = useState();

  //authentication function
  function authenticate(uid) {
    //setting token
    setUid(uid);

    //Store uid in device
    //give token and item to store
    AsyncStorage.setItem('uid', uid);
  }

  //log out function which sets the token to null
  function logout() {
    setUid(null);
    //removing from storage;
    AsyncStorage.removeItem('uid');
  }

  //thing that is passed down to everything in provider
  const value = {
    uid: uid,
    isAuthenticated: !!uid,
    //pass in functions to be used too
    authenticate: authenticate,
    logout: logout,
    loading: loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;