"use client"
import Link from "next/link";
import { useEffect } from "react";

function animateCount(el, to) {
    const duration = 1000;
    const start = 0;
    const end = parseInt(to);
    const startTime = performance.now();
  
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      el.textContent = value;
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
  
    requestAnimationFrame(update);
  }
export default function CounterBanner(){
    useEffect(() => {
            const elements = document.querySelectorAll('[data-count]');
            const options = {
              threshold: 0.5
            };
        
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                const el = entry.target;
        
                if (entry.isIntersecting) {
                  const countTo = el.getAttribute('data-count');
                  animateCount(el, countTo);
                  observer.unobserve(el); // Only animate once
                } else {
                  el.textContent = '0';
                }
              });
            }, options);
        
            elements.forEach(el => observer.observe(el));
        
            return () => observer.disconnect(); // Clean up on unmount
          }, []);
    return (
      <div className="counter-sec banner">
        <div className="bg">
          <video
            src="/assets/video/counter_banner.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <div className="banner-wrapper">
            <div className="container">
              <h2>Uniform Bucket</h2>
              <p className="subhead">
                UNIFORM BUCKET, A unit of JAF Enterprises Pvt. Ltd. is a fast
                emerging name in the world of work wear, corporate wear,
                hospital wear, hotel wear, school and college wear. We are
                providing quality garments for a diverse range of people,
                industries and commercial establishments.
              </p>
              <div className="counter-wrapper">
                <div className="counter-info-wrap">
                  <h5>
                    <span data-count="10000">0</span>+
                  </h5>
                  <p>Happy Customer</p>
                </div>
                <div className="counter-info-wrap">
                  <h5>
                    <span data-count="25">0</span>+
                  </h5>
                  <p>Industries Served</p>
                </div>
                <div className="counter-info-wrap">
                  <h5>
                    <span data-count="9000">0</span>+
                  </h5>
                  <p>Pin Codes Delivered</p>
                </div>
                <div className="counter-info-wrap">
                  <h5>
                    <span data-count="15000">0</span>+
                  </h5>
                  <p>Orders Placed</p>
                </div>
              </div>
              <Link href="javascript:;" className="btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}