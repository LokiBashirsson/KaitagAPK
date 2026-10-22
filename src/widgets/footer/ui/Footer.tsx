import { NativeTabs } from "expo-router/build/native-tabs";
import { StyleSheet } from "react-native";

export default function Footer() {
  return <></>;
}

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    backgroundColor: "#161514",
    borderTopWidth: 1,
    borderTopColor: "#222222",
    paddingVertical: 12,
  },
  menuRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  menuItem: {
    alignItems: "center",
    padding: 6,
  },
  menuText: {
    fontSize: 12,
    color: "#666666",
  },
  activeMenuText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
