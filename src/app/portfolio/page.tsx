export default function PortfolioPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold mt-10">My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">Project 1</h2>
            <p className="mt-2">Description of Project 1.</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">Project 2</h2>
            <p className="mt-2">Description of Project 2.</p>
          </div>
        </div>
      </div>
    );
  }
  