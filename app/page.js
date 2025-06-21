import HomeBanner from "@/components/HomeBanner";
import "../styles/home/home.css"
import CategorySlider from "@/components/CategorySlider";
import ClientSlider from "@/components/ClientSlider";
import Image from "next/image";
import Link from "next/link";
import BestSellerSlider from "@/components/BestSellerSlider";
import CounterBanner from "@/components/CounterBanner";
import TestimonySlider from "@/components/TestimonySlider";
import AnimateSlider from "@/components/AnimateSlider";
import VideoPop from "@/components/VideoPop";

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
              <Link href="" className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession1.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Air Hostess Uniform</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </Link>
              <Link href="" className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession2.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Pilot Uniform</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </Link>
              <Link href="" className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession3.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Nurse Uniform</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </Link>
              <Link href="" className="item-md profession_col">
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
              <Link href="javascript:;" className="btn black-border">Explore All Products</Link>
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
            <Link href="javascript:;" className="btn">Shop Now </Link>
          </div>
        </div>
      </div>
     </div>
     <BestSellerSlider />
     <div className="animate_banner banner">
      <div className="bg">
        <Image src="/assets/images/home/animate_banner.jpg" width="1280" height="730" alt="Animate Banner"></Image>
        <div className="banner-wrapper">
          <div className="container">
            <div className="content">
              <h2>Chefwear</h2>
              <h6>Chosen by top chefs</h6>
              <Link className="btn black" href="">Explore All Projects</Link>
            </div>
            <AnimateSlider />
          </div>
        </div>
      </div>
     </div>
     <CounterBanner />
     <TestimonySlider />
     <div className="home-secB sec-pad">
      <div className="container">
        <div className="video">
          <video src="/assets/video/globe.mp4" autoPlay muted loop playsInline></video>
        </div>
        <div className="heading">
          <h2>Across Countries. Beyond Expectations.</h2>
        </div>
        <div className="flags_wrapper grid">
            <figure>
              <Image src="/assets/images/home/flag1.png" width="35" height="23" alt="Flag Image"></Image>
              <p>India</p>
            </figure>
            <figure>
              <Image src="/assets/images/home/flag2.png" width="35" height="23" alt="Flag Image"></Image>
              <p>Usa</p>
            </figure>
            <figure>
              <Image src="/assets/images/home/flag3.png" width="35" height="23" alt="Flag Image"></Image>
              <p>Uk</p>
            </figure>
            <figure>
              <Image src="/assets/images/home/flag4.png" width="35" height="23" alt="Flag Image"></Image>
              <p>Uae</p>
            </figure>
            <figure>
              <Image src="/assets/images/home/flag5.png" width="35" height="23" alt="Flag Image"></Image>
              <p>German</p>
            </figure>
            <figure>
              <Image src="/assets/images/home/flag6.png" width="35" height="23" alt="Flag Image"></Image>
              <p>China</p>
            </figure>
        </div>
      </div>
     </div>
     <VideoPop />
    </main>
  );
}
