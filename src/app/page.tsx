export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-10">Welcome to My Website</h1>
      <p className="text-lg mt-4">I am [Your Name], a passionate developer.</p>
      <div className="mt-6">
        <a href="/portfolio" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Portfolio
        </a>
        <a href="/blog" className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          Read Blog
        </a>
      </div>
    </div>
  );
}
