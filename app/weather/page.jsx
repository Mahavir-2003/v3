import { View, Text, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import BackNav from "../components/BackNav";


const page = () => {
  // get current route path
  
  const screenHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView >
      <StatusBar style="light" backgroundColor="#000"/>
      <View style={{backgroundColor: '#000', height: screenHeight}}>
        <BackNav path={'/'}/>
        <View>
        <Text style={{color:"#fff" , backgroundColor:"#222222"}}>dsjfhdjhf</Text>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default page;
