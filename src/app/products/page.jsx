import dbConnect from "@/lib/dbConnect";
import { redirect } from "next/navigation";
import { getProducts } from "../actions/products/getProducts";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const { NEXT_PUBLIC_API_URL } = process.env;
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/items`, {
    cache: "force-cache",
  });
  const products = await res.json();

  // const products = await getProducts();
  // if (products.length > 3) {
  //   redirect("/");
  // }

  return (
    <div>
      {products.map((product) => (
        <ul key={product._id}>
          <li>{product.productName}</li>
        </ul>
      ))}
    </div>
  );
}
