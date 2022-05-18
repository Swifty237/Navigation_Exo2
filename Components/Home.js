import { Text, View, Button } from "react-native";
import DrawerNav from "./DrawerNav.js";

export default function Home({ navigation }) {
    return (
        <View style ={{flex: 1, justifyContent: "center", alignItems: "center", margin: 10}}>
            <Text style={{margin: 5, textAlign: "center", fontSize: 30, fontStyle: "italic"}}>
                Bienvenue sur l'application dédiée à Ada LOVELACE
            </Text>
            
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Button onPress={() => navigation.navigate(DrawerNav)} title ="Go to Ada Page"/>
            </View>
        </View>
    );
  }
  