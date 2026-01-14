import type { CollectionEntry } from "astro:content";

export interface AdjacentContent {
  previous?: {
    id: string;
    title: string;
    pubDate: Date;
  };
  next?: {
    id: string;
    title: string;
    pubDate: Date;
  };
}

function getDate(item: CollectionEntry<"blog" | "sdk" | "legal">): Date {
  if (typeof item.data.date === "string") {
    return new Date(item.data.date);
  }
  return item.data.date as Date;
}

export function getAdjacentContent(
  items: CollectionEntry<"blog" | "sdk" | "legal">[],
  currentId: string,
): AdjacentContent {
  // Sort by publication date (newest first)
  const sortedItems = [...items].sort((a, b) => {
    return getDate(b).getTime() - getDate(a).getTime();
  });

  const currentIndex = sortedItems.findIndex((item) => item.id === currentId);

  if (currentIndex === -1) {
    return {};
  }

  const result: AdjacentContent = {};

  // Previous item (newer, previous in array)
  if (currentIndex > 0) {
    const prev = sortedItems[currentIndex - 1];
    result.previous = {
      id: prev.id,
      title: prev.data.title,
      pubDate: getDate(prev),
    };
  }

  // Next item (older, next in array)
  if (currentIndex < sortedItems.length - 1) {
    const next = sortedItems[currentIndex + 1];
    result.next = {
      id: next.id,
      title: next.data.title,
      pubDate: getDate(next),
    };
  }

  return result;
}
