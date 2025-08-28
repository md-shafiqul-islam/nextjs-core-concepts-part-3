"use client";

import { postProduct } from "@/app/actions/products/postProduct";
import { useRouter } from "next/navigation";

export default function ProductAddForm() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    const { NEXT_PUBLIC_API_URL } = process.env;
    e.preventDefault();

    const form = e.target;
    const productName = form.productName.value;

    const payload = { productName };

    const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/items`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // const result = await postProduct(payload);
    console.log(result);

    form.reset();
    // alert("Product Added Successfully!!");
    router.push("/products");
    // router.refresh(); // caching should not be store
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          className="bg-white text-black"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
