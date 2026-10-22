import { globalStyles } from "@/shared/globalStyles/_global.styles";
import { HomeIcon } from "@/shared/icons/HomeIcon";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

export default function Header() {
  return (
    <>
      <View style={{ marginVertical: 12, marginHorizontal: 16 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <LinearGradient
            colors={["#3A2208", "#1A110A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderWidth: 1,
              borderColor: "#7A3E0A",
              borderRadius: 13,
              padding: 10,
            }}
          >
            <HomeIcon />
          </LinearGradient>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={[globalStyles.textOrange, globalStyles.h1]}>
              Столица Кайтаг
            </Text>
            <Text style={{ color: "#A99C8D" }}>Лента нашего района</Text>
          </View>
          <View>
            <Ionicons
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: "#3A2A1A",
                borderRadius: 100,
              }}
              name="heart-outline"
              size={24}
              color={"#7A3E0A"}
            />
          </View>
        </View>
      </View>
      <View style={globalStyles.line} />
      <View style={{ gap: 10 }}>
        {/* {headerNavDB.map((item) => (
          <Link
            style={[
              globalStyles.text,
              headerStyles.menuButton,
              item.link === `/${segments[0]}`
                ? headerStyles.activeMenuButton
                : "",
            ]}
            key={item.id}
            href={item.link}
          >
            <Text>{item.name}</Text>
          </Link>
        ))} */}
      </View>
    </>
  );
}
