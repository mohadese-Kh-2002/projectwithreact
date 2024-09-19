import { useEffect, useState } from "react";
import { getBlogs } from '../../../../fetch'
import { BlogProps } from '../../../../type'
import Blog from "../../../components/blog/Blog";
import Container from "../../../components/container/Container";
const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([])
  useEffect(() => {
    getBlogs().then(res => setBlogs(res))
  })


  return (
    <Container>
      <div className="grid grid-cols-12 gap-[30px] my-[100px]">
        {blogs.map(b => <Blog key={b.id} {...b} />)}
      </div>
    </Container>
  )
};

export default Blogs;
