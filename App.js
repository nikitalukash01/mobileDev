import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawingScreen from "./screens/Drawing";
import CoordinateNL from "./coordNL";
import Books from "./screens/books";

let cordinate = new CoordinateNL(-12, 31, 43, 0);
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text>Лукашук Микита</Text>
      <Text>Група ІП-83</Text>
      <Text>ЗК ІП-83</Text> */}
      <Text>{cordinate.stringer()}</Text>
      <View>
        <Text>{cordinate.decimal()}</Text>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Drawing" component={DrawingScreen} />
        <Tab.Screen name="Books" component={Books} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
