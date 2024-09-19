
import Container from "../container/Container";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
const Footer = () => {
 const navigate= useNavigate()
  return (
    <footer className="bg-secondary min-h-[750px] pt-[326px] text-white mt-[200px] " >
      <Container>
        <div className="bg-primary py-[40px] px-[60px] sm:py-[103px] sm:px-[114px] relative -translate-y-[350px]">

          <div className="shadow-md  absolute -top-20 right-0 left-0 mx-[114px] hidden  bg-white md:flex items-center justify-center py-[30px] px[60px] lg:px-[114px]">
            <svg width={199} height={112} viewBox="0 0 199 112" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width={199} height={112} fill="url(#pattern0_6_377)" />
              <defs>
                <pattern id="pattern0_6_377" patternContentUnits="objectBoundingBox" width={1} height={1}>
                  <use xlinkHref="#image0_6_377" transform="matrix(0.00564972 0 0 0.0100383 0 -0.00191687)" />
                </pattern>
                <image id="image0_6_377" width={177} height={100} xlinkHref="data:image/png;base64,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" />
              </defs>
            </svg>
            <svg width={198} height={112} viewBox="0 0 198 112" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width={198} height={112} fill="url(#pattern0_6_378)" />
              <defs>
                <pattern id="pattern0_6_378" patternContentUnits="objectBoundingBox" width={1} height={1}>
                  <use xlinkHref="#image0_6_378" transform="matrix(0.00565657 0 0 0.01 -0.000606061 0)" />
                </pattern>
                <image id="image0_6_378" width={177} height={100} xlinkHref="data:image/png;base64,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" />
              </defs>
            </svg>
            <svg width={199} height={113} viewBox="0 0 199 113" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width={199} height={113} fill="url(#pattern0_6_379)" />
              <defs>
                <pattern id="pattern0_6_379" patternContentUnits="objectBoundingBox" width={1} height={1}>
                  <use xlinkHref="#image0_6_379" transform="matrix(0.00567839 0 0 0.01 -0.00253769 0)" />
                </pattern>
                <image id="image0_6_379" width={177} height={100} xlinkHref="data:image/png;base64,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" />
              </defs>
            </svg>


            <svg width={198} height={112} viewBox="0 0 198 112" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width={198} height={112} fill="url(#pattern0_6_380)" />
              <defs>
                <pattern id="pattern0_6_380" patternContentUnits="objectBoundingBox" width={1} height={1}>
                  <use xlinkHref="#image0_6_380" transform="matrix(0.00565657 0 0 0.01 -0.000606061 0)" />
                </pattern>
                <image id="image0_6_380" width={177} height={100} xlinkHref="data:image/png;base64,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" />
              </defs>
            </svg>



          </div>
          <h3 className="text-[25px] md:text-[45px] font-black">LETS CHANGE YOUR OWN HOME INTERIOR DESIGN NOW</h3>
          <Button className="bg-secondary/100" type="button" onClick={()=>{window.scrollTo(0,document.documentElement.scrollHeight)}}>Contact Us</Button>
        </div>
        <div className="grid grid-cols-12 gap-10 xl:gap-4  mb-[60px]">
          <div className="col-span-12 xl:col-span-6">
            <h3 className="text-[25px] font-black ">Information</h3>
            <p className="min-w-[300px] max-w-[320px] mt-2 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="flex items-center gap-2">
              <span className="w-[30px] h-[30px] hover:bg-white transition-all duration-100 bg-background flex justify-center items-center rounded-md">
                <FaFacebookF color="#1B1717" />
              </span>
              <span className="w-[30px] h-[30px] hover:bg-white transition-all duration-100 bg-background flex justify-center items-center rounded-md">
                <FaTwitter color="#1B1717" />
              </span>
              <span className="w-[30px] h-[30px] hover:bg-white transition-all duration-100 bg-background flex justify-center items-center rounded-md">
                <FaInstagram color="#1B1717" />
              </span>
              <span className="w-[30px] h-[30px] hover:bg-white transition-all duration-100 bg-background flex justify-center items-center rounded-md">
                <FaLinkedinIn color="#1B1717" />
              </span>

            </div>
          </div>
          <div className="col-span-12 xl:col-span-3">
            <h3 className="text-[25px] font-black ">Navigation</h3>
            <ul className="mt-2 flex flex-col gap-[15px] ">
              <li className="flex items-center gap-2 group-hover:ms-4 ">
                <MdKeyboardArrowRight />
                <button className="text-[17px] hover:ms-4 transition-all duration-100" onClick={()=>{
                  navigate('/')
                  window.scrollTo(0,0)
                }}>HomePage</button>
              </li>
              <li className="flex items-center gap-2  ">
                <MdKeyboardArrowRight />
                <button className="text-[17px] hover:ms-4 transition-all duration-100" onClick={()=>{
                  navigate('/about')
                  window.scrollTo(0,0)
                }}>About Us</button>
              </li>
              <li className="flex items-center gap-2 ">
                <MdKeyboardArrowRight />
                <button className="text-[17px] hover:ms-4 transition-all duration-100" onClick={()=>{
                  navigate('/services')
                  window.scrollTo(0,0)
                }}>Services</button>
              </li>
              <li className="flex items-center gap-2 ">
                <MdKeyboardArrowRight />
                <button className="text-[17px] hover:ms-4 transition-all duration-100" onClick={()=>{
                  navigate('/projects')
                  window.scrollTo(0,0)
                }}>Projects</button>
              </li>
            </ul>
          </div>
          <div className="col-span-12 xl:col-span-3">
            <h3 className="text-[25px] font-black ">Contact Us</h3>
            <div className="mt-2 flex gap-[15px] flex-col">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-background " />
                <span>Lumbung Hidup East Java</span>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-background" />
                <span>Hello@Homco.com</span>
              </div>
              <form className="mt-[7px] flex flex-col gap-[15px] ">
                <input type="text" placeholder="Email Address" className="outline-none py-4 w-[300px] px-3  placeholder:text-white placeholder:text-[17px] bg-white/25 border-b-4  " />
                <Button type="submit" className="bg-white/25 w-[198px] text-white text-[15px] font-medium py-5 px-10 ">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t ">
        <Container>
          <div className="flex items-center justify-between py-[35px] text-[15px] font-semibold flex-col gap-5 lg:flex-row">
            <p >Allright Reserved - Homco Interior</p>
            <div className="flex items-center gap-5 md:gap-[60px] flex-col md:flex-row">
              <span>DIsclaimer</span>
              <span>Privacy Policy</span>
              <span>Term Of Use</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
