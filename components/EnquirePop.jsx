"use client"
import { useModalStore } from "@/store/modalStore";
import Image from "next/image";
import { useEffect } from "react";

export default function EnquirePop() {
    const isOpen = useModalStore((state) => state.isEnquireOpen)
    const closeEnquire = useModalStore((state) => state.closeEnquire)
    useEffect(() =>  {
        const inputBoxes = document.querySelectorAll('.form-control')
        inputBoxes.forEach(inputBox => {
            inputBox.addEventListener('focus', function() {
                this.closest('.form-group')?.classList.add('active')
                this.classList.add('valid')
            })
        })

        return () => {
            inputBoxes.forEach(inputBox => {
                inputBox.removeEventListener('focus', function() {
                    this.closest('.form-group')?.classList.add('active')
                    this.classList.add('valid')
                })
            })
        }
    }, [])

    return (
        <div className={`model enquire-pop ${isOpen ? "is-open" : ""}`}>
            <button className="close" onClick={closeEnquire}><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            <div className="model-body">
                <div className="title">
                    <div className="icon">
                        <Image src="/assets/icon/ub_grad.svg" width="68" height="64" alt="Logo"></Image>
                    </div>
                    <h2>Let’s Talk Business</h2>
                    <p>Connect with our experts. Schedule a callback and get personalized assistance.</p>
                </div>
                <div className="form form-grid">
                    <div className="form-group">
                        <input type="text" className="form-control" />
                        <label htmlFor="">Name*</label>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" />
                        <label htmlFor="">Company Name</label>
                    </div>
                    <div className="form-group">
                        <input type="tel" className="form-control" />
                        <label htmlFor="">Phone</label>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" />
                        <label htmlFor="">No. of uniform required</label>
                    </div>
                    <div className="form-group">
                        <textarea name="" id="" className="form-control"></textarea>
                        <label htmlFor="">Description</label>
                    </div>
                    <button className="btn black_round">Submit Now</button>
                </div>
            </div>
        </div>
    )
}