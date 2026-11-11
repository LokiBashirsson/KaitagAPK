import { globalStyles } from "@/shared/globalStyles/_global.styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

export default function SearchScreen() {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          width: "100%",
          borderBottomWidth: 1,
          borderBottomColor: "#E1740040",
        }}
      >
        <TextInput
          style={[styles.searchBar, globalStyles.outlineNone]}
          placeholder="Поиск..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Pressable>
          {({ hovered, pressed }: any) => (
            <Ionicons
              name="search"
              size={28}
              color={hovered || pressed ? "#E17100" : "#b9a891"}
            />
          )}
        </Pressable>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>Поиск: {searchText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0c0b0a",
  },
  text: { fontSize: 18, fontWeight: "bold", color: "#b9a891" },
  searchBar: {
    height: 50,
    backgroundColor: "#1a1a1a00",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#b9a891",
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
