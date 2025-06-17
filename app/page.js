import HomeBanner from "@/components/HomeBanner";
import "../styles/home/home.css"
import CategorySlider from "@/components/CategorySlider";
import ClientSlider from "@/components/ClientSlider";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
     <HomeBanner />
     <CategorySlider />
     <ClientSlider />
     <div className="home-secA sec-pad">
        <div className="container-fluid">
            <div className="heading">
                <h2>Shop By Profession</h2>
            </div>
            <div className="profession_grid grid">
              <div className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession1.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Air Hostess Uniform</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </div>
              <div className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession2.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Pilot Uniform</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </div>
              <div className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession3.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Nurse Uniform</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </div>
              <div className="item-md profession_col">
                <figure>
                  <Image src="/assets/images/product/profession4.jpg" width="634" height="568" alt="Profession Image"></Image>
                </figure>
                <figcaption>
                  <h6>Sports Uniforms</h6>
                  <p>Where Uniform Meets Professionalism</p>
                </figcaption>
              </div>
            </div>
            <div className="btn_wrapper">
              <Link href="javascript:;" className="btn">Explore All Products</Link>
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
            <Link href="javascript:;" className="btn">Shop Now</Link>
          </div>
        </div>
      </div>
     </div>
    </main>
  );
}
