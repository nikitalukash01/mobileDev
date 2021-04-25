import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { images } from "../styles/images";
export default function Book({ data,id }) {
    return (
    <View style={styles.container}>
      <View style={{backgroundColor:"white" ,flex:0.2,alignItems:'center',justifyContent:"center"}}>
        <Image source={images.books[id+1]} style={{width:100,height:100}} />
      </View>
      <View style={styles.desc}>
        <Text style={styles.text}>{data.title}</Text>
        <Text style={styles.text}>{data.price}</Text>
        <Text style={styles.text}>{data.subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",
    marginBottom:10,
    backgroundColor:"white",
    height:"auto",
    padding:5
},
  desc: {
    flex: 0.8,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent:"space-around",
    
    backgroundColor:"white"
  },
  text: { fontSize: 15, 
  width:"auto",marginLeft:20 },
});
