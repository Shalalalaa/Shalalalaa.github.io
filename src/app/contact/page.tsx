export default function ContactPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold mt-10">Contact Me</h1>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-bold">Name:</label>
            <input type="text" className="border rounded w-full p-2" />
          </div>
          <div>
            <label className="block text-sm font-bold">Email:</label>
            <input type="email" className="border rounded w-full p-2" />
          </div>
          <div>
            <label className="block text-sm font-bold">Message:</label>
            <textarea className="border rounded w-full p-2"></textarea>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Send
          </button>
        </form>
      </div>
    );
  }
