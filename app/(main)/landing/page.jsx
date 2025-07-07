import Image from "next/image"
import "../../../styles/component/component.css"
export default function Landing(){
    return(
        <main>
            <div className="banner landing-banner">
                <div className="bg">
                    <video src="/assets/video/about_banner.mp4" poster="/assets/video/about_banner_poster.jpg" autoPlay muted loop playsInline></video>
                    <div className="banner-wrapper">
                        <div className="content container heading">
                            <h1>Honda Two Wheeler Dealership Uniform</h1>
                            <div className="form_wrapper">
                                <div className="title">
                                    <div className="icon">
                                        <Image src="/assets/icon/ub_grad.svg" width="68" height="64" alt="Logo"></Image>
                                    </div>
                                    <p>Please fill the form & contact us for any query, will get back to you!</p>
                                </div>
                            <div className="form form-grid landing-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" />
                                    <label>Your name</label>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" />
                                    <label>Your email</label>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" />
                                    <label>Your Phone No.</label>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" />
                                    <label>Your Subject</label>
                                </div>
                                <div className="form-group full">
                                    <textarea className="form-control" />
                                    <label>Your Message</label>
                                </div>                              
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="landing-secA sec-pad container website-content">
                    <p>At Uniform Bucket, we specialize in manufacturing and supplying high-quality uniforms tailored to customer requirements. If you are an authorized dealer of Honda Two Wheeler and your uniform purchase protocol permits you to procure uniforms from external suppliers, we can tailor Honda Two Wheeler Sales Uniforms, Service Uniforms, and Technician Uniforms as per your requirements. With delivery across India through our trusted courier partners, we aim to provide durable, professional attire at competitive prices.</p>
                    <p>Uniform Bucket is an independent manufacturer and supplier of general uniforms and workwear. We are not affiliated with, endorsed by, or an authorized uniform vendor. Any purchase of uniforms from us is made solely at the discretion of the buyer.</p>
                    <p>We manufacture uniforms based on customer specifications, operating under the presumption that the customer is an authorized dealer or channel partner and has obtained the necessary permissions from the company to purchase such uniforms.</p>
                    <p>If you are an authorized dealer and the company has permitted you to procure uniforms generally, you may contact us for an order. Otherwise, we kindly request that you refrain from placing an order to ensure compliance with your company’s policies.</p>
                    <h4>Why Choose Us?</h4>
                    <ul>
                        <li>Customization as per your dealership's needs.</li>
                        <li>Bulk and small order options.</li>
                        <li>Reliable pan-India delivery.</li>
                        <li>Exceptional quality at reasonable prices.</li>
                        <li>Uniform Bucket ensures transparency and professionalism in every transaction. If you're ready to enhance your team's look with premium uniforms, we're here to assist!</li>
                    </ul>
                </div>
            </section>
        </main>
    )   
}