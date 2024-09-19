import { type FC } from "react";
import { BlogProps } from "../../../type";
import { Link } from "react-router-dom";

const Blog: FC<BlogProps> = ({ title, id }) => {
    return (
        <div className='col-span-12 sm:col-span-6 lg:col-span-4' >
            <Link to={`/pages/blog/${id}`}>
                <div className="bg-[#c4c4c4] h-[250px]"></div>
                <div className="mt-[30px]">
                    <h2 className="font-black text-[18px] sm:text-[25px] text-[#1B1717] line-clamp-2">{title}</h2>
                    <p className="text-[#6E6E6E] text-[14px] sm:text-[17px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </Link>
        </div>
    )
};

export default Blog;
