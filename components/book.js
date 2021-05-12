import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import booksImages from "../assets/books/images";

const RightAction = ({ dragX, onPress }) => {
  const translateX = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [0, 80],
    extrapolate: "clamp",
  });
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1.1, 0],
    extrapolate: "clamp",
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={[styles.rightAction, { transform: [{ translateX }] }]}
      >
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
          Delete
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default function Book({
  onPress,
  handleDelete,
  title,
  subtitle,
  price,
  image,
}) {
  return (
    <Swipeable
      renderRightActions={(_, dragX) => (
        <RightAction dragX={dragX} onPress={handleDelete} />
      )}
    >
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Image
            source={booksImages
              [image]}
            style={{ height: 100, width: 80, marginRight: 20 }}
          />
          <View style={styles.bookBody}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  bookBody: {
    display: "flex",
    flexShrink: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 14,
    flex: 1,
    marginBottom: 8,
    flexWrap: "wrap",
  },
  subtitle: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
  },
  rightAction: {
    backgroundColor: "#fc3d39",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
    width: 88,
  },
  actionText: {
    width: "100%",
    color: "white",
    fontWeight: "600",
    padding: 20,
  },
});