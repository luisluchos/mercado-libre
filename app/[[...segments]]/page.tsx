import { Products } from "../components/Products";
import { getProducts } from "../services";

export default async function ProductsPage({ params }: { params: { segments: string[] } }) {

const [segments] = params.segments  // nos devuelve un array y solo queremos el primer elemento
  const products = await getProducts(segments);
  return <Products products={products} />;
}
