import { type Product } from "../types";

export const getProducts = async (category?: string) => {
  const url = new URL(`${process.env.API_URL}/sites/MLA/search`);

  if (!process.env.SELLER_ID) throw new Error("No seller id");

  url.searchParams.append("seller_id", process.env.SELLER_ID);

  if (category) url.searchParams.append("category", category);

  const response = await fetch(url);
  const data = response.json() as Promise<{ results: Product[] }>;
  return (await data).results;
};
