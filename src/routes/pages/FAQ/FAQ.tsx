
import SectionFAQ from "../../../components/FAQsection/SectionFAQ";
import Container from "../../../components/container/Container";
const questions = [
  { id: 0, title: 'How Long Day Needed ?', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia similique minima excepturi pariatur modi perspiciatis nesciunt distinctio tenetur placeat dolor?' },
  { id: 1, title: 'How To Claim Insurance ?', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia similique minima excepturi pariatur modi perspiciatis nesciunt distinctio tenetur placeat dolor?' },
  { id: 2, title: 'Can I Request People Working ?', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia similique minima excepturi pariatur modi perspiciatis nesciunt distinctio tenetur placeat dolor?' },
]
const FAQ = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-[30px] my-[100px]">
        <div className="col-span-6 bg-[#C4C4C4]"></div>
        <div className="col-span-12 md:col-span-6">
          <SectionFAQ subTitle="First QUestion Answer" title='QUESTION ANSWER TRENDING WEEKLY' questions={questions}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </SectionFAQ>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[30px] mb-[100px]">
        <div className="col-span-12 md:col-span-6">
          <SectionFAQ subTitle="First QUestion Answer" title='QUESTION ANSWER TRENDING WEEKLY' questions={questions}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </SectionFAQ>
        </div>
        <div className="col-span-6 bg-[#C4C4C4]"></div>
      </div>
    </Container>
  );
};

export default FAQ;
