import Button from "../../components/button/Button";
import TopMain from "../../components/mainHeader/TopMain";
import  { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate=useNavigate()
  const errorContent=<div className="text-center">
            <h1 className="font-black text-[40px] md:text-[60px] lg:text-[100px] tracking-[7px]">ERROR 404</h1>
            <p className="font-black text-[20px] md:text-[25px]">PAGE NOT FOUND, PLEASE GO BACK</p>
            <Button type='button' className="mt-5" onClick={() => navigate("/", { replace: true })}>Order Now</Button>
        </div>
  return (
    <TopMain error={errorContent}/>
  );
};

export default NotFound;
