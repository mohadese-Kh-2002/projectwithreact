
import Title from "../title/Title";
import Button from "../button/Button";
import { Link } from "react-router-dom";
Link
const Partner = () => {
  return(
    <div className="grid grid-cols-12 mt-[100px]  items-center">
        <div className="col-span-12 lg:col-span-6">
            <Title subTitle="Perfect Partner" title="WE HAVE PRIORITY FOR CAN CREATE DREAM HOME DESIGN">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </Title>
            <Button className="bg-primary mt-[30px]" >Portfolio</Button>
        </div>
        <div className="col-span-6 h-[760px] hidden lg:block">
            <div className="bg-[#c4c4c4] max-w-[500px] h-[350px] ml-auto"></div>
            <div className="bg-[#dadada] max-w-[500px] h-[350px] ml-auto -translate-x-[60px]
            -translate-y-[200px]"></div>
            <div className="bg-[#c4c4c4]  -translate-y-[300px] max-w-[500px] h-[350px] ml-auto"></div>
        </div>
    </div>
  );
};

export default Partner;
