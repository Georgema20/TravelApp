
import { View, Text} from "react-native";
import LogOutButton from "../components/LogOutButton";
import CenteredContainer from '../components/CenteredContainer';


const SignedInPage = ({navigation}) =>{

return (
  <CenteredContainer>
    <Text>You Are Signed In</Text>
    <LogOutButton/>
  </CenteredContainer>
);
}

export default SignedInPage;