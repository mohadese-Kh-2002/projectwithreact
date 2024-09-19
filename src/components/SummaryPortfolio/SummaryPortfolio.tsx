 
import Title from "../title/Title";
import { MdDone } from "react-icons/md";
const SummaryPortfolio = () => {
 
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-[100px]">
        <div className="col-span-12 lg:col-span-6 ">
          <div className="bg-primary w-full h-full"></div>
        </div>
        <div className="col-span-12 lg:col-span-6 ">
          <Title subTitle='WHO WE ARE' title="WE ARE PERFECT TEAM FOR HOME INTERIOR DECORATION"><p >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p></Title>
        
          <div className="grid grid-cols-12 my-[30px] gap-[30px] sm:gap-0">
            <div className="col-span-12 sm:col-span-6 flex flex-col text-[#6E6E6E] gap-[15px]">
              <div className="flex items-center gap-2 text-[17px]">
                <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#6E6E6E]">
                  <MdDone color="#fff" />
                </span>

                Flexible Time
              </div>
              <div className="flex items-center gap-2 text-[17px]">
                <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#6E6E6E]">
                  <MdDone color="#fff" />
                </span>

                Perfect Work
              </div>
              <div className="flex items-center gap-2 text-[17px]">
                <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#6E6E6E]">
                  <MdDone color="#fff" />
                </span>

                Client Priority
              </div>
            </div>
            <div className=" col-span-12 sm:col-span-6 flex flex-col text-[#6E6E6E]  gap-[15px]">
              <div className="flex items-center gap-2 text-[17px]">
                <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#6E6E6E]">
                  <MdDone color="#fff" />
                </span>

                Flexible Time
              </div>
              <div className="flex items-center gap-2 text-[17px]">
                <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#6E6E6E]">
                  <MdDone color="#fff" />
                </span>

                Perfect Work
              </div>
              <div className="flex items-center gap-2 text-[17px]">
                <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#6E6E6E]">
                  <MdDone color="#fff" />
                </span>

                Client Priority
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 text-left sm:text-center gap-5 sm:gap-0">
            <div className=" col-span-12 sm:col-span-4">
              <h3 className="text-[45px] font-black text-primary">15Y</h3>
              <span className="font-semibold text-secondary tracking-[1.5px] text-[15px]">Experience</span>
            </div>
            <div className=" col-span-12 sm:col-span-4">
              <h3 className="text-[45px] font-black text-primary">25+</h3>
              <span className="font-semibold text-secondary tracking-[1.5px] text-[15px]">Best Team</span>
            </div>
            <div className=" col-span-12 sm:col-span-4">
              <h3 className="text-[45px] font-black text-primary">500+</h3>
              <span className="font-semibold text-secondary tracking-[1.5px] text-[15px]">Total Client</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default SummaryPortfolio;

