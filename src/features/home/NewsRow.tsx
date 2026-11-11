import { Image } from "expo-image";
import { Text, View } from "react-native";
import { globalStyles } from "@/shared/globalStyles/_global.styles";
import { PlugIcon } from "@/shared/icons/PlugIcon";
import { NewsItem } from "@/entities/home/types";

export default function NewsRow({ item }: { item: NewsItem }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#14110E",
        borderRadius: 16,
        padding: 12,
        gap: 12,
      }}
    >
      <View
        style={{ width: 88, height: 88, borderRadius: 10, overflow: "hidden" }}
      >
        {item.imageUrl ? (
          <Image
            source={item.imageUrl}
            contentFit="contain"
            transition={250}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <PlugIcon width="100%" height="100%" />
        )}
      </View>
      <View style={{ flex: 1, justifyContent: "center", gap: 2 }}>
        <Text style={[globalStyles.p_ultra_mini, { color: "#EDE3D6" }]}>
          {item.category}
        </Text>
        <Text style={[globalStyles.h3, { color: "#EDE3D6" }]} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={[globalStyles.p_ultra_mini, { color: "#EDE3D6" }]}>
          {item.dateLabel}
        </Text>
      </View>
    </View>
  );
}
