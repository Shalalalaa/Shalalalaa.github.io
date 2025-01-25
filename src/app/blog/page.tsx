export default function BlogPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold mt-10">Blog</h1>
        <div className="mt-6">
          <article className="mb-4 border-b pb-4">
            <h2 className="text-2xl font-bold">Blog Post 1</h2>
            <p className="text-sm text-gray-500">January 25, 2025</p>
            <p className="mt-2">This is a summary of the blog post.</p>
          </article>
          <article className="mb-4 border-b pb-4">
            <h2 className="text-2xl font-bold">Blog Post 2</h2>
            <p className="text-sm text-gray-500">January 24, 2025</p>
            <p className="mt-2">This is another summary of the blog post.</p>
          </article>
        </div>
      </div>
    );
  }
  