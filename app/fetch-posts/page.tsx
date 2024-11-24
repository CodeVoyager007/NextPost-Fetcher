'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
 

const FetchPostsPage = () => {
  const [posts, setPosts] = useState<{ id: number; title: string; body: string; author?: string; date?: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/external');
      const data = await res.json();
      if (data.success) {
        setPosts(data.data);
      } else {
        console.error(data.message);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="text-muted">Loading...</p>;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-5 space-y-6">
        <h1 className="text-6xl font-semibold text-primary font-serif">Posts:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="bg-white p-5 shadow-lg rounded-md transition-transform transform hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl text-black font-bold font-serif">{post.title}</h2>
              <p className="text-black mt-2 font-serif">{post.body}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-black font-serif">{post.author || 'Unknown Author'}</span>
                <span className="text-sm text-black font-serif">{post.date ? new Date(post.date).toLocaleDateString() : 'No Date'}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchPostsPage;
