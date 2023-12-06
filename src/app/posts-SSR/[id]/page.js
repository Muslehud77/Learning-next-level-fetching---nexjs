
import GoBack from "@/Coponents/Goback";

export async function generateStaticParams() {

    const res = await fetch("http://localhost:7000/posts");
    const posts = await res.json()
    const ids = posts.map((post) => {
        return {
            id : post.id+''
        }
    })
    
  return ids;
}

import React from "react";

const DetailPage = async ({ params }) => {
  

  const res = await fetch(`http://localhost:7000/posts/${params.id}`);
  const details = await res.json();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{details.title}</h2>
          <p>{details.description}</p>
          <p className="font-bold">Likes {details.likes_count}</p>
          <div className="card-actions justify-end">
           <GoBack/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
