// pages/blog/[id].js
import { useRouter } from "next/router";
import blogData from "../../blogData.json";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogData[id];

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
