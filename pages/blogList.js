// components/BlogList.js
import Link from "next/link";
import { useState, useEffect } from "react";

const BlogList = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("/api/blogData")
      .then((response) => response.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogData.map((blog, index) => (
          <li key={index}>
            <Link href={`/blog/${index}`}>
              <h3 className="text-red-500 font-bold cursor-pointer">
                {blog.title}
              </h3>
            </Link>
            <p className="mx-3">{blog.content.substring(0, 300)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
