import { type FC, type ReactNode } from "react";
import HomeDesign from "../../components/homeDesign/HomeDesign";
import Container from "../../components/container/Container";
import Producer from "../../components/Producer/Producer";
import { MdDone } from "react-icons/md";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import Testimonial from "../../components/testmonial/Testmonial";
const abilitis = [
  { id: 1, ability: 'Prebuild Home' },
  { id: 2, ability: 'Home Design Planning' },
  { id: 3, ability: 'Trend Home Design' },
]
const Services = () => {
  return (
    <>
      <Container>
        <HomeDesign className="translate-y-[0] mt-[100px]" />
        <Producer />
        <Section abilities={abilitis} subTitle="Design Consultation" title="HOME DESIGN CONSULTATION SERVICES" isBtn={true}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </Section>

        <div className="grid grid-cols-12 gap-[30px] my-[100px]">

          <div className="col-span-12 lg:col-span-6">
            <Title subTitle="Design Consultation" title="HOME DESIGN 3D 2D INTERIOR SERVICES">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

            </Title>

            <div className="flex flex-col text-[#6E6E6E] gap-[15px] mt-[30px]">
              <div className="flex items-center gap-2 text-[17px]">
                <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#6E6E6E]">
                  <MdDone color="#fff" />
                </span>

                Prebuild Home
              </div>
              <div className="flex items-center gap-2 text-[17px]">
                <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#6E6E6E]">
                  <MdDone color="#fff" />
                </span>

                Home Design Planning
              </div>
              <div className="flex items-center gap-2 text-[17px]">
                <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#6E6E6E]">
                  <MdDone color="#fff" />
                </span>

                Trend Home Design
              </div>
            </div>
            <Button type="button" className="bg-primary/100 mt-[30px]" onClick={() => scrollTo(0, document.documentElement.scrollHeight)}>Contact Us</Button>
          </div>
          <div className="col-span-12 lg:col-span-6 bg-[#C4C4C4]"></div>
        </div>
        <Section abilities={abilitis} subTitle="Design Consultation" title="ALL IN ONE HOME INTERIOR DESIGN" isBtn={true}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </Section>
          <Testimonial title="OUR TESTIMONIAL FROM BEST CLIENTS" subTitle="Clients Feedback">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </Testimonial>



      </Container>

    </>
  );
};

export default Services;
type SectionProps = {
  subTitle: string
  title: string
  children?: ReactNode
  isBtn: boolean
  abilities: { id: number, ability: string }[]
}
export const Section: FC<SectionProps> = ({ subTitle, title, children, isBtn, abilities }) => {
  let a, b = null
  if (abilities.length >= 4) {
    a = abilities.slice(0, 3)
    b = abilities.slice(3, abilities.length)
  }
  return (
    <div className="grid grid-cols-12 gap-[30px] my-[100px]">
      <div className="col-span-12 lg:col-span-6 bg-[#C4C4C4]"></div>
      <div className="col-span-12 lg:col-span-6">
        <Title subTitle={subTitle} title={title}>
          {children}
        </Title>
        <div className="grid grid-cols-12 mt-[30px] gap-[15px] sm:gap-0">
          {
            abilities.length >= 4 ? (
              < >
                <div className="grid col-span-12 sm:col-span-6 gap-[15px]">
                  {a!.map(A => (
                    <div key={A.id} className="flex items-center gap-2 text-[17px] text-[#6E6E6E]">
                      <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#6E6E6E]">
                        <MdDone color="#fff" />
                      </span>
                      {A.ability}
                    </div>
                  ))}
                </div>
                <div className="grid col-span-12 sm:col-span-6 gap-[15px]">
                  {b!.map(B => (
                    <div key={B.id} className="flex items-center gap-2 text-[17px] text-[#6E6E6E]">
                      <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#6E6E6E]">
                        <MdDone color="#fff" />
                      </span>
                      {B.ability}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="grid col-span-12 gap-[15px]">
                {
                  abilities.map(a => (
                    <div key={a.id} className="flex items-center gap-2 text-[17px] text-[#6E6E6E]">
                      <span className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#6E6E6E]">
                        <MdDone color="#fff" />
                      </span>
                      {a.ability}
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
        {isBtn && <Button type="button" className="bg-primary/100 mt-[30px]" onClick={() => scrollTo(0, document.documentElement.scrollHeight)}>Contact Us</Button>}
      </div>
    </div>
  )
}