import { Product } from "./../types";

 export function Products({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {products.map((product) => (
        <li key={product.id} className="border border-gray-300 rounded-md p-4">
          <img src={product.thumbnail} alt={product.title} />
          <h3 className="text-gray-600">{product.title}</h3>
          <strong className="text-gray-600">
            {product.price.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </strong>
        </li>
      ))}
    </ul>
  );
}