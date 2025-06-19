"use client"
import Image from "next/image"
import Link from "next/link"
import "../styles/header/header.css"
import { useEffect } from "react"
import { useModalStore } from '../store/modalStore';
export default function Header(){
    const openSearch = useModalStore((state) => state.openSearch);
    useEffect(() => {
        let dropdownLi = document.querySelectorAll('.hasDropdown')
        let overlay = document.querySelector('.overlay2')
        dropdownLi.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', ()=> {
                dropdown.classList.add('active')
                overlay.classList.add('is-open');
            })
            dropdown.addEventListener('mouseleave', ()=> {
                dropdown.classList.remove('active')
                overlay.classList.remove('is-open');
            })
        })
    }, [])
    useEffect(() => {
        if(typeof window === "undefined") return
        const handleScroll = () => {
            const header = document.querySelector("header")
            if(!header) return
            if (window.scrollY > 100){
                header.classList.add("header-fixed")
            } else {
                header.classList.remove("header-fixed")
            }
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll);
        return() => window.removeEventListener("scroll", handleScroll)
    }, [])
    return(
        <>
            <header>
                <div className="header-wrapper container">
                    <div className="colA">
                        <Link href="javascript:;">
                            <Image src="/logo.svg" width="219" height="30" alt="Logo"></Image>
                        </Link>
                    </div>
                    <div className="colB">
                        <ul className="navlist">
                            <li className="hasDropdown">
                                <Link href="javascript:;">Corporate</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap flex">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Blazzers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Dress</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Kurti</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Female Top</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate T-Shirt</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Trousers</Link>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;">Corporate Vest</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="colB-md">
                                            <video src="/assets/images/category/category1_video.mp4" autoPlay muted loop playsInline></video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hasDropdown"><Link href="javascript:;">Hotel</Link></li>
                            <li><Link href="javascript:;">SPA & Salon</Link></li>
                            <li><Link href="javascript:;">Industrial</Link></li>
                            <li><Link href="javascript:;">Security</Link></li>
                            <li><Link href="javascript:;">Hospital</Link></li>
                            <li><Link href="javascript:;">By Profession</Link></li>
                        </ul>
                    </div>
                    <div className="colC">
                        <ul className="call_action">
                            <li onClick={openSearch}><Link href="javascript:;"><img src="/assets/icon/search-white.svg" alt="Search Icon" /></Link></li>
                            <li><Link href="javascript:;"><img src="/assets/icon/user-white.svg" alt="User Icon" /></Link></li>
                            <li><Link href="javascript:;"><img src="/assets/icon/like-white.svg" alt="Wishlist Icon" /></Link></li>
                            <li><Link href="javascript:;"><img src="/assets/icon/cart-white.svg" alt="Cart Icon" /></Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="overlay2"></div>
        </>
    )
}