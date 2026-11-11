import { globalStyles } from "@/shared/globalStyles/_global.styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, StyleSheet, TextInput, Pressable } from "react-native";

export default function SearchBarH() {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 12,
          borderBottomWidth: 1,
          borderBottomColor: "#E1740040",
          backgroundColor: "#14110E",
          paddingVertical: 4,
          paddingHorizontal: 12,
          borderRadius: 100,
        }}
      >
        <Pressable style={{ alignSelf: "center" }}>
          {({ hovered, pressed }: any) => (
            <Ionicons
              name="search"
              size={28}
              color={hovered || pressed ? "#E17100" : "#b9a891"}
            />
          )}
        </Pressable>
        <TextInput
          style={[styles.searchBar, globalStyles.outlineNone]}
          placeholder="Поиск..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#0c0b0a",
  },
  text: { fontSize: 18, fontWeight: "bold", color: "#b9a891" },
  searchBar: {
    flex: 1,
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
