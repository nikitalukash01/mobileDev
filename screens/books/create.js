import React, { useState } from "react";
import {
  SafeAreaView,
  Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Button } from "react-native-elements";

export default function Create({ pushItem, navigation: { goBack } }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [price, setPrice] = useState("");

  return (
    <Modal
      style={styles.container}
      animationType="slide"
      visible
      presentationStyle="formSheet"
    >
      <View style={styles.header}>
        <Button
          onPress={() => goBack()}
          type="clear"
          icon={<Ionicons name="close-outline" size={32} color="#999" />}
        />
        <Button
          type="clear"
          title="Create book"
          titleStyle={{  marginRight: 8 }}
          onPress={() => {
            pushItem({
              title,
              subtitle,
              price:"$" + Number(price).toFixed(2),
            });
            goBack();
          }}
        />
      </View>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Subtitle</Text>
          <TextInput style={styles.input} value={subtitle} onChangeText={setSubtitle} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Price</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={price}
            onChangeText={setPrice}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:"auto",
    paddingHorizontal: 16,
  },
  header: {
    width: "100%",
    height: 64,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputContainer: { marginVertical: 8, paddingHorizontal: 16 },
  input: {
    borderColor: "#999",
    borderWidth: 1,
    height: 32,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  text: {
    color: "black",
    marginBottom: 8,
    fontSize: 16,
  },
});
