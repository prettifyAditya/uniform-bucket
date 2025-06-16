"use client"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
import Link from "next/link"
 
export default function HomeBanner() {
    const swiperRef = useRef(null)
    useEffect(() => {
    setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.swiper.navigation.update();
            }
        }, 100)
    }, []);
    return(
        <div className="hero_sec">
            <Swiper
            className="hero_slider"
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            speed={1000}
            navigation={{
                prevEl: ".home-prev",
                nextEl: ".home-next"
            }}
            pagination={{
                enabled: true,
                el: ".progress_bar",
                type: "progressbar",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
        > 
                <SwiperSlide>
                    <div className="home-banner banner">
                        <div className="bg">
                            <video src="/assets/video/home-banner.mp4" autoPlay muted loop playsInline width="100%" height="100%"></video>
                            <div className="banner-wrapper">
                                <div className="content heading">
                                    <h1>Corporate Uniform</h1>
                                    <p>Where Uniform Meets Professionalism</p>
                                    <Link className="btn" href="javascript">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home-banner banner">
                        <div className="bg">
                            <video src="/assets/video/home-banner.mp4" autoPlay muted loop playsInline width="100%" height="100%"></video>
                            <div className="banner-wrapper">
                                <div className="content heading">
                                    <h1>Corporate Uniform</h1>
                                    <p>Where Uniform Meets Professionalism</p>
                                    <Link className="btn" href="javascript">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home-banner banner">
                        <div className="bg">
                            <video src="/assets/video/home-banner.mp4" autoPlay muted loop playsInline width="100%" height="100%"></video>
                            <div className="banner-wrapper">
                                <div className="content heading">
                                    <h1>Corporate Uniform</h1>
                                    <p>Where Uniform Meets Professionalism</p>
                                    <Link className="btn" href="javascript">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home-banner banner">
                        <div className="bg">
                            <video src="/assets/video/home-banner.mp4" autoPlay muted loop playsInline width="100%" height="100%"></video>
                            <div className="banner-wrapper">
                                <div className="content heading">
                                    <h1>Corporate Uniform</h1>
                                    <p>Where Uniform Meets Professionalism</p>
                                    <Link className="btn" href="javascript">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home-banner banner">
                        <div className="bg">
                            <video src="/assets/video/home-banner.mp4" autoPlay muted loop playsInline width="100%" height="100%"></video>
                            <div className="banner-wrapper">
                                <div className="content heading">
                                    <h1>Corporate Uniform</h1>
                                    <p>Where Uniform Meets Professionalism</p>
                                    <Link className="btn" href="javascript">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home-banner banner">
                        <div className="bg">
                            <video src="/assets/video/home-banner.mp4" autoPlay muted loop playsInline width="100%" height="100%"></video>
                            <div className="banner-wrapper">
                                <div className="content heading">
                                    <h1>Corporate Uniform</h1>
                                    <p>Where Uniform Meets Professionalism</p>
                                    <Link className="btn" href="javascript">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home-banner banner">
                        <div className="bg">
                            <video src="/assets/video/home-banner.mp4" autoPlay muted loop playsInline width="100%" height="100%"></video>
                            <div className="banner-wrapper">
                                <div className="content heading">
                                    <h1>Corporate Uniform</h1>
                                    <p>Where Uniform Meets Professionalism</p>
                                    <Link className="btn" href="javascript">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-nav center-full home-nav">
                <button className="home-prev swiper-prev">
                    <div className="svgg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg>
                    </div>
                </button>
                <button className="home-next swiper-next">
                    <div className="svgg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg>
                    </div>
                </button>
            </div>
            <div className="scrollbar_wrapper container">
                <button className="play_btn">
                </button>
                <div className="progress_bar"></div>
            </div>
        </div>
    )
}