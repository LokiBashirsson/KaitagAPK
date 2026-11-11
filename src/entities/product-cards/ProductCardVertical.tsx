import { memo } from "react";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import { globalStyles } from "@/shared/globalStyles/_global.styles";
import { PlugIcon } from "@/shared/icons/PlugIcon";

interface IProductCardVertical {
  name?: string;
  price?: number | null;
  discount?: number | null;
  imageUrl?: string;
  size?: "small" | "medium" | "big";
  rowSize?: 1 | 2 | 3;
  importance?: boolean;
  publication_time?: string;
}
0;
const CARD_HEIGHTS = { small: 205, medium: 285, big: 345 } as const;

function RusificationOfPrice(price: number | null | undefined): string {
  if (price == null) {
    return "[цена]";
  }
  return price.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  });
}

function ProductCardVertical({
  name = "[Модель]",
  price,
  discount,
  imageUrl,
  size = "small",
  rowSize = 1,
  importance = false,
  publication_time,
}: IProductCardVertical) {
  const discountValue = discount
    ? Math.max(0, Math.min(discount * 100, 100))
    : 0;

  return (
    <View
      style={{
        width: rowSize === 1 ? "100%" : rowSize === 2 ? "48%" : "30%",
        height: CARD_HEIGHTS[size],
        backgroundColor: "#14110E",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <View style={{ height: "60%" }}>
        {imageUrl ? (
          <Image
            source={imageUrl}
            contentFit="cover"
            transition={250}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <PlugIcon width="100%" height="100%" />
          </View>
        )}

        {Boolean(
          discount && (
            <View
              style={{
                position: "absolute",
                top: 8,
                left: 8,
                backgroundColor: "#E8700A",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "#0B0A09",
                  paddingVertical: 3,
                  paddingHorizontal: 8,
                  fontWeight: "600",
                }}
              >
                -{discountValue}%
              </Text>
            </View>
          ),
        )}
      </View>
      <View
        style={{ flex: 1, paddingHorizontal: 12, paddingVertical: 10, gap: 2 }}
      >
        {Boolean(importance || publication_time) && (
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Text>{importance}</Text>
            <Text>{publication_time}</Text>
          </View>
        )}
        <Text
          numberOfLines={2}
          style={[globalStyles.p_mini, { color: "#EDE3D6" }]}
        >
          {name}
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", columnGap: 8 }}>
          <Text
            style={[
              discount
                ? {
                    color: "#E17100",
                    textDecorationLine: "line-through",
                  }
                : { color: "#EDE3D6" },
              globalStyles.p_mini,
            ]}
          >
            {RusificationOfPrice(price)}
          </Text>
          {price && discount ? (
            <Text style={[globalStyles.p_mini, { color: "#EDE3D6" }]}>
              {RusificationOfPrice(price * (1 - discount))}
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );
}

export default memo(ProductCardVertical);
