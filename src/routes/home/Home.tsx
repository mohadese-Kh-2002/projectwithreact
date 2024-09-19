
import Container from "../../components/container/Container";
import HomeDesign from "../../components/homeDesign/HomeDesign";
import Producer from "../../components/Producer/Producer";
import SummaryPortfolio from "../../components/SummaryPortfolio/SummaryPortfolio";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Partner from "../../components/partner/Partner";
import { Section } from "../services/Services";
import Testimonial from "../../components/testmonial/Testmonial";
const abilities=[
  {id:1,ability:'Flexible Time'},
  {id:2,ability:'Perfect Work'},
  {id:3,ability:'Client Priority'},
  {id:4,ability:'Flexible Time'},
  {id:5,ability:'Perfect Work'},
  {id:6,ability:'Client Priority'},
]
const Home = () => {


  return (

    <>
      <Container>
        <HomeDesign />
        <SummaryPortfolio />
        <Producer />
      </Container>
      <div className="mt-[100px] ">
        <Swiper className="mySwiper "
          slidesPerView={1}
          spaceBetween={30}
           loop={true}
           breakpoints={{
            400:{
              slidesPerView: 2,
            },
            650: {
              slidesPerView: 3,
            },
            850: {
              slidesPerView: 5,
            },
          }}>
          <SwiperSlide className="bg-[#C4C4C4] w-[400px] h-[200px]"></SwiperSlide>
          <SwiperSlide className="bg-[#C4C4C4] w-[400px] h-[200px]"></SwiperSlide>
          <SwiperSlide className="bg-[#C4C4C4] w-[400px] h-[200px]"></SwiperSlide>
          <SwiperSlide className="bg-[#C4C4C4] w-[400px] h-[200px]"></SwiperSlide>
          <SwiperSlide className="bg-[#C4C4C4] w-[400px] h-[200px]"></SwiperSlide>
          <SwiperSlide className="bg-[#C4C4C4] w-[400px] h-[200px]"></SwiperSlide>
          <SwiperSlide className="bg-[#C4C4C4] w-[400px] h-[200px]"></SwiperSlide>
          <SwiperSlide className="bg-[#C4C4C4] w-[400px] h-[200px]"></SwiperSlide>
          <SwiperSlide className="bg-[#C4C4C4] w-[400px] h-[200px]"></SwiperSlide>
        </Swiper>
      </div>
      <Container>
        <Partner />
        <Section subTitle="Trust Us Now" title="WHY CHOICE OUR HOME DESIGN INTERIOR SERVICES" isBtn={false} abilities={abilities}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </Section>
        <Testimonial title='OUR TESTIMONIAL FROM BEST CLIENTS' subTitle='Clients Feedback' >
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </Testimonial>
      </Container>
    </>

  )

};

export default Home;
