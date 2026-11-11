export type Product = {
  id: string;
  name: string;
  price: number | null;
  discount?: number | null;
  imageUrl?: string;
};

export type NewsItem = {
  id: string;
  category: string;
  title: string;
  dateLabel: string;
  imageUrl?: string;
};

export type HomeData = {
  featured: NewsItem & { timeAgo: string };
  recommended: Product[];
  news: NewsItem[];
  deals: Product[];
  announcement: { id: string; label: string; title: string; text: string };
};
