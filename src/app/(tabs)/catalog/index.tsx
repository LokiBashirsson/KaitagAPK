import ProductCardVertical from "@/entities/product-cards/ProductCardVertical";
import SearchBarH from "@/features/search-bar/ui/SearchBarH";
import { useQuery } from "@tanstack/react-query";
import { useIsFocused } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Catalog() {
  const IsFocused = useIsFocused();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["catalog"],
    queryFn: async () => {
      const response = await fetch("http://localhost:9000/furnitures", {
        headers: {
          "Content-Type": "application/json",
          cache: "no-cache",
        },
      });
      if (!response.ok) {
        throw new Error("Данные не загружены");
      }

      return response.json();
    },
    staleTime: 5 * 1000,
    subscribed: IsFocused,
  });

  console.log("Catalog data:", data);

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1, width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <SearchBarH />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
            marginTop: 20,
          }}
        >
          {isLoading && !data && (
            <Text style={styles.text}>Загрузка данных...</Text>
          )}
          {isError && <Text style={styles.text}>Данные не загружены</Text>}
          {data?.map((item: any) => {
            return (
              <ProductCardVertical
                key={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.image}
                rowSize={2}
                size="small"
                discount={item.discount}
              />
            );
          })}
        </View>
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
