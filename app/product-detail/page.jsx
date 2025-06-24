"use client"
import Image from "next/image";
import Link from "next/link";
import "../../styles/product/product.css"
import ProductDimage from "@/components/ProductDimage";
import { useState } from "react";
import ReviewBox from "@/components/ReviewBox";
import BestSellerSlider from "@/components/BestSellerSlider";

const descriptionData = [ {
        title: "Description",
        description: `
            <p>This blend of Polyester Viscose fabric is comfortable to wear due to breathable yarns. Uniform Bucket Range of MALE'S Blazers are made up of fine quality fabric and export quality stitching that will give you a smart look. It is ideal for corporate, office wear, workwear, etc.</p>
            <ul>
                <li>
                    <p>
                </li>
            </ul>
        `
    },
]

const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

export default function ProductDetail(){
    const [activeIndex, setActiveIndex] = useState(0);
    const [counts, setCounts] = useState({
        XS: 0,
        S: 0,
        M: 0,
        L: 0,
        XL: 0,
        "2XL": 0,
        "3XL": 0,
    });
    const increase = (size) => {
        setCounts((prev) => ({
        ...prev,
        [size]: prev[size] + 1,
        }));
    };
    const decrease = (size) => {
        setCounts((prev) => ({
        ...prev,
        [size]: prev[size] > 0 ? prev[size] - 1 : 0,
        }));
    };

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return(
        <main>
            <div className="product-detail-container">
                <div className="container">
                    <ul className="breadcrumps">
                        <li><Link href="">Home</Link></li>
                        <li><Link href="">Corporate</Link></li>
                        <li><Link href="">Corporate Blazzers</Link></li>
                        <li><Link href="" className="active">Worsted Grey Blazer For Men</Link></li>
                    </ul>
                    <div className="detail-product-wrap">
                        <div className="colA">
                            <div className="product-image-wrap">
                                <ProductDimage
                                    mainImg="/assets/images/product/pro1.jpg"
                                    zoomImg="/assets/images/product/pro1.jpg"
                                />
                                <ProductDimage
                                    mainImg="/assets/images/product/pro2.jpg"
                                    zoomImg="/assets/images/product/pro2.jpg"
                                />
                                <ProductDimage
                                    mainImg="/assets/images/product/pro3.jpg"
                                    zoomImg="/assets/images/product/pro3.jpg"
                                />
                                <ProductDimage
                                    mainImg="/assets/images/product/pro4.jpg"
                                    zoomImg="/assets/images/product/pro4.jpg"
                                />
                            </div>
                        </div>
                        <div className="colB">
                            <div className="sticky_div">
                                <h1 className="pro_title">Worsted Grey Blazer For Men</h1>
                            <div className="review_wrap">
                                <ul className="review_stars">
                                    <li data-value="1" className="first">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                                                fill="#000"
                                            />
                                        </svg>
                                    </li>
                                    <li data-value="2" className="second">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                                                fill="#000"
                                            />
                                        </svg>
                                    </li>
                                    <li data-value="3" className="third">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                                                fill="#000"
                                            />
                                        </svg>
                                    </li>
                                    <li data-value="4" className="fourth">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                                                fill="#000"
                                            />
                                        </svg>
                                    </li>
                                    <li data-value="5" className="fifth">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                                                fill="#000"
                                            />
                                        </svg>
                                    </li>
                                </ul>
                                <div className="review_content">
                                    <p>2 Reviews</p>
                                    <p>Write a Review</p>
                                </div>
                            </div>
                            <div className="price_wrapper">
                                <p className="price">₹2,513</p>
                                <div className="sku_code">
                                    <span>SKU:</span>
                                    <p>UNB-BLAZER-06</p>
                                </div>
                            </div>
                            <div className="bulk_orders">
                                <p>Buy this in Bulk and get Extra Discounts</p>
                                <div className="bulk_order_content">
                                    <div className="bulk_wrap">
                                        <p>Sample</p>
                                        <div className="price">₹3,750</div>
                                    </div>
                                    <div className="bulk_wrap">
                                        <p>5 + pcs</p>
                                        <div className="price">₹2,513</div>
                                    </div>
                                    <div className="bulk_wrap">
                                        <p>20 + pcs</p>
                                        <div className="price">₹2,400</div>
                                    </div>
                                    <div className="bulk_wrap">
                                        <p>50 + pcs</p>
                                        <div className="price">₹2,250</div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_size_wrap">
                                <div className="upper_sec">
                                    <h3>Select Size</h3>
                                    <Link href="/assets/images/Measurment_Chart.pdf" target="_blank">Size Guide</Link>
                                </div>
                                <div className="sizes_wrapper">
                                     {sizes.map((size) => (
                                        <div className="size" key={size}>
                                        <p>{size}</p>
                                        <div className="size_count">
                                            <button type="button" onClick={() => decrease(size)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                                <path fill="none" stroke="#666" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 12h-15" />
                                            </svg>
                                            </button>

                                            <input type="text" value={counts[size]} readOnly />

                                            <button type="button" onClick={() => increase(size)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                                <path fill="#666" fillRule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v7.25H20a.75.75 0 0 1 0 1.5h-7.25V20a.75.75 0 0 1-1.5 0v-7.25H4a.75.75 0 0 1 0-1.5h7.25V4a.75.75 0 0 1 .75-.75" clipRule="evenodd" />
                                            </svg>
                                            </button>
                                        </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="add_to_wish">
                                    <div className="wish_btn">
                                        Add to Wishlist <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#000" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"></path></svg>
                                    </div>
                                    <button type="button" className="share">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#000" strokeWidth={1}><path d="M9 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path><path strokeLinecap="round" d="M14 6.5L9 10m5 7.5L9 14"></path><path d="M19 18.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path></g></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="btn_wrapper">
                                <button type="button" className="btn black">Add to Bag</button>
                                <button type="button" className="btn gray">Add Embroidery</button>
                            </div>
                            <div className="pro_description">
                                <div className={`col ${activeIndex === 0 ? "active" : ""}`}>
                                    <div className="title" onClick={() => toggleAccordion(0)}>
                                        <h6>Description</h6>
                                        <div className="icon"></div>
                                    </div>
                                    <article>
                                        <div className="content-desc website-content">
                                            <p>
                                                <br />
                                                <strong>Black Formal Blazer For Men</strong>
                                                <br />
                                                <br />
                                                This blend of Polyester Viscose fabric is comfortable to wear due to
                                                breathable yarns. Uniform Bucket Range of MALE'S Blazers are made up of fine
                                                quality fabric and export quality stitching that will give you a smart look.
                                                It is ideal for corporate, office wear, workwear, etc.
                                            </p>
                                            <p>
                                                <br />
                                                <strong>PRODUCT DETAILS</strong>
                                                <br />
                                                <br />
                                                <strong>COLOR-&nbsp;&nbsp;</strong>Black
                                                <br />
                                                <br />
                                                <strong>STYLE</strong>- Notched Collar With Flap Pockets
                                                <br />
                                                <strong>
                                                <br />
                                                FIT
                                                </strong>
                                                - Regular
                                                <br />
                                                <br />
                                                <strong>FABRIC</strong>- Polyester Viscose Twill
                                                <br />
                                                <br />
                                                <strong>COMPOSITION</strong>- 67% Polyester 33% Viscose Twill
                                                <br />
                                                <br />
                                                <strong>BLAZER LENGTH</strong>-&nbsp; Approx 28 inches | Medium Size
                                                <br />
                                                <br />
                                                <strong>SLEEVE LENGTH-&nbsp;</strong>Approx 24 inches | Medium Size
                                                <br />
                                                <br />
                                                <strong>POCKETS-&nbsp;</strong>&nbsp;Two Pockets
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>FAB</strong>&nbsp;-&nbsp; SUMO-PV-SUI-TW
                                            </p>
                                            <div>&nbsp;</div>
                                            <p>
                                                <br />
                                                <strong>WASH CARE</strong>- Do not bleach
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                &nbsp;
                                                <br />
                                                <br />
                                                &nbsp;
                                            </p>
                                        </div>
                                    </article>
                                </div>
                                <div className={`col ${activeIndex === 1 ? "active" : ""}`}>
                                    <div className="title" onClick={() => toggleAccordion(1)}>
                                        <h6>Specifications</h6>
                                        <div className="icon"></div>
                                    </div>
                                    <article>
                                        <div className="content-desc website-content">
                                            <p>
                                                <br />
                                                <strong>Black Formal Blazer For Men</strong>
                                                <br />
                                                <br />
                                                This blend of Polyester Viscose fabric is comfortable to wear due to
                                                breathable yarns. Uniform Bucket Range of MALE'S Blazers are made up of fine
                                                quality fabric and export quality stitching that will give you a smart look.
                                                It is ideal for corporate, office wear, workwear, etc.
                                            </p>
                                            <p>
                                                <br />
                                                <strong>PRODUCT DETAILS</strong>
                                                <br />
                                                <br />
                                                <strong>COLOR-&nbsp;&nbsp;</strong>Black
                                                <br />
                                                <br />
                                                <strong>STYLE</strong>- Notched Collar With Flap Pockets
                                                <br />
                                                <strong>
                                                <br />
                                                FIT
                                                </strong>
                                                - Regular
                                                <br />
                                                <br />
                                                <strong>FABRIC</strong>- Polyester Viscose Twill
                                                <br />
                                                <br />
                                                <strong>COMPOSITION</strong>- 67% Polyester 33% Viscose Twill
                                                <br />
                                                <br />
                                                <strong>BLAZER LENGTH</strong>-&nbsp; Approx 28 inches | Medium Size
                                                <br />
                                                <br />
                                                <strong>SLEEVE LENGTH-&nbsp;</strong>Approx 24 inches | Medium Size
                                                <br />
                                                <br />
                                                <strong>POCKETS-&nbsp;</strong>&nbsp;Two Pockets
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>FAB</strong>&nbsp;-&nbsp; SUMO-PV-SUI-TW
                                            </p>
                                            <div>&nbsp;</div>
                                            <p>
                                                <br />
                                                <strong>WASH CARE</strong>- Do not bleach
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                &nbsp;
                                                <br />
                                                <br />
                                                &nbsp;
                                            </p>
                                        </div>
                                    </article>
                                </div>
                                <div className={`col ${activeIndex === 2 ? "active" : ""}`}>
                                    <div className="title" onClick={() => toggleAccordion(2)}>
                                        <h6>Q & A</h6>
                                        <div className="icon"></div>
                                    </div>
                                    <article>
                                        <div className="content-desc website-content">
                                            <p>
                                                <br />
                                                <strong>Black Formal Blazer For Men</strong>
                                                <br />
                                                <br />
                                                This blend of Polyester Viscose fabric is comfortable to wear due to
                                                breathable yarns. Uniform Bucket Range of MALE'S Blazers are made up of fine
                                                quality fabric and export quality stitching that will give you a smart look.
                                                It is ideal for corporate, office wear, workwear, etc.
                                            </p>
                                            <p>
                                                <br />
                                                <strong>PRODUCT DETAILS</strong>
                                                <br />
                                                <br />
                                                <strong>COLOR-&nbsp;&nbsp;</strong>Black
                                                <br />
                                                <br />
                                                <strong>STYLE</strong>- Notched Collar With Flap Pockets
                                                <br />
                                                <strong>
                                                <br />
                                                FIT
                                                </strong>
                                                - Regular
                                                <br />
                                                <br />
                                                <strong>FABRIC</strong>- Polyester Viscose Twill
                                                <br />
                                                <br />
                                                <strong>COMPOSITION</strong>- 67% Polyester 33% Viscose Twill
                                                <br />
                                                <br />
                                                <strong>BLAZER LENGTH</strong>-&nbsp; Approx 28 inches | Medium Size
                                                <br />
                                                <br />
                                                <strong>SLEEVE LENGTH-&nbsp;</strong>Approx 24 inches | Medium Size
                                                <br />
                                                <br />
                                                <strong>POCKETS-&nbsp;</strong>&nbsp;Two Pockets
                                                <br />
                                                <br />
                                            </p>
                                            <p>
                                                <strong>FAB</strong>&nbsp;-&nbsp; SUMO-PV-SUI-TW
                                            </p>
                                            <div>&nbsp;</div>
                                            <p>
                                                <br />
                                                <strong>WASH CARE</strong>- Do not bleach
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                &nbsp;
                                                <br />
                                                <br />
                                                &nbsp;
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="col-itqeq">
                                <div className="rgcwv">
                                    <div className="ico">
                                    <img src="assets/icon/ship.svg" className="svg" alt="" />
                                    </div>
                                    <p>FREE SHIPPING IN WORDWIDE</p>
                                </div>
                                <div className="rgcwv">
                                    <div className="ico">
                                    <img src="assets/icon/cod.svg" className="svg" alt="" />
                                    </div>
                                    <p>SAFE AND SECURE PAYMENTS</p>
                                </div>
                                <div className="rgcwv">
                                    <div className="ico">
                                    <img src="assets/icon/return.svg" className="svg" alt="" />
                                    </div>
                                    <p>EASY RETURNS & EXCHANGE</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="customer_reviews sec-pad">
                    <div className="container">
                        <div className="heading">
                            <h2>Customer Reviews</h2>
                        </div>
                        <div className="review_wrapper flex">
                            <div className="colA">
                                <div className="review-border">
                                    <div className="review_content">
                                        <ReviewBox
                                            imgSrc="/assets/images/testimony/testimony1.jpg"
                                            name="Kartik Sharma"
                                            desc="A perfect blazer for office wear combines sharp tailoring, classic design, and all-day comfort."
                                            time="Feb 23, 2021, 12:15 PM"
                                        />
                                        <ReviewBox
                                            imgSrc="/assets/images/testimony/testimony1.jpg"
                                            name="Kartik Sharma"
                                            desc="A perfect blazer for office wear combines sharp tailoring, classic design, and all-day comfort."
                                            time="Feb 23, 2021, 12:15 PM"
                                        />
                                        <ReviewBox
                                            imgSrc="/assets/images/testimony/testimony1.jpg"
                                            name="Kartik Sharma"
                                            desc="A perfect blazer for office wear combines sharp tailoring, classic design, and all-day comfort."
                                            time="Feb 23, 2021, 12:15 PM"
                                        />
                                        <ReviewBox
                                            imgSrc="/assets/images/testimony/testimony1.jpg"
                                            name="Kartik Sharma"
                                            desc="A perfect blazer for office wear combines sharp tailoring, classic design, and all-day comfort."
                                            time="Feb 23, 2021, 12:15 PM"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="colB">
                                <div className="form review_form form-grid">
                                    <h6>Write a review</h6>
                                    <div className="rating">
                                        <p>Rating</p>
                                        <ul className="give_reviews">
                                            <li data-value="1" className="first">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                                                        fill="" stroke="#000"
                                                    />
                                                </svg>
                                            </li>
                                            <li data-value="2" className="second">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                                                        fill="" stroke="#000"
                                                    />
                                                </svg>
                                            </li>
                                            <li data-value="3" className="third">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                                                        fill="" stroke="#000"
                                                    />
                                                </svg>
                                            </li>
                                            <li data-value="4" className="fourth">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                                                        fill="" stroke="#000"
                                                    />
                                                </svg>
                                            </li>
                                            <li data-value="5" className="fifth">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525Z"
                                                        fill="" stroke="#000"
                                                    />
                                                </svg>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" />
                                        <label htmlFor="Name">Your Name</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="textarea" className="form-control" />
                                        <label htmlFor="message">Your Message</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BestSellerSlider heading="related products" />
        </main>
    )
}