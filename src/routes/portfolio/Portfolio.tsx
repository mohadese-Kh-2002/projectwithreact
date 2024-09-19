
import Title from "../../components/title/Title";
import Container from "../../components/container/Container";
import { MdDone } from 'react-icons/md'
const Portfolio = () => {
    return (
        <Container>
            <div className="grid grid-cols-12 gap-[30px] my-[100px]">
                <div className="col-span-12 lg:col-span-6 bg-[#C4C4C4]"></div>
                <div className="col-span-12 lg:col-span-6">
                    <Title subTitle="Team Working" title="LETS SEE OUR PERFECT TEAM WORKER">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </Title>

                    <div className="flex flex-col text-[#6E6E6E] gap-[15px] mt-[30px]">
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
            </div>
            <div className="mb-[100px] flex flex-col gap-[30px]">
                <Title subTitle="Portfolio" title="OUR RECENT WORK" />
                <div className="grid grid-cols-12 grid-rows-[repeat(8,minmax(200px,300px))] sm:grid-rows-[repeat(5,minmax(200px,300px))] md:grid-rows-[repeat(3,minmax(200px,300px))] mt-[82px] gap-[30px]">
                    <div className="col-span-12 sm:col-span-6 md:col-span-5 row-span-1  bg-[#c4c4c4]"></div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-7 row-span-1 bg-[#c4c4c4]"></div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 row-span-1 bg-[#c4c4c4]"></div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 row-span-1 bg-[#c4c4c4]"></div>
                    <div className="col-span-12 sm:col-span-12 md:col-span-4 row-span-1 bg-[#c4c4c4]"></div>

                    <div className="col-span-12 sm:col-span-7 bg-[#c4c4c4]"></div>
                    <div className="col-span-12 sm:col-span-5 bg-[#c4c4c4]"></div>
                    <div className="col-span-12 sm:col-span-12 bg-[#c4c4c4]"></div>

                </div>
            </div>
        </Container>
    );
};

export default Portfolio;
