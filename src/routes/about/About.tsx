
import { FC } from 'react';
import Container from '../../components/container/Container'
import SummaryPortfolio from '../../components/SummaryPortfolio/SummaryPortfolio'
import Title from '../../components/title/Title'
import { FaFacebookF, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Partner from '../../components/partner/Partner';
import { Section } from '../services/Services';

const cards = [
  { id: 1, color: 'light' },
  { id: 2, color: 'dark' },
  { id: 3, color: 'light' },
  { id: 4, color: 'dark' },
  { id: 5, color: 'light' },
  { id: 6, color: 'dark' },
]
const abilities = [
  { id: 1, ability: 'Flexible Time' },
  { id: 2, ability: 'Perfect Work' },
  { id: 3, ability: 'Client Priority' },
  { id: 4, ability: 'Flexible Time' },
  { id: 5, ability: 'Perfect Work' },
  { id: 6, ability: 'Client Priority' },
]
const About = () => {
  return (
    <>
      <Container>
        <SummaryPortfolio />
        <div className='mt-[100px] '>
          <Title subTitle='Our Team' title='We Work With Team' />
          <div className='mt-16 grid grid-cols-12 gap-[30px]'>
            {
              cards.map(c => (
                <div key={c.id} className='col-span-12 sm:col-span-6 lg:col-span-4 min-h-[706px]'>
                  <Card {...c} />
                </div>
              ))
            }
          </div>
        </div>
      </Container>
      <div className='py-[100px] bg-primary mt-[100px]'>
        <Container>
          <div className='grid grid-cols-2 gap-[30px] h-[400px] items-center '>
            <div className='col-span-2 lg:col-span-1 relative z-20 lg:-translate-y-20'>
              <div className='hidden lg:block bg-[#C4C4C4] max-w-[427px] w-full absolute h-[200px] lg:h-[300px] z-10 left-0 -top-36'></div>
              <div className='bg-white p-[30px] w-1/2 static lg:absolute z-20 right-0 mx-auto'>
                <FaPhoneAlt className='text-primary text-[30px]' />
                <h4 className='font-black text-[25px] text-[#1B1717] mt-[30px] mb-[15px]'>Call Us Now</h4>
                <span className='text-[17px] text-[#6E6E6E]'>( +62 ) 123 456 789</span>
              </div>
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <p className='flex flex-col text-white font-black text-[35px] sm:text-[45px] text-center lg:text-left'>
                <span> "WORK HARD &</span>
                <span>GREAT QUALITY IS </span>
                <span>MY PRIORITY"</span>
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <Partner />
        <Section title='WHY CHOICE OUR HOME DESIGN INTERIOR SERVICES' subTitle='Design Consultation
' isBtn={false} abilities={abilities}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </Section>
      </Container>
    </>
  )
}

export default About
type CardProps = {
  color: string
}
export const Card: FC<CardProps> = ({ color }) => {
  return (
    <div className='flex flex-col h-full border-[1px] border-[#dadada]'>
      <div className='basis-[70%] bg-[#c4c4c4]'></div>
      <div className={`${color === 'dark' ? 'bg-[#1B1717]' : 'bg-white'}  basis-[30%] flex flex-col justify-center items-center`}>
        <h6 className={`${color === 'dark' ? 'text-primary' : 'text-[#6E6E6E]'} text-[15px] font-semibold`}>Founder</h6>
        <h3 className={`${color === 'dark' ? 'text-white' : 'text-[#1B1717]'}  text-[25px] font-black mt-[15px] mb-[30px]`}>John Leno</h3>
        <div className='flex items-center justify-center text-[#757575] gap-[30px] text-[25px]'>
          <FaFacebookF className='hover:text-[#757575]/20 transition-all duration-100' />
          <FaTwitter className='hover:text-[#757575]/20 transition-all duration-100' />
          <FaLinkedinIn className='hover:text-[#757575]/20 transition-all duration-100' />
        </div>
      </div>
    </div>
  )
}