
"use client"

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { blogs } from "@/utils/blogs";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";

const BlogsPage = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container mx-auto md:px-[8%] px-4 pt-20 font-serif bg-[#0f172a] min-h-screen text-slate-100">
      <div>
        <Link
          href="/"
          className="flex w-fit items-center gap-2 text-teal-400 group font-serif"
        >
          <GoArrowLeft className="group-hover:-translate-x-1 transition-all text-xl" />
          Kamrul Hassan
        </Link>
        <h1 className="text-5xl font-semibold text-center mb-10">My Blogs</h1>
      </div>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-6 bg-[#1e293b] rounded-xl shadow-md hover:shadow-lg transition-shadow relative"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={blog.authorPhoto}
                  alt={`${blog.author}'s photo`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-2xl font-bold text-teal-400">{blog.title}</h2>
                  <p className="text-sm text-gray-400">
                    By {blog.author} on {blog.date}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                {blog.content.substring(0, 100)}...
              </p>
              <button
                onClick={() => handleDropdownToggle(blog.id)}
                className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition"
              >
                {openDropdown === blog.id ? "Show Less" : "See More"}
              </button>

              {/* Dropdown for full blog content */}
              {openDropdown === blog.id && (
                <div className="absolute left-0 top-full mt-2 w-full bg-[#0f172a] border border-teal-500 p-4 rounded-md shadow-lg z-10">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-400 mb-1">
                    By {blog.author} on {blog.date}
                  </p>
                  <p className="text-gray-300">{blog.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogsPage;
