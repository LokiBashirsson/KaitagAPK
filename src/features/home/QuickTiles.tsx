import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { globalStyles } from "@/shared/globalStyles/_global.styles";

type TileProps = {
  icon: "list" | "disc";
  label: string;
  title: string;
  side: "left" | "right";
};

function Tile({ icon, label, title, side }: TileProps) {
  const left = side === "left";
  return (
    <View
      style={{
        flex: 1,
        height: 80,
        borderWidth: 1,
        borderColor: "#E1740040",
        borderRadius: 4,
        transform: [
          { perspective: 400 },
          { rotateY: left ? "-15deg" : "15deg" },
        ],
      }}
    >
      <LinearGradient
        colors={["#17110B", "#0B0A09"]}
        start={{ x: left ? 1 : 0, y: 0 }}
        end={{ x: left ? 0 : 1, y: 0 }}
        style={{ flex: 1, gap: 4, paddingHorizontal: 14, paddingVertical: 8 }}
      >
        <Ionicons name={icon} size={18} color="#E17100b0" />
        <View>
          <Text style={[globalStyles.p_ultra_mini, { color: "#E17100" }]}>
            {label}
          </Text>
          <Text
            style={[globalStyles.p_mini, { color: "#b9a891" }]}
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

export default function QuickTiles() {
  return (
    <View style={{ flexDirection: "row", gap: 20 }}>
      <Tile icon="list" label="Район" title="Новости района" side="left" />
      <Tile icon="disc" label="Сегодня" title="Скидки дня" side="right" />
    </View>
  );
}
