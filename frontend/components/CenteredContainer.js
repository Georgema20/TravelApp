
import { View, StyleSheet} from "react-native";

const CenteredContainer = ({children}) => {

  return <View style={styles.container}>
      {children}</View>
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  }
});

export default CenteredContainer;