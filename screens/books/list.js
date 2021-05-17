import React, { useState } from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";


import Book from "../../components/book";

export default function List({ data, deleteItem, navigation }) {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ width: "100%", display: "flex" }}
        data={data.filter(
          ({ title }) => title.toUpperCase().indexOf(search.toUpperCase()) > -1
        )}
        renderItem={({ item, index }) => (
          <Book
            {...item}
            handleDelete={() => deleteItem(index)}
            onPress={() => {
              item.isbn13 != "noid" &&
                navigation.navigate("Desc", {
                  id: item.isbn13,
                  name: item.title,
                });
            }}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              marginLeft: 20,
            }}
          />
        )}
        keyExtractor={({ isbn13 }, i) => `${isbn13}-${i}`}
        ListHeaderComponent={
          <SearchBar
            platform="ios"
            containerStyle={styles.search}
            inputContainerStyle={styles.input}
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    backgroundColor: "transparent",
    height: 48,
  },
  input: {
    height: 32,
  },
});