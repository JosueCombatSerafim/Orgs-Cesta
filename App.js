import { StatusBar, SafeAreaView } from "react-native";
import Cesta from "./src/windows/Cesta";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
