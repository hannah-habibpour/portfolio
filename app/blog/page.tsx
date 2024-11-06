import { BlogPost } from "../../components/blog-post";
import blogPosts from "../../data/blog-posts.json";

export default function Blog() {
  return (
    <div className="md:py-[58px] md:px-[150px]">
      <div className="text-[30px] md:text-[44px] md:mb-[18px]">Blog</div>
      <div>
        {blogPosts.map((blogPost) => (
          <BlogPost key={blogPost.id} blogPost={blogPost} />
        ))}
      </div>
    </div>
  );
}
