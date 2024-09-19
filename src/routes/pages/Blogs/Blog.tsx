import  { useEffect, useState } from "react";
import { getBlog } from "../../../../fetch";
import { useParams } from "react-router-dom";
import { BlogProps } from "../../../../type";
import Container from "../../../components/container/Container";
const Blog = () => {
  const [blog, setBlog] = useState<BlogProps>()
  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    getBlog(id as string).then(res => setBlog(res))
  }, [])
  return (
    <Container>
      <div className="my-[100px]">
        <div className="flex gap-[30px] flex-col md:flex-row">
          <div className="basis-full md:basis-1/4 bg-[#C4C4C4]"></div>
          <div className="basis-full md:basis-3/4">
            <h2 className="text-[35px] font-black tracking-[3.17px] mb-[15px]">{blog?.title}</h2>
            <div className="text-[#6E6E6E] text-[17px] flex flex-col gap-[15px]">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>
        </div>
        <div className="text-[#6E6E6E] text-[17px] flex flex-col gap-[15px] mt-[30px]">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

          </p>
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
          <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.

          </p>
          <p>
            No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.

          </p>
          <p>
            No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.

          </p>
          <p>
            Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
