export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // fetch data
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const singlePost = await res.json();

  return {
    title: singlePost.title,
    description: singlePost.body.slice(0, 100),
  };
}

export default async function SinglePostPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const singlePost = await res.json();

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center p-5">
          All information of post number {id} will displayed here.
        </h1>
      </div>

      <div>
        <p> Post ID: {singlePost.id}</p>
        <p className="text-2xl font-bold">Post Title: {singlePost.title}</p>
        <p className="text-sm font-semibold">Post Body: {singlePost.body}</p>
      </div>
    </div>
  );
}
