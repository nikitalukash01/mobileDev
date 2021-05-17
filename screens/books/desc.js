import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Image,
} from "react-native";

import descBooks from "../../assets/books";
import booksImages from "../../assets/books/images";

export default function DetailsScreen({ route, navigation }) {
  const { id } = route.params;
  const bookDesc = descBooks[id];

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image
          source={booksImages[bookDesc.image]}
          resizeMode="contain"
          style={{ width: "100%", marginRight: 20 }}
        />
        {Object.keys(bookDesc).map(
          (key) =>
            key == "image" || (
              <Text key={key} style={styles.key}>
                {key[0].toUpperCase() + key.slice(1)}:{" "}
                <Text key={key} style={styles.text}>
                  {bookDesc[key]}
                </Text>
              </Text>
            )
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  key: { fontSize: 16, marginVertical: 4, color: "grey" },
  text: {
    color: "black",
  },
});
