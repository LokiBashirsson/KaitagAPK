import { Image } from "expo-image";
import { Text, View } from "react-native";
import { globalStyles } from "@/shared/globalStyles/_global.styles";
import { PlugIcon } from "@/shared/icons/PlugIcon";
import { HomeData } from "@/entities/home/types";

export default function FeaturedNews({ item }: { item: HomeData["featured"] }) {
  return (
    <View
      style={{
        width: "100%",
        height: 205,
        backgroundColor: "#14110E",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      {item.imageUrl ? (
        <Image
          source={item.imageUrl}
          contentFit="cover"
          transition={250}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
      ) : (
        <PlugIcon width="100%" height="100%" />
      )}
      <View
        style={{ flex: 1, padding: 14, gap: 6, justifyContent: "flex-end" }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text
            style={[
              globalStyles.p_ultra_mini,
              {
                backgroundColor: "#3A2208",
                color: "#FF9A3D",
                paddingVertical: 4,
                paddingHorizontal: 10,
                borderRadius: 12,
              },
            ]}
          >
            {item.category}
          </Text>
          <Text style={[globalStyles.p_ultra_mini, { color: "#9A8D7E" }]}>
            {item.timeAgo}
          </Text>
        </View>
        <Text style={[globalStyles.h3, { color: "#EDE3D6" }]} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    </View>
  );
}
