import { StyleSheet, Text } from "react-native";

export default function CustomText({ children, style }) {
  let selectedStyle = styles.text;

  if (style?.fontWeight == "bold") selectedStyle = styles.textBold;

  return <Text style={[style, selectedStyle]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textBold: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});
