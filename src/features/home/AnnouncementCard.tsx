import { Text, View } from "react-native";
import { globalStyles } from "@/shared/globalStyles/_global.styles";
import { HomeData } from "@/entities/home/types";

export default function AnnouncementCard({
  item,
}: {
  item: HomeData["announcement"];
}) {
  return (
    <View
      style={{
        backgroundColor: "#14110E",
        borderRadius: 16,
        padding: 16,
        gap: 8,
      }}
    >
      <Text style={[globalStyles.p_ultra_mini, { color: "#E8700A" }]}>
        {item.label}
      </Text>
      <Text style={[globalStyles.h3, { color: "#EDE3D6" }]}>{item.title}</Text>
      <Text style={[globalStyles.p, { color: "#A99C8D" }]}>{item.text}</Text>
    </View>
  );
}
