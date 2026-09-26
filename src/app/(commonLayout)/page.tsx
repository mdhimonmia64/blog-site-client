import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default async function Home() {
    const {data} =await blogService.getBlogPosts({
      isFeatured:false
    },{
      cache:"no-store",
    });


  return (
    <div className="grid grid-cols-2 gap-5 max-w-7xl mx-auto">
      {data?.data?.data?.map((post : BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
