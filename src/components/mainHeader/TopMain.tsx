
import Container from "../container/Container";
import { Link, useLocation, useParams } from "react-router-dom";
import Button from "../button/Button";
import ContentHeader from "../contentHeader/ContentHeader";
import { type ReactNode } from "react";
const TopMain = ({error}:{error?:JSX.Element}) => {
    const {id}=useParams<{id:string}>()
    const { pathname } = useLocation()
    let content: ReactNode
    if (pathname === '/') {
        content = <div className="flex flex-col gap-[15px]">
            <h3 className=" font-black text-[17px] text-primary">WELCOME TO HOMCO</h3>
            <h1 className="text-[35px] sm:text-[60px] font-black flex flex-col tracking-[4.2px] text-center sm:text-left">
                <span className="whitespace-nowrap">BUILD YOUR</span>
                <span className="whitespace-nowrap">ELEGAN DREAM</span>
                <span className="whitespace-nowrap">HOME INTERIOR</span>

            </h1>
            <p className="text-[17px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Link to={'/projects'}>
                <Button className="bg-primary" >Our Project</Button>
            </Link>
        </div>
    } else if (pathname === '/services') {
        content = <ContentHeader title={'Our Services'} />
    } else if (pathname === '/about') {
        content = <ContentHeader title={'About Us'} />
    } else if (pathname === '/pages') {
        content = <ContentHeader title={'Blog'} />
    } else if (pathname === '/projects') {
        content = <ContentHeader title={'Projects'} />
    } else if (pathname === '/portfolio') {
        content = <ContentHeader title={'Portfolio Gallery'} />
    } else if (pathname === '/pages/FAQ') {
        content = <ContentHeader title={'FAQ'} />
    }  else if (pathname === `/pages/blog/${id}`) {
        content = <ContentHeader title={'Single Post'} />
    }else{
        content=error
    }



    return (
        <div className="bg-background py-[168px] text-white">
            <Container>
                {error ?(  <div className="h-screen">{content}</div>
                ):(<div className="grid grid-cols-12 text-center sm:text-left">
                    <div className="col-span-12 md:col-span-6">
                        {content}
                    </div>
                    <div className="col-span-12 md:col-span-6">

                    </div>
                </div>)}
            </Container>
        </div>
    );
};

export default TopMain;
