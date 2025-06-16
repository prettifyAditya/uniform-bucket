"use client"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
 
export default function HomeBanner() {
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.swiper.navigation.update();
            }
        }, 100)
    }, [])
    return(
        <Swiper
            className="hero_section"
            ref={swiperRef}
            modules={[Navigation]}
            slidesPerView={1}
            speed={1000}
            navigation={{
                prevEl: "home-prev",
                nextEl: "home-next"
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
        > 
    
        </Swiper>
    )
}