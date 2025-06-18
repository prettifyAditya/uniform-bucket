"use client"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import Link from "next/link"
import CategoryItem from "./CategoryItem";
import Image from "next/image";

export default function BestSellerSlider(){
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.swiper){
                swiperRef.current.swiper.navigation.update()
            }
        }, 100);
    }, [])
    return(
        <div className="bestSeller_slider_wrapper gray-bg sec-pad">
            <div className="container-fluid slider-section">
                <div className="upper-sec">
                <div className="heading">
                    <h2>Best Sellers</h2>
                </div>
                <div className="slider-nav">
                    <button type="button" className="swiper-prev bestSeller-prev"><img src="/assets/icon/swiper-icon.svg" alt="Swiper Prev" /></button>
                    <button type="button" className="swiper-next bestSeller-next"><img src="/assets/icon/swiper-icon.svg" alt="Swiper Next" /></button>
                </div>
                </div>
            <Swiper 
                ref={swiperRef}
                className="bestSeller_slider"
                modules={[Navigation]}
                slidesPerView={1}
                speed={1000}
                navigation={{
                    prevEl: ".bestSeller-prev",
                    nextEl: ".bestSeller-next"
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 7,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="product_col">
                        <figure>
                            <Image src="/assets/images/product/product1.jpg" width="344" height="439" alt="Product Image"></Image>
                        </figure>
                        <figcaption>
                            <h6>Black Formal Blazer For Men</h6>
                            <p>₹ 2,513.00</p>
                        </figcaption>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product_col">
                        <figure>
                            <Image src="/assets/images/product/product2.jpg" width="344" height="439" alt="Product Image"></Image>
                        </figure>
                        <figcaption>
                            <h6>Black Formal Blazer For Men</h6>
                            <p>₹ 2,513.00</p>
                        </figcaption>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product_col">
                        <figure>
                            <Image src="/assets/images/product/product3.jpg" width="344" height="439" alt="Product Image"></Image>
                        </figure>
                        <figcaption>
                            <h6>Black Formal Blazer For Men</h6>
                            <p>₹ 2,513.00</p>
                        </figcaption>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product_col">
                        <figure>
                            <Image src="/assets/images/product/product1.jpg" width="344" height="439" alt="Product Image"></Image>
                        </figure>
                        <figcaption>
                            <h6>Black Formal Blazer For Men</h6>
                            <p>₹ 2,513.00</p>
                        </figcaption>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product_col">
                        <figure>
                            <Image src="/assets/images/product/product2.jpg" width="344" height="439" alt="Product Image"></Image>
                        </figure>
                        <figcaption>
                            <h6>Black Formal Blazer For Men</h6>
                            <p>₹ 2,513.00</p>
                        </figcaption>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}