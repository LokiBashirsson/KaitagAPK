import Header from "@/widgets/header/ui/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LinearGradient } from "expo-linear-gradient";
import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      retry: 2,
    },
  },
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={[styles.background, { flex: 1 }]}>
        <LinearGradient
          colors={["#17110B", "#0B0A09"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <View style={styles.section}>
            <SafeAreaView>
              <Header />
            </SafeAreaView>
          </View>
        </LinearGradient>
        <View style={[styles.section, { flex: 1 }]}>
          <Slot />
        </View>
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flexDirection: "column",
    backgroundColor: "#0c0b0a",
    flex: 1,
  },
  section: {
    display: "flex",
    marginHorizontal: "auto",
    marginVertical: 0,
    maxWidth: 680,
    width: "100%",
  },
});
