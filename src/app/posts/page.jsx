import Link from "next/link";

export const metadata = {
  title: "All Posts",
  description: "Loading JSON placeholder posts using Server Component",
};

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center p-5">
          All {posts.length} will displayed here.
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {posts.map((post) => (
          <div key={post.id} className="border border-orange-500 p-5">
            <p className="text-2xl font-bold">Post Title: {post.title}</p>
            <p className="text-sm font-semibold">Post Body: {post.body}</p>

            <button className="bg-purple-500 p-2 rounded-xl">
              <Link href={`/posts/${post.id}`}>Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
