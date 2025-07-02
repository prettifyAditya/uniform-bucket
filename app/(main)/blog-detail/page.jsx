"use client"
import Image from "next/image"
import "../../../styles/blog/blog.css"
import MoreBlogs from "@/components/MoreBlogs"
import { useRef, useState } from "react"
import Link from "next/link"

export default function BlogDetail() {
    const blogRef = useRef(null)
    const scrollToBlog = () => {
        blogRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    const [openSocial, setOpenSocial] = useState(null)
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
                    <div className={`share_btn ${openSocial ? "open" : ""}`} onClick={() => setOpenSocial(prev => !prev)}>
                        <button type="button" className="shareBtn"><Image src="/assets/icon/share.svg" width="48" height="48" alt="Share Icon" /></button>
                        <ul className="social_icons">
                            <li><Link href=""><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#fff" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg></Link></li>
                            <li><Link href=""><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 14 14"><g fill="none"><g clipPath="url(#primeTwitter0)"><path fill="#fff" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"></path></g><defs><clipPath id="primeTwitter0"><path fill="#fff" d="M0 0h14v14H0z"></path></clipPath></defs></g></svg></Link></li>
                            <li><Link href=""><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#fff" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path></svg></Link></li>
                        </ul>
                    </div>
                    <button type="button" className="scroll_down" onClick={scrollToBlog}><Image src="/assets/images/about/scroll_down.svg" width="35" height="35" alt="Scroll Down Button"></Image></button>
                </div>
            </div>
            <div className="blog-detailsA sec-pad" ref={blogRef}>
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