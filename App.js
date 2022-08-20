import { StatusBar, SafeAreaView, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Cesta from "./src/windows/Pdp";
import pdp from "./src/Mocks/pdp";

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...pdp} />
    </SafeAreaView>
  );
}
