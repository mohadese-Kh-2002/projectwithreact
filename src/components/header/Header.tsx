import { useState } from "react";
import logo from '/public/images/logo-Homco.png'
import Cover from "../cover/Cover";
import Container from "../container/Container";
import { FaBars } from "react-icons/fa";
import Menu from "../menu/Menu";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <header className="bg-background py-3 border-b-2 border-[rgba(255, 255, 255, 0.25)]">
                <Container>
                    <nav className="flex justify-between items-center ">
                        <img src={logo} alt="logo" className="object-contain w-1/4" />
                        <Menu className="hidden lg:flex " />
                        <FaBars className="flex lg:hidden text-[25px] text-white " onClick={() => setIsOpen(!isOpen)} />
                    </nav>
                </Container>


                {isOpen ?
                    <div className="lg:hidden fixed top-0 left-0 w-[50vw] translate-x-0 z-50 h-screen bg-primary/5 backdrop-blur-sm transition-all duration-100">
                        <Menu className="flex-col items-baseline gap-[40px] ps-10 pt-5 " />
                    </div> :
                    <div className="lg:hidden fixed top-0 left-0 w-[50vw] translate-x-[-100%] z-50 h-screen bg-primary/5 backdrop-blur-sm transition-all duration-100">
                        <Menu className="flex-col items-baseline gap-[40px] ps-10 pt-5 " />
                    </div>
                    }

            </header>
            
            {isOpen && <Cover onClick={()=>setIsOpen(false)}/>}
               
        </>
    );
};
export default Header;
