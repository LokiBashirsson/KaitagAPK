import { View } from "react-native";
import ProductCardVertical from "./ProductCardVertical";
import { Product } from "../home/types";

export default function ProductRow({ products }: { products: Product[] }) {
  return (
    <View style={{ flexDirection: "row", gap: 12 }}>
      {products.slice(0, 2).map((product) => (
        <ProductCardVertical
          key={product.id}
          name={product.name}
          price={product.price}
          size="small"
          rowSize={2}
          discount={product.discount}
          imageUrl={product.imageUrl}
        />
      ))}
    </View>
  );
}
