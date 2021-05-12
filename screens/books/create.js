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
  const [Title, setTitle] = useState("");
  const [Subtitle, setSubtitle] = useState("");
  const [Price, setPrice] = useState("");

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
          titleStyle={{ color: "#D2444A", marginRight: 8 }}
          onPress={() => {
            pushItem({
              Title,
              Subtitle,
              Price,
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
            value={Title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Subtitle</Text>
          <TextInput style={styles.input} value={Subtitle} onChangeText={setSubtitle} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Price</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={Price}
            onChangeText={setPrice}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
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
