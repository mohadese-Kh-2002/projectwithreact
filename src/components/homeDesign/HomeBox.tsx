import  { ComponentPropsWithoutRef, FC } from "react";
type HomeBoxProps={
    title:string
}&ComponentPropsWithoutRef<'div'>
import { MdOutlineArrowRightAlt } from "react-icons/md";
const HomeBox:FC<HomeBoxProps> = ({title,className}) => {
  return(
    <div className={`${className}  text-white p-[30px] flex flex-col gap-[20px] max-h-[350px] h-full`}>
        <h3 className="text-[25px] font-black">{title}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        < MdOutlineArrowRightAlt fontSize={'45px'}/>
    </div>
  );
};

export default HomeBox;
