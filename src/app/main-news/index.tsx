import { useHomeQuery } from "@/entities/home/UseHomeQuery";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function MainNews() {
  const { data, isSuccess } = useHomeQuery();

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          {data?.featured.imageUrl && (
            <Image
              source={data.featured.imageUrl as any}
              style={styles.image}
            />
          )}
        </View>
        <Text style={styles.text}>{data?.featured.category}</Text>
        <Text style={styles.text}>{data?.featured.timeAgo}</Text>
        <Text style={styles.text}>{data?.featured.title}</Text>
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
  image: { width: "100%", height: 200, marginBottom: 10, borderRadius: 12 },
});
