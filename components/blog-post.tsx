export function BlogPost({ blogPost }: any) {
  return (
    <div>
      <div className="text-[26px] md:text-[30px]">{blogPost.title}</div>
      <div className="text-[16px] md:text-[20px] flex items-center">
        <div>{blogPost.date}</div>
        <div className="px-[4px]">|</div>
        <div className="text-[#8695A4]">{blogPost.tags}</div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quae quos rerum ex, distinctio quia consequuntur eveniet ullam provident
        alias reprehenderit quasi neque ea error id dolor. Nulla, sapiente
        provident!
      </div>
      <hr />
    </div>
  );
}
