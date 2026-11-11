import { HomeData } from "@/entities/home/types";
import FeaturedNews from "./FeaturedNews";
import { View } from "react-native";
import ProductRow from "@/entities/product-cards/ProductRow";
import SectionHeader from "@/shared/ui/SectionHeader";
import NewsRow from "./NewsRow";
import AnnouncementCard from "./AnnouncementCard";
import { Link } from "expo-router";

export default function HomeContent({ data }: { data: HomeData }) {
  return (
    <>
      <Link
        href="/main-news"
        style={{ color: "#EDE3D6", fontSize: 16, fontWeight: "bold" }}
      >
        <FeaturedNews item={data.featured} />
      </Link>

      <View style={{ gap: 12 }}>
        <SectionHeader title="Рекомендуем вам" href="/products" />
        <ProductRow products={data.recommended} />
      </View>

      <View style={{ gap: 12 }}>
        <SectionHeader title="Новости района" href="/news" />
        {data.news.map((item) => (
          <NewsRow key={item.id} item={item} />
        ))}
      </View>

      <View style={{ gap: 12 }}>
        <SectionHeader title="Скидки недели" href="/deals" />
        <ProductRow products={data.deals} />
      </View>

      <AnnouncementCard item={data.announcement} />
    </>
  );
}
