import bgIcon from "/public/images/bg.png";

const ContentHeader = ({title}:{title:string}) => {
    return (
        <div className="relative z-20">
            <img src={bgIcon} alt="bg" className="absolute z-10" />
            <h2 className="text-[35px] sm:text-[60px] font-black">{title}</h2>
            <p className="text-[17px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
    );
};

export default ContentHeader;
