import { HomeData } from "./types";

export async function fetchHome(): Promise<HomeData> {
  await new Promise((r) => setTimeout(r, 500));
  return {
    featured: {
      id: "1",
      category: "Основная новость",
      title: "Появился новый рабочий ВПН",
      dateLabel: "",
      imageUrl: require("@/shared/assets/images/kaitag-vpn.png"),
      timeAgo: "2 ч назад",
    },
    recommended: [
      { id: "p1", name: "Модель 1", price: 12_000 },
      { id: "p2", name: "Модель 2", price: null },
    ],
    news: [
      {
        id: "n1",
        category: "ОТКРЫТИЕ",
        imageUrl: require("@/shared/assets/images/ronaldo.png"),
        title: "Футбольный матч - Джавгат 3 : 1 Дюбек",
        dateLabel: "Вчера",
      },
      {
        id: "n2",
        category: "СОБЫТИЕ",
        imageUrl: require("@/shared/assets/images/ccgeneralslogo.png"),
        title: "Турнир по Generals: Zero Hour",
        dateLabel: "11.11.2026г",
      },
    ],
    deals: [
      { id: "d1", name: "Модель 3", price: 9_000, discount: 0.1 },
      { id: "d2", name: "Модель 4", price: 5_000_000, discount: 0.3 },
    ],
    announcement: {
      id: "a1",
      label: "ОБЪЯВЛЕНИЕ ДЛЯ РАЙОНА",
      title: "Сбор средств на постройку мечети",
      text: "Также необходима рабочая сила",
    },
  };
}

// Когда появится бэкенд:
// export const fetchHome = async (): Promise<HomeData> => {
//   const res = await fetch("https://api.example.com/home");
//   if (!res.ok) throw new Error("Ошибка сети");
//   return res.json();
// };
