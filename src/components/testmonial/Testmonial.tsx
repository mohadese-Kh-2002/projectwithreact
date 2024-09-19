import { type FC, type ReactNode } from "react";
import Title from "../title/Title";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
type Testimonial = {
    title: string
    subTitle: string
    children: ReactNode
}
const Testimonial: FC<Testimonial> = ({ title, subTitle, children }) => {
    return (
        <div className="grid grid-cols-12 mt-[100px] mb-[100px] order-3 gap-[30px]">
            <div className="col-span-12 lg:col-span-6 order-3   lg:order-1">
                <Title subTitle={subTitle} title={title}>
                    {children}
                </Title>
            </div>
            <div className="flex flex-col gap-[15px] col-span-12 lg:col-span-6 border-[1px] border-[#DADADA] p-[30px]  order-0 lg:order-1">
                <div className="flex gap-4 text-[#3F3F3F] items-center">
                    <FaStar fontSize={'20px'} />
                    <FaStar fontSize={'20px'} />
                    <FaStar fontSize={'20px'} />
                    <FaStar fontSize={'20px'} />
                    <FaStarHalfAlt fontSize={'20px'} />
                </div>
                <p className="text-[#6E6E6E]  text-[15px] sm:text-[17px] ">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <div className="flex items-center gap-[15px]">
                    <span className="w-[60px] h-[60px] sm:w-[85px] sm:h-[85px] bg-[#c4c4c4] block rounded-full"></span>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-[15px] font-bold sm:text-[17px] sm:font-black text-secondary">John De</h3>
                        <h5 className="text-[15px] sm:font-semibold text-primary">Art Director</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
