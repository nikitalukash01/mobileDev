import React from "react";
import {
  createStackNavigator,
  HeaderBackButton,
  TransitionPresets,
} from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Button} from 'react-native-elements';


import Create from './books/create';
import Desc from './books/desc';
import List from "./books/list";

const { Navigator, Screen } = createStackNavigator();

export default function Books({ navigation: { navigate } }) {
  const [data, setData] = React.useState(
    require("../assets/books/books.json").books
  );

  const pushItem = (newData) => setData([...data, newData]);
  const deleteItem = (index) => {
    const arr = [...data];
    arr.splice(index, 1);
    setData(arr);
  };

  return (
    <Navigator>
      <Screen
        name="List"
        options={{
          title: "List for books",
          headerRight: () => (
            <Button
              onPress={() => navigate("Books", { screen: "Create" })}
              type="clear"
              icon={<Ionicons name="add" size={24} />}
            />
          ),
        }}
      >
        {(props) => (
          <List {...props} data={data} deleteItem={deleteItem} />
        )}
      </Screen>
      <Screen
        name="Desc"
        component={Desc}
        options={({ route }) => ({
          title: route.params.name,
          headerLeft: (props) => (
            <HeaderBackButton {...props} />
          ),
        })}
      />
      <Screen
        name="Create"
        options={({ route }) => ({
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        })}
      >
        {(props) => <Create {...props} pushItem={pushItem} />}
      </Screen>
    </Navigator>
  );
}
;
