import Link from "next/link";

export function BlogPost({ blogPost }: any) {
  return (
    <div>
      <Link href={blogPost.blogUrl}>
        <div className="text-[26px] md:text-[30px]">{blogPost.title}</div>
        <div className="text-[14px] md:text-[16px] flex items-center">
          <div>{blogPost.date}</div>
          <div className="px-[10px]">|</div>
          <div className="text-[#8695A4]">{blogPost.tags}</div>
        </div>
        <div className="line-clamp-3">{blogPost.description}</div>
        <hr className="my-[16px]" />
      </Link>
    </div>
  );
}
