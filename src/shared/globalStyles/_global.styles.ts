import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  line: {
    borderColor: "#E06B264D",
    borderBottomWidth: 1,
    width: "100%",
  },
  text: {
    color: "#b9a891",
  },
  textOrange: {
    color: "#E17100",
  },
  textActive: {
    color: "white",
  },
  h1: {
    fontSize: 21,
    fontWeight: 600,
  },
  h2: {
    fontSize: 20,
    fontWeight: 600,
  },
  h3: {
    fontSize: 18,
    fontWeight: 600,
  },
  p: {
    fontSize: 16,
  },
  p_mini: {
    fontSize: 14,
  },
  p_ultra_mini: {
    fontSize: 12,
  },
  outlineNone: {
    outlineStyle: "none",
  } as any,
});
