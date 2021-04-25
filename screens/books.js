import * as React from "react";
import { View, FlatList, StyleSheet, TextInput, Image } from "react-native";
import Book from "./book";

export default function Books() {
  const [books, setBooks] = React.useState(null);
  React.useEffect(() => {
    const data = require("./data.json");
    setBooks(data.books);
  }, []);
  // // console.log(books);
  // const search = (val) => {
  //   setBooks((prevstate) => prevstate.filter(elem=>elem.title.toLowerCase().includes(val.toLowerCase(),0)));
  //   console.log(books);
  //   console.log(val);
  //   val == '' ? setBooks(data) : null
  // };

  return (
    <View>
      <FlatList
        // ListHeaderComponent={
        //   <View style={styles.header}>
        //     <Image source={require("../assets/Group.png")} />
        //     <TextInput
        //       style={styles.input}
        //       placeholder="Search"
        //       onChangeText={(val) => search(val)}
        //     />
        //   </View>
        // }
        style={{ borderColor: "black", borderWidth: 1, borderStyle: "solid" }}
        data={books ? books : []}
        keyExtractor={(item, index) => item.key}
        renderItem={({ item, index }) => {
          console.log(item);
          return <Book data={item} id={index} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "grey",
  },
  input: {
    width: 150,
    height: 20,
    textAlign: "left",
    borderWidth: 1,
    marginLeft: 10,
    height: 25,
    borderRadius: 5,
  },
  wrapper: {
    width: 150,
    height: 75,
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
