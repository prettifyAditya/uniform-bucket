import CounterBanner from "@/components/CounterBanner"
import "../../../styles/about/about.css"
import Image from "next/image"


export default function AboutUs(){
    return(
        <main>
            <div className="banner about_banner">
                <div className="bg">
                    <video src="/assets/video/about_banner.mp4" poster="/assets/video/about_banner_poster.jpg" autoPlay muted loop playsInline></video>
                    <div className="banner-wrapper">
                        <div className="content container heading">
                            <div className="icon">
                                <Image src="/assets/images/about/about_icon.svg" width="70" height="70" alt="About Icon"></Image>
                            </div>
                            <h1>About Company</h1>
                            <p>The world of work wear, corporate wear, hospital wear, hotel wear, school and college wear. </p>
                            <button type="button" className="scroll_down"><Image src="/assets/images/about/scroll_down.svg" width="35" height="35" alt="Scroll Down Button"></Image></button>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="about-secA sec-pad">
                    <div className="container flex">
                        <div className="colA">
                            <div className="ub_icon">
                                <video src="/assets/images/about/mask_video.mp4" autoPlay muted loop playsInline></video>
                            </div>
                        </div>
                        <div className="colB">
                            <h2>OUR STORY</h2>
                            <p>UNIFORM BUCKET, A unit of JAF Enterprises Pvt. Ltd. is a fast emerging name in the world of work wear, corporate wear, hospital wear, hotel wear, school and college wear. We are providing quality garments for a diverse range of people, industries and commercial establishments.</p>
                            <p>Backed by over a decade of experience in the industry, our expertise has been carefully cultivated through a work ethic that strives for excellence in every project that we undertake, From cutting, stitching, to finishing and packing all our processes integrated under one roof this gives us tremendous flexibility in handling projects where we work to client specifications. Integration also empowers us to plan, design and implement projects with minimal lead times.</p>
                            <p>We are committed to providing products that are built to the satisfaction of the customer. Our clientele is a demonstration of our capabilities in the industry and dedication to our work. We look forward to serving new customers around the country forming and enriching long-lasting partnership with them.</p>
                            <p>Our product fits you beautifully and makes you feel amazing, your employees will look and feel great wearing our Hospital uniforms and your clients will notice the positive difference in their performance.</p>
                            <button type="button" className="read_more">Read More</button>
                        </div>
                    </div>
                </div>
            </section>
            <CounterBanner  
                classname="about_counter"
                videoSrc="/assets/images/about/about-secB-banner.mp4"
                heading="Our Mission"
                subHeading="Our mission is to provide a high-quality uniform garment and one-stop services to satisfy our client’s needs through a range of efficient, effective manufacturing activities and delivered on a holistic basis."
                count1="10000"
                cnt1desc="Happy Customer"
                count2="25"
                cnt2desc="Industries Served"
                count3="9000"
                cnt3desc="Pin Codes Delivered"
                count4="15000"
                cnt4desc="Orders Placed"
            />
        </main>
    )
}