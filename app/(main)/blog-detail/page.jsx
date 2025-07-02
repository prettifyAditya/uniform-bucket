import Image from "next/image"
import "../../../styles/blog/blog.css"
import TestimonySlider from "@/components/TestimonySlider"
import MoreBlogs from "@/components/MoreBlogs"

export default function BlogDetail() {
    return(
        <main>
            <div className="banner video-banner blogD_banner">
                <div className="bg">
                    <Image src='/assets/images/other/blogD_banner.jpg' alt="Blog Details Banner" width="1280" height="740"></Image>
                    <div className="banner-wrapper">
                        <div className="content container heading">
                            <p className="date">June 20, 2025</p>
                            <h1>Uniforms That Speak Your Brand Designed by Uniform Bucket</h1>
                        </div>
                    </div>
                    <button type="button" className="shareBtn"><Image src="/assets/icon/share.svg" width="48" height="48" alt="Share Icon" /></button>
                    <button type="button" className="scroll_down"><Image src="/assets/images/about/scroll_down.svg" width="35" height="35" alt="Scroll Down Button"></Image></button>
                </div>
            </div>
            <div className="blog-detailsA sec-pad">
                <div className="container">
                    <div className="content">
                    <p>In a world where first impressions are everything, your team’s appearance can make or break how your brand is perceived. Uniforms aren’t just about clothing they’re a powerful brand statement, silently communicating professionalism, trust, and consistency.</p>
                    <p>At Uniform Bucket, we specialize in designing uniforms that do more than fit well they speak your brand’s language. Whether you’re in hospitality, healthcare, corporate, or education, we create customized uniforms that tell your story, your way.</p>
                    <h3>Why Uniforms Matter to Your Brand Identity</h3>
                    <p>Think of your team’s uniform as a walking brand ambassador. A smart, coordinated look sends a clear message about who you are and what you stand for. Here’s how branded uniforms elevate your identity:</p>
                    <ul>
                        <li>Create a consistent visual identity across all locations</li>
                        <li>Build customer trust through professional presentation</li>
                        <li>Boost employee pride and confidence</li>
                        <li>Enhance team unity and morale</li>
                        <li>Make your brand more recognizable and memorable</li>
                    </ul>
                    <h3>Customization That Captures Your Brand Essence</h3>
                    <p>At Uniform Bucket, customization is at the heart of what we do. We work closely with businesses to understand their brand colors, values, industry requirements, and functional needs.</p>
                    <ul>
                        <li>Color schemes to match your branding</li>
                        <li>Embroidered or printed logos</li>
                        <li>Fabric types for climate and comfort</li>
                        <li>Functional design elements like pockets, fits, and closures</li>
                        <li>Department-specific variations for easy recognition</li>
                    </ul>
                </div>
                </div>
            </div>
           <MoreBlogs />
        </main>
    )
}