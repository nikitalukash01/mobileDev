import * as React from "react";
import { Text, View } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import Diagram from "./diagram";
import Plot from "./plot";

function DrawingScreen() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <View
      style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}
    >
      <SegmentedControl
        values={["Графік", "Діаграма"]}
        style={{ width: 280, maxWidth: "80%" }}
        activeFontStyle={{
          color: "indigo",
          fontWeight: "700",
        }}
        selectedIndex={selectedIndex}
        onChange={(event) =>
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex)
        }
      />
      {selectedIndex == 0 ? <Plot styles={{height: 320, maxHeight: "80%", width: 320}}/> : <Diagram />}
    </View>
  );
}

export default DrawingScreen;
