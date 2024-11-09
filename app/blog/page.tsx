import { BlogPostType } from "../../contracts/types";
import blogPosts from "../../data/blog-posts.json";
import { BlogPost } from "../../components/blog-post";

export default function Blog() {
  const blogPostData: BlogPostType[] = blogPosts;
  const sortedBlogPosts = blogPostData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <div className="md:py-[58px] md:px-[150px]">
      <div className="text-[30px] md:text-[44px] md:mb-[18px]">Blog</div>
      <div>
        <BlogPosts blogPosts={sortedBlogPosts} />
      </div>
    </div>
  );
}

interface BlogPostProps {
  blogPosts: BlogPostType[];
}

function BlogPosts({ blogPosts }: BlogPostProps) {
  return (
    <div>
      {blogPosts.length === 0 ? (
        <div>No blog posts found</div>
      ) : (
        blogPosts.map((blogPost) => (
          <BlogPost key={blogPost.id} blogPost={blogPost} />
        ))
      )}
    </div>
  );
}
