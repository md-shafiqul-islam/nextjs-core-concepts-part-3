import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-teal-500">
        <ul className="flex justify-around">
          <Link href="/">
            <li>Home</li>
          </Link>

          <Link href="/posts">
            <li>Posts</li>
          </Link>

          <Link href="/meals">
            <li>Meals</li>
          </Link>

          <Link href="/products">
            <li>Products</li>
          </Link>

          <Link href="/products/add">
            <li>AddProducts</li>
          </Link>

          <Link href="/register">
            <li>Register</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
