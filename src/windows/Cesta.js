import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import topo from "../../assets/topo.png";

const width = Dimensions.get("screen").width;
export default function Cesta() {
  return (
    <>
      <Image source={topo} style={styles.top}></Image>
      <Text style={styles.title}>Detalhes da cesta</Text>

      <View style={styles.cesta}>
        <Text style={styles.name}>Cesta de Verduras</Text>
        <Text>Jenny Jack Farm</Text>
        <Text>
          Uma cesta com produtos selecionados custadosamente da fazenda direto
          para sua cozinha
        </Text>
        <Text>R$ 40,00</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: (578 / 768) * width,
  },
  title: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
});
