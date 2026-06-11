import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./blogsData";
import profile from "../../assets/home/progile-image-2.jpg";

const BlogDetailsCard = () => {
  const { id } = useParams(); // get blog id from URL
  const blog = blogs.find((b) => b.id === Number(id));
  const [views, setViews] = useState(blog?.views ?? 0);

  useEffect(() => {
    if (!blog) return;

    // Simulate incrementing views (since we don't have a backend)
    setViews((prev) => prev + 1);
  }, [blog]);

  if (!blog) {
    return (
      <div className="py-20 text-center text-gray-500">Blog not found.</div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-12">
        {blog.title}
      </h1>

      {/* Author Info */}
      <div className="flex items-center gap-4 mb-8">
        <img
          src={profile}
          alt="Abdullah all Mojahid"
          className="rounded-full w-12 h-12 object-cover"
        />
        <div>
          <p className="font-semibold">Abdullah all Mojahid </p>
          <p className="text-gray-500 text-sm">
            {blog.createdAt
              ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "-"}{" "}
            • 
            {/* {views} views */}
          </p>
        </div>
      </div>

      {/* Cover Image */}
      {blog.image && (
      <div className="w-full mb-6 rounded-lg shadow-md">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto rounded-lg"
        />
      </div>
)}

      {/* Content */}
      <article className="prose prose-lg max-w-none text-gray-700 mt-8 font-semibold mb-4">
        <p><span className="font-bold  underline text-xl">Description:</span> {blog.content ?? blog.excerpt}</p>
      </article>


      {blog.tags && (
    <div className="flex gap-2 flex-wrap mt-4">
      {blog.tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm bg-gray-200 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  )}


    {/* Links */}
        {blog.links?.profile && (
          <div className="mt-4">
            <a
              href={blog.links.profile}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 font-semibold hover:underline"
            >
              🔗 Visit My Profile
            </a>
          </div>
        )}
    </main>
  );
};

export default BlogDetailsCard;
