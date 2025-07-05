import HomeBanner from "@/components/HomeBanner";
import "../../styles/home/home.css"
import CategorySlider from "@/components/CategorySlider";
import ClientSlider from "@/components/ClientSlider";
import Image from "next/image";
import Link from "next/link";
import BestSellerSlider from "@/components/BestSellerSlider";
import CounterBanner from "@/components/CounterBanner";
import TestimonySlider from "@/components/TestimonySlider";
import AnimateSlider from "@/components/AnimateSlider";
import VideoPop from "@/components/VideoPop";
import HomeGlobe from "@/components/HomeGlobe";

export default function Home() {
  return (
    <main>
     <HomeBanner />
     <CategorySlider classname="sec-pad" />
     <ClientSlider />
     <div className="home-secA sec-pad">
        <div className="container-fluid">
            <div className="heading">
                <h2>Shop By Profession</h2>
            </div>
            <div className="profession_grid grid">
              <Link href="/product-listing" className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession1.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Air Hostess Uniform</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </Link>
              <Link href="/product-listing" className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession2.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Pilot Uniform</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </Link>
              <Link href="/product-listing" className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession3.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Nurse Uniform</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </Link>
              <Link href="/product-listing" className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession4.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Sports Uniforms</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </Link>
            </div>
            <div className="btn_wrapper">
              <Link href="/product-listing" className="btn black">Explore All Products</Link>
            </div>
        </div>
     </div>
     <div className="promo-sec banner">
      <div className="bg">
        <video src="/assets/video/promo-banner.mp4" autoPlay muted loop playsInline></video>
        <div className="banner-wrapper">
          <div className="container">
            <h2>Logo Embroidery</h2>
            <p>Have your business logo embroidered onto your uniform. </p>
            <Link href="/product-listing" className="btn">Shop Now </Link>
          </div>
        </div>
      </div>
     </div>
     <BestSellerSlider heading="Best Sellers" />
     <div className="animate_banner banner">
      <div className="bg">
        <Image src="/assets/images/home/animate_banner.jpg" width="1280" height="730" alt="Animate Banner"></Image>
        <div className="banner-wrapper">
          <div className="container">
            <div className="content">
              <h2>Chefwear</h2>
              <h6>Chosen by top chefs</h6>
              <Link className="btn black" href="/product-listing">Explore All Projects</Link>
            </div>
            <AnimateSlider />
          </div>
        </div>
      </div>
     </div>
     <CounterBanner 
      videoSrc="/assets/video/counter_banner.mp4"
      heading="Uniform Bucket"
      subHeading="UNIFORM BUCKET, A unit of JAF Enterprises Pvt. Ltd. is a fast emerging name in the world of work wear, corporate wear, hospital wear, hotel wear, school and college wear. We are providing quality garments for a diverse range of people, industries and commercial establishments."
      count1="10000"
      cnt1desc="Happy Customer"
      count2="25"
      cnt2desc="Industries Served"
      count3="9000"
      cnt3desc="Pin Codes Delivered"
      count4="15000"
      cnt4desc="Orders Placed"
     />
     <TestimonySlider />
     <HomeGlobe />
     <VideoPop />
    </main>
  );
}
