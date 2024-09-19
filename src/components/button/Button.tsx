import {ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonProps={
    children:ReactNode
}&ComponentPropsWithoutRef<'button'>
const Button = ({children,className,...props}:ButtonProps) => {
  return <button className={`${className}  w-[198px] text-white text-[15px] font-medium py-5 px-10 "`} {...props}>{children}</button>;
};

export default Button;
