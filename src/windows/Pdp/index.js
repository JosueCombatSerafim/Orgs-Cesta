import { StyleSheet, Text, View } from "react-native";
import Details from "./components/Details";
import Top from "./components/Top";

export default function Cesta({ top, details }) {
  return (
    <>
      <Top {...top} />

      <Text>RETOMAR NO CAPÌTULO 04 React Native Coemçando Zero</Text>
      <View style={styles.cesta}>
        <Details {...details} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
