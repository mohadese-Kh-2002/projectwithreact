import { type FC, useEffect, useState } from "react";
import Partner from "../../components/partner/Partner";
import Container from "../../components/container/Container";
import { getProjects } from "../../../fetch";
import { ProjectProps } from "../../../type";
import { MdDone } from "react-icons/md";
import Button from "../../components/button/Button";
const Projects = () => {
  const [projects, setProjects] = useState<ProjectProps[]>()
  useEffect(() => {
    getProjects().then(res => setProjects(res))
  }, [])
  return (
    <Container>
      <Partner />
      <div className="grid grid-cols-12 gap-[30px] mt-[100px]">
        {
          projects?.map(p => (
            <div key={p.id} className="col-span-12 sm:col-span-6 lg:col-span-4  bg-white h-[656px] ">
              <Card {...p} />
            </div>
          ))

        }
      </div>
    </Container>
  );
};

export default Projects;

export const Card: FC<ProjectProps> = ({ title, abilities }) => {
  return (
    <>
      <div className=" bg-[#C4C4C4] h-[450px]"></div>
      <div className="bg-white mx-[30px] -translate-y-36 p-[30px] h-[360px]">
        <h3 className="font-black text-[25px] tracking-[1.75px] mb-[15px] line-clamp-2">{title}</h3>
        <div className="flex gap-[15px] flex-col">
          {abilities.map(a => (
            <div className="flex items-center gap-2 text-[#6E6E6E]">
              <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#6E6E6E] line-clamp-1">
                <MdDone color="#fff" />
              </span>
              <span className="line-clamp-1">{a.ability}</span>
            </div>
          ))}
          <Button onClick={()=>window.scrollTo(0,document.documentElement.scrollHeight)} className="bg-primary w-[198px] h-[73px] px-0 py-0 mt-[30px]">Contact Us</Button>
        </div>
      </div>
    </>
  )
}