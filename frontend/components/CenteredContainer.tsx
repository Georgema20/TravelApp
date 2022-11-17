import React from "react";
import { View, StyleSheet} from "react-native";

const CenteredContainer : React.FC = (props) => {
  return <View style={styles.container}>
    {props.children}</View>
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