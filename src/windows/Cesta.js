import { Image, StyleSheet, Dimensions, View } from "react-native";
import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";
import CustomText from "../components/CustomText";

const width = Dimensions.get("screen").width;
export default function Cesta() {
  return (
    <>
      <Image source={topo} style={styles.top} />
      <CustomText style={styles.title}>Detalhes da cesta</CustomText>

      <View style={styles.cesta}>
        <CustomText style={styles.name}>Cesta de Verduras</CustomText>
        <View style={styles.farmerRow}>
          <Image source={logo} style={styles.farmerImage} />
          <CustomText style={styles.farmerName}>Jenny Jack Farm</CustomText>
        </View>
        <CustomText style={styles.description}>
          Uma cesta com produtos selecionados custadosamente da fazenda direto
          para sua cozinha
        </CustomText>
        <CustomText style={styles.price}>R$ 40,00</CustomText>
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
  farmerRow: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  farmerImage: {
    width: 32,
    height: 32,
  },
  farmerName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2a9f85",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
    marginTop: 8,
  },
});
