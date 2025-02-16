import axios from "axios";
import React, { useState } from "react";

// This would be your data model that the backend sends
interface Post {
  id: number;
  title: string;
  body: string;
}

export default function App() {
  const [posts, setPosts] = useState<string>();
  // const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000`);
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">
        API Data Fetch with Vite + React
      </h1>
      <input
        type="string"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter number of posts"
        className="border p-2 rounded mr-2"
      />
      <button
        onClick={fetchPosts}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Loading..." : "Fetch Posts"}
      </button>
      <div className="mt-4 space-y-4">
        {
          <p className="text-gray-600">{posts}</p>

          /* you can use this snippet of code to loop through response objects to put them in the UI

           {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))} */
        }
      </div>
    </div>
  );
}
