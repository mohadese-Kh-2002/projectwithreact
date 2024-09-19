import { type FC, type ComponentPropsWithoutRef, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink,Link } from "react-router-dom";
type Menu = ComponentPropsWithoutRef<'a'>;
const Menu: FC<Menu> = ({ className, ...props }) => {
    const subMenu=useRef<HTMLUListElement>(null)
    const handleOpenSubMenu=()=>{
        
        subMenu.current!.style.transform='scaleY(1)'
    }
    const handleCloseSubMenu=()=>{
        subMenu.current!.style.transform='scaleY(0)'
    }
    return (
        <>
            <ul className={`${className} flex items-center gap-[34px] h-full`} >
                <li className="flex items-center justify-center">
                    <NavLink to='/' className="text-white font-semibold text-[15px]  " {...props} style={({ isActive }) => ({ color: isActive ? "#757575" : "" })}>Home</NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <NavLink to='/about' className="text-white font-semibold text-[15px]" {...props}  style={({ isActive }) => ({ color: isActive ? "#757575" : "" })}>ABOUT US</NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <NavLink to='/services' className="text-white font-semibold text-[15px] " {...props}  style={({ isActive }) => ({ color: isActive ? "#757575" : "" })}>OUR SERVICES</NavLink>
                </li>
                <li className="flex items-center">
                    <NavLink to='/projects' className="text-white font-semibold text-[15px] " {...props}  style={({ isActive }) => ({ color: isActive ? "#757575" : "" })}>OUR PROJECTS</NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <NavLink to='portfolio' className="text-white font-semibold text-[15px] " {...props}  style={({ isActive }) => ({ color: isActive ? "#757575" : "" })}>Portfolio</NavLink>
                </li>
                <li className="flex items-center relative" onMouseEnter={handleOpenSubMenu} onMouseLeave={handleCloseSubMenu}>
                    <NavLink to='/pages' className="text-white font-semibold text-[15px] " style={({ isActive }) => ({color: isActive ? "#757575" : "" })}>Pages</NavLink>
                    <RiArrowDropDownLine  className="text-white text-[25px]" />
                    <ul ref={subMenu} className="scale-y-0 h-fit text-white text-[15px] font-semibold transition-all duration-100 origin-top absolute right-0 left-0 top-[30px] bg-secondary p-5 flex flex-col gap-3">
                        <li>
                            <Link to={'/pages/FAQ'}>FAQ</Link>
                        </li>
                        <li>
                            <Link to={'/pages'}>Blog</Link>
                        </li>
                    </ul>
                </li>

            </ul>
            
        </>
    );
};

export default Menu;
