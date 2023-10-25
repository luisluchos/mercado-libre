import { Products } from "../components/Products";
import { getProducts } from "../services";

export default async function ProductsPage({ params }: { params: { segments: string[] } }) {

const [segments] = params.segments  // nos devuelve un array y solo queremos el primer elemento
console.log(segments)
  const products = await getProducts(segments);
  console.log(products)
  return <Products products={products} />;
}
