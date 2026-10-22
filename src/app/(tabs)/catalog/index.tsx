import {
  ScrollView,
  ScrollViewComponent,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Catalog() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Здесь появятся продукты</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0c0b0a",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text: { fontSize: 18, fontWeight: "bold", color: "#b9a891" },
});
