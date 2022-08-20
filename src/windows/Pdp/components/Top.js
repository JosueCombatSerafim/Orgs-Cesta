import { Image, StyleSheet, Dimensions } from "react-native";
import topo from "../../../../assets/topo.png";
import CustomText from "../../../components/CustomText";

const width = Dimensions.get("screen").width;
export default function Top({ title }) {
  return (
    <>
      <Image source={topo} style={styles.top} />
      <CustomText style={styles.title}>{title}</CustomText>
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
});
