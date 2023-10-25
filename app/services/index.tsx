import { type Product, type Category } from "../types";

export const getProducts = async (category?: string) => {
  const url = new URL(`${process.env.API_URL}/sites/MLA/search`);

  if (!process.env.SELLER_ID) throw new Error("No seller id");

  url.searchParams.append("seller_id", process.env.SELLER_ID);

  if (category) url.searchParams.append("category", category);

  const response = await fetch(url);
  const data = response.json() as Promise<{ results: Product[] }>;
  return (await data).results;
};

export const getCategories = async (products: Product[]) => {
  const ids = Array.from(
    new Set(products.map((product) => product.category_id))
  );
console.log(ids)
  const allProductCategories = await Promise.all(
    ids.map((id) =>
      fetch(`https://api.mercadolibre.com/categories/${id}`)
        .then(
          (res) =>
            res.json() as Promise<{
              path_from_root: { id: string; name: string }[];
            }>
        )
        .then((res) => res.path_from_root)
    )
  );
  console.log(allProductCategories);
  const draft: Record<string, Category> = {};
  allProductCategories.forEach((productCategories) => {
    productCategories.forEach((singleCategory, index) => {
      const { id } = singleCategory;
      const parent = productCategories[index - 1];
      const parentID = parent ? parent.id : null;

      draft[id] = { ...singleCategory, parentID };
    });
  });
  console.log(draft);
  console.log(Object.values(draft));
  return Object.values(draft);
};
