import "react-native-reanimated";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Home.js";
import DrawerNav from "./Components/DrawerNav.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName ="Home">
            <Stack.Screen name ="Home" component={Home}/>
            <Stack.Screen name ="DrawerNav" component={DrawerNav} options={{headerTitle: "Back to home page"}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
