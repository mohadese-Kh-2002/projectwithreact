
import { ReactNode, type FC } from 'react';
import bgIcon from "/public/images/bg2.png";
type TitleProps = {
    subTitle: string
    title: string
    children?:ReactNode
}
const Title: FC<TitleProps> = ({ subTitle, title,children }) => {
    return (
        <div className=" flex  flex-col gap-[15px]relative z-10">
            <img src={bgIcon} alt="logo" className='absolute -z-10' />

            <h3 className="font-black  text-[15px] md:text-[17px] text-primary">{subTitle}</h3>
            <h2 className="font-black text-[30px] md:text-[45px] text-secondary  tracking-[3.15px]" >{title}</h2>
            <div className='flex flex-col gap-[15px] text-[#6E6E6E] text-[15px] md:text-[17px]'>
               {children}
            </div>

        </div>
    );
};

export default Title;
