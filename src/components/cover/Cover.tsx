import { ComponentPropsWithoutRef } from "react";


const Cover = ({...props}:ComponentPropsWithoutRef<'div'>) => {
  return <div className="fixed w-screen h-screen bg-black/20 inset-0 z-20 lg:hidden" {...props}></div>;
};

export default Cover;
