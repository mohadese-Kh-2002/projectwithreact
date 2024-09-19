import{ReactNode, type FC} from "react";
import Title from "../title/Title";
import { FaHome,FaPencilRuler  } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";

const Producer = () => {
  return(
    <div className="mt-[100px]">
    <Title subTitle="How We Work" title="OUR WORK PROCEDURE"/>
    <div className="grid grid-cols-12 gap-[30px] mt-[64px]">
        <div className="col-span-12 lg:col-span-4">
            <Card title={'CLIENT DESIGN CONSULTATION'} dark={false}>
                <IoChatbubblesSharp fontSize={'45px'}/>
            </Card>
        </div>
        <div className="col-span-12 lg:col-span-4">
            <Card title={'PROTOTYPING HOME DESIGN'} dark={true}>
                <FaPencilRuler fontSize={'45px'} color="#fff"/>
            </Card>
        </div>
        <div className="col-span-12 lg:col-span-4">
            <Card title={'PROCESSING TO DESIGN HOME'} dark={false}>
                <FaHome fontSize={'45px'}/>
            </Card>
        </div>
    </div>
    </div>
  );
};

export default Producer;
type Card={
   children:ReactNode
   title:string
   dark:boolean
}
export const Card:FC<Card>=({children,title,dark})=>{
    return(
      <div className={`${dark?'bg-primary':'bg-white'} border-[1px] border-[#dadada] p-[30px] flex flex-col gap-[15px]`}>
        {children}
        <h4 className={`${dark?'text-white':'text-[#1B1717]'} font-black text-[25px]`}>{title}</h4>
        <p className={`${!dark ? 'text-[#6E6E6E]':'text-white'} text-[17px]`} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
    )
  }