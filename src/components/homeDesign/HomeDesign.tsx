
import { ComponentPropsWithoutRef, FC } from "react";

import HomeBox from "./HomeBox";
type HomeDesign=ComponentPropsWithoutRef<'div'>
const HomeDesign:FC<HomeDesign> = ({className}) => {
    return (


        <>
            <div className={`grid grid-cols-12 w-full translate-y-[-80px] ${className}`}>
                <div className="col-span-12 lg:col-span-4">
                    <HomeBox title="HOME DESIGN CONSULTATION" className="bg-secondary" />
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <HomeBox title="HOME DESIGN 3D 2D INTERIOR SERVICE" className="bg-primary" />
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <HomeBox title="HOME DESIGN CONSULTATION" className="bg-secondary" />
                </div>
            </div>
        </>


    );
};

export default HomeDesign;
