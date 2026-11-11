import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#E17100",
        tabBarInactiveTintColor: "#b9a891",
        tabBarStyle: {
          backgroundColor: "#E1740040",
          borderTopWidth: 1,
          borderTopColor: "#E17100",
        },
      }}
    >
      {/* Главная вкладка */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Главная",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={typeof color === "string" ? color : undefined}
            />
          ),
        }}
      />

      {/* Вкладка Поиска */}

      <Tabs.Screen
        name="catalog/index"
        options={{
          // headerStyle: {
          //   backgroundColor: "#0c0b0a",
          //   borderBottomColor: "#E1740040",
          // },
          // headerTitleStyle: {
          //   color: "#E17100",
          //   display: "flex",
          //   justifyContent: "center",
          // },
          // headerTitleAlign: "center",
          headerShown: false,
          title: "Каталог",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "bag-handle" : "bag-outline"}
              size={24}
              color={typeof color === "string" ? color : undefined}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Избранное",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={24}
              color={typeof color === "string" ? color : undefined}
            />
          ),
        }}
      />
    </Tabs>
  );
}
