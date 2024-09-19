import  { createRef,  useRef, type FC, type ReactNode } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Title from "../title/Title";
type SectionFAQ = {
    subTitle: string
    title: string
    children?: ReactNode
    questions?: Question[]
}
type Question = {
    id: number
    title: string
    body: string
}
const SectionFAQ: FC<SectionFAQ> = ({ subTitle, title, children, questions }) => {
    const body = useRef<any[]>([])
    body.current = questions!.map((q) => body.current[q.id] ?? createRef())
    const handleOPen = (id: number) => {
        body.current.map(q => q.current.style.cssText = 'transform:scaleY(0);height:0')

        body.current[id].current.style.cssText = 'transform:scaleY(1);height:inherit'
    }

    return (
        <div>
            <Title subTitle={subTitle} title={title} >{children}</Title>
            <div className="flex flex-col gap-[30px] mt-[30px]">
                {questions?.map(q => (
                    <div key={q.id} className="border-b-[1px] border-b-[#DADADA] pb-[15px]" onClick={() => handleOPen(q.id)}>
                        <div className="flex items-center justify-between pb-[15px]">
                            <h3 className="font-black text-[17px] sm:text-[20px] text-[#1B1717]">{q.title}</h3>
                            <RiArrowDropDownLine fontSize={'30px'} />
                        </div>
                        <div className="text-[17px] h-0 overflow-y-hidden scale-y-0 text-[#6E6E6E] transition-all duration-100 origin-top" ref={body.current[q.id]}>
                            <p>{q.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SectionFAQ;
