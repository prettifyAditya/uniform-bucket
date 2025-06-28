"use client"
import "../../../styles/dashboard/dashboard.css"
import DashBoard from "@/components/Dashboard";
import Image from "next/image";
import Link from "next/link";


export default function OrderDetail() {
  return (
    <>
      <div className="dashboard-secA mt-hdrfxd">
      <div className="container">
        <div className="flex">
          <DashBoard />
          <div className="aside-right orderD-right">
            <div className="aside-right-wrap">
                <Link href="/order" className="back2order"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth={1}></path></svg> Back to orders</Link>
                <div className="order_details_wrapper">
                    <div className="order_id">
                        <p className="id">1252562859</p>
                        <p>Deliver on 25, June 2025</p>
                    </div>
                    <div className="order_status">
                        {/* +++++++++++++++++++++++++++ */}
                    </div>
                    <div className="prod_content">
                        <div className="pro_item">
                            <figure>
                                <Image src="/assets/images/other/img1.jpg" width="64" height="70" alt="Product Image"></Image>
                            </figure>
                            <div className="pro_details">
                                <p className="pro_name">Black Formal Blazer For Men</p>
                                <p className="size">Size : <span>M:5</span>, <span>L:2</span>, <span>XL:5</span></p>
                                <p className="embrod">Embroidery : <span>Yes</span></p>
                            </div>
                            <div className="item_total">
                                <div className="pro_price">
                                    <p>Item Price</p>
                                    <span>₹ 2,513.00</span>
                                </div>
                                <div className="quantity">
                                    <p>Quantity</p>
                                    <span>350</span>
                                </div>
                                <div className="embrod_price">
                                    <p>Embroidery </p>
                                    <span>₹ 50</span>
                                </div>
                                <div className="total_price">
                                    <p>Total</p>
                                    <span>₹ 12,565</span>
                                </div>
                            </div>
                        </div>
                        <div className="pro_item">
                            <figure>
                                <Image src="/assets/images/other/img1.jpg" width="64" height="70" alt="Product Image"></Image>
                            </figure>
                            <div className="pro_details">
                                <p className="pro_name">Black Formal Blazer For Men</p>
                                <p className="size">Size : <span>M:5</span>, <span>L:2</span>, <span>XL:5</span></p>
                                <p className="embrod">Embroidery : <span>Yes</span></p>
                            </div>
                            <div className="item_total">
                                <div className="pro_price">
                                    <p>Item Price</p>
                                    <span>₹ 2,513.00</span>
                                </div>
                                <div className="quantity">
                                    <p>Quantity</p>
                                    <span>350</span>
                                </div>
                                <div className="embrod_price">
                                    <p>Embroidery </p>
                                    <span>₹ 50</span>
                                </div>
                                <div className="total_price">
                                    <p>Total</p>
                                    <span>₹ 12,565</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="address_details">
                        <div className="colA">
                            <p className="title">Delivery Address</p>
                            <p className="user_name">Deepak Chauhan</p>
                            <Link href="" className="address">Unit No. 804, Tower -B, Unitech Business Zone, Golf Course Ext Rd, Sector 50, Gurugram, Haryana</Link>
                            <p>Mobile: <Link href="+919953750281">+91 - 9953750281</Link></p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
