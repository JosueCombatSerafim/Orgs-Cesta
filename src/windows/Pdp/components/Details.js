import { Image, StyleSheet, View } from "react-native";
import CustomText from "../../../components/CustomText";

export default function Details({
  name,
  farmerImage,
  farmerName,
  description,
  price,
}) {
  return (
    <>
      <CustomText style={styles.name}>{name}</CustomText>
      <View style={styles.farmerRow}>
        <Image source={farmerImage} style={styles.farmerImage} />
        <CustomText style={styles.farmerName}>{farmerName}</CustomText>
      </View>
      <CustomText style={styles.description}>{description}</CustomText>
      <CustomText style={styles.price}>{price}</CustomText>
    </>
  );
}

const styles = StyleSheet.create({
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
