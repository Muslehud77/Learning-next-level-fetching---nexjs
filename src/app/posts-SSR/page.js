import Link from 'next/link';
import React from 'react';

const PostsPage = async () => {

    const res = await fetch("http://localhost:7000/posts",{
        cache:"no-store"
    });
    const posts = await res.json()


    return (
      <div className="container mx-auto">
        <h1 className="text-5xl text-center mt-5">
          Posts SSR Server Side Rendering : {posts.length}
        </h1>
        <div className="grid grid-cols-3 gap-10 mt-5">
          {posts.map((post) => (
            <div key={post.id} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <p className="font-bold">Likes {post.likes_count}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={`/posts-SSR/${post.id}`}
                    className="btn btn-primary"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default PostsPage;