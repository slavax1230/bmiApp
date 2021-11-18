import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [height,setHeight] = useState(0);
  const [weight,setWeight] = useState(0);
  const [result,setResult] = useState(0);

  const calbmi = () => {

    const heightFormatter = height / 100;
    let bmi = weight / (heightFormatter * heightFormatter);
    bmi = bmi.toFixed(2)
    setResult(bmi);

  }
  
  

  return (
    <View style={styles.container}>
      
    <Text>Please add yours height in cm:</Text>
    <TextInput style={styles.inputStyle}    
    value = {height}
    onChangeText={text123 => setHeight(text123)}/>

    <Text>Please add yours weight in kg:</Text>
    <TextInput style={styles.inputStyle}
    value = {weight}
    onChangeText={text456 => setWeight(text456)} />
    
    <TouchableOpacity style={styles.btn} onPress={calbmi}><Text>Calculate</Text></TouchableOpacity>
    <Text>{result}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  btn:{backgroundColor:"green",width:"20%",borderRadius:20,paddingHorizontal:10,paddingVertical:20,alignItems:"center",fontSize:40,marginTop:8,},
  inputStyle:{
    backgroundColor:'#ffffff', width:"100%", borderRadius:30, paddingHorizontal: 10,paddingVertical:20,marginTop:6,alignItems: "center",fontSize:16
  },
  container: {
    flex: 1,
    backgroundColor: '#0099cc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
