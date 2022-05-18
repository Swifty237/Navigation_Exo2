import { createDrawerNavigator } from '@react-navigation/drawer';
import AdaLovelacePic from "./AdaLovelacePic.js";
import Personage from "./Personage.js";
import Biography from "./Biography.js";

const AdaScreen = () => <AdaLovelacePic/>
const PersoScreen = () => <Personage/>
const BioScreen = () => <Biography/>

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    // <Drawer.Navigator useLegacyImplementation>
    return (
      <Drawer.Navigator>
        <Drawer.Screen name ="Ada LOVELACE" component={AdaScreen} />
        <Drawer.Screen name ="Personnage" component={PersoScreen} />
        <Drawer.Screen name ="Biographie" component={BioScreen} />
      </Drawer.Navigator>
    );
  }
  