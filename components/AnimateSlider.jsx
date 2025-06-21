"use client"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import 'swiper/css/effect-fade';
import { Autoplay } from "swiper/modules"

export default function AnimateSlider(){
    const swiperRef = useRef(null);
    return(
        <div className="animate_slider_wrapper">
            <Swiper
                className="animate_slider"
                loop = {true}
                ref={swiperRef}
                modules={[Autoplay]}
                slidesPerView={3}
                spaceBetween={-100}
                centeredSlides={true}
                speed={2000}
                // autoplay = {{
                //     delay: 0,
                //     disableOnInteraction: false,
                // }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                <SwiperSlide className="animate-slide">
                    <img src="/assets/images/home/animate1.jpg" alt="Slider Image" />
                </SwiperSlide>
                <SwiperSlide className="animate-slide">
                    <img src="/assets/images/home/animate2.jpg" alt="Slider Image" />
                </SwiperSlide>
                <SwiperSlide className="animate-slide">
                    <img src="/assets/images/home/animate3.jpg" alt="Slider Image" />
                </SwiperSlide>
                <SwiperSlide className="animate-slide">
                    <img src="/assets/images/home/animate1.jpg" alt="Slider Image" />
                </SwiperSlide>
                <SwiperSlide className="animate-slide">
                    <img src="/assets/images/home/animate2.jpg" alt="Slider Image" />
                </SwiperSlide>
                <SwiperSlide className="animate-slide">
                    <img src="/assets/images/home/animate3.jpg" alt="Slider Image" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}