import { View } from "react-native";

const Block = ({ height }: { height: number }) => (
  <View
    style={{
      height,
      backgroundColor: "#14110E",
      borderRadius: 16,
      opacity: 0.6,
    }}
  />
);

export default function HomeSkeleton() {
  return (
    <View style={{ gap: 14 }}>
      <Block height={205} />
      <View style={{ flexDirection: "row", gap: 12 }}>
        <View style={{ flex: 1 }}>
          <Block height={205} />
        </View>
        <View style={{ flex: 1 }}>
          <Block height={205} />
        </View>
      </View>
      <Block height={96} />
      <Block height={96} />
    </View>
  );
}
