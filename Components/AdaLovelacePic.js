import { Image, View, Text } from "react-native";

export default function AdaLovelacePic() {
    return (
      <View style ={{flex: 1, alignItems: "center"}}>
          <Image source={require("../assets/Ada_Lovelace.png")} style ={{flex: 2, width: "95%"}}/>
          <Text style={{flex: 1, marginTop: 20, fontStyle: "italic"}}>
              Ada LOVELACE
          </Text>
      </View>
    );
  }