import { RefreshControl, ScrollView, Text } from "react-native";

import SearchBarH from "@/features/search-bar/ui/SearchBarH";
import QuickTiles from "@/features/home/QuickTiles";
import HomeSkeleton from "@/features/home/HomeSkeleton";
import { useHomeQuery } from "@/entities/home/UseHomeQuery";
import HomeContent from "@/features/home/HomeContent";

export default function HomeScreen() {
  const { data, isPending, isError, refetch, isRefetching } = useHomeQuery();

  let content;
  if (isPending) {
    content = <HomeSkeleton />;
  } else if (isError || !data) {
    content = (
      <Text style={{ color: "#EDE3D6" }}>Не удалось загрузить данные</Text>
    );
  } else {
    content = <HomeContent data={data} />;
  }

  return (
    <ScrollView
      style={{ backgroundColor: "#0c0b0a" }}
      contentContainerStyle={{ padding: 20, gap: 14 }}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={isRefetching}
          onRefresh={async () => {
            await refetch();
          }}
        />
      }
    >
      <SearchBarH />
      <QuickTiles />

      {content}
    </ScrollView>
  );
}
