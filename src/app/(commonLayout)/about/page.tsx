"use client";

import { getBlogs } from "@/actions/blog.action";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [data,setData] = useState();
  const [error,setError] = useState<{message:string} | null>(null);

  console.log(data?.data?.data)
  console.log(error)

  useEffect(() => { 
    (async () => {
      const {data,error} = await getBlogs();
      
      setData(data)
      setError(error);
    })()
  },[])

  return (
    <div>This is about component.</div>
  )
}


// await new Promise((resolve) => setTimeout(resolve,4000))

  // throw new Error("Something went wrong!")