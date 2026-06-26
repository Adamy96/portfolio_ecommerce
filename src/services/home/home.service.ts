import { homeMock } from "@/mocks/home.mock";
import type { HomeData } from "@/types/home.types";
import { delay } from "@/utils/delay";

export const getHomeData = async (): Promise<HomeData> => {
  await delay(300);

  return structuredClone(homeMock);
};
