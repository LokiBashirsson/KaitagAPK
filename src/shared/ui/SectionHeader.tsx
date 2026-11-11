import { Pressable, Text, View } from "react-native";
import { globalStyles } from "../globalStyles/_global.styles";
import { Link } from "expo-router";

export default function SectionHeader({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text
        style={[globalStyles.p_mini, { color: "#EDE3D6", fontWeight: "600" }]}
      >
        {title}
      </Text>

      <Link href={href as any} asChild>
        <Pressable hitSlop={8}>
          <Text style={[globalStyles.textOrange, { fontWeight: "700" }]}>
            Все
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
