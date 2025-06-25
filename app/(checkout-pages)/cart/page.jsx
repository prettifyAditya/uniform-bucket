import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  return (
    <div className="check-out-main">
      <div className="check-out-secA-zbyqo">
        <div className="container">
          <div className="flex-checkout-cwgln">
            <div className="colA-flex-hfmcf">
              <div className="bag-dobyk">
                <div className="upper-sshjm">
                  <h6>Shopping Box</h6>
                </div>
                <div className="bag-product-wrsvn-wrap">
                  <div className="bag-product-wrsvn">
                    <figure>
                      <Link href="">
                        <img src="/assets/images/other/img1.jpg" alt="Product Image" width="107" height="142" />
                      </Link>
                    </figure>
                    <figcaption>
                        <h6 className="title-tznlw">Black Formal Blazer For Men</h6>
                        <div className="sizes_wrapper">
                            <div className="size">
                                <p>XS</p>
                                <div className="size_count">
                                    <button type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                            <path fill="none" stroke="#666" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 12h-15" />
                                        </svg>
                                    </button>

                                    <input type="text" />

                                    <button type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                            <path fill="#666" fillRule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v7.25H20a.75.75 0 0 1 0 1.5h-7.25V20a.75.75 0 0 1-1.5 0v-7.25H4a.75.75 0 0 1 0-1.5h7.25V4a.75.75 0 0 1 .75-.75" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </figcaption>
                    <a href="" className="remove-wrsvn">
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.803711 0.803467L14.1966 14.1963M0.803711 14.1963L14.1966 0.803467"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="bag-product-wrsvn">
                    <figure>
                      <a href="">
                        <img src="assets/images/other/img1.jpg" alt="" />
                      </a>
                      <input type="checkbox" name="chckout-prdct-kbicy" />
                    </figure>
                    <figcaption>
                      <h6 className="title-tznlw">
                        Ethnic Motifs Printed Mirror Work Anarkali Kurta with
                        Trousers &amp; Dupatta
                      </h6>
                      <p className="fnznl">Color: Blue</p>
                      <div className="prdct-vzmmh">
                        <div className="size-eoimy">
                          <p>Size:</p>
                          <select name="" id="" className="prdct-size-glcjj">
                            <option value="S">S</option>
                            <option value="M" selected="">
                              M
                            </option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="3XL">3XL</option>
                            <option value="XXL">XXL</option>
                          </select>
                        </div>
                        <div className="val-wrap">
                          <input
                            type="button"
                            defaultValue="-"
                            className="minus-val"
                          />
                          <input
                            type="text"
                            defaultValue={1}
                            className="count-val"
                            maxLength={100}
                            readOnly=""
                          />
                          <input
                            type="button"
                            defaultValue="+"
                            className="plus-val"
                          />
                        </div>
                      </div>
                      <ul className="price-btm-zpsgj" data-discount="">
                        <li className="price-zpsgj">
                          <span>₹</span>
                          <em data-mrp="">259</em>{" "}
                        </li>
                        <li className="price-pefca">
                          <span>₹</span>
                          <em data-sp="">1299</em>
                        </li>
                        <li className="discount-zpsgj" data-discountli="">
                          (<span data-discount="" />% OFF)
                        </li>
                      </ul>
                    </figcaption>
                    <a href="" className="remove-wrsvn">
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.803711 0.803467L14.1966 14.1963M0.803711 14.1963L14.1966 0.803467"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="bag-product-wrsvn">
                    <figure>
                      <a href="">
                        <img src="assets/images/other/img1.jpg" alt="" />
                      </a>
                      <input type="checkbox" name="chckout-prdct-kbicy" />
                    </figure>
                    <figcaption>
                      <h6 className="title-tznlw">
                        Ethnic Motifs Printed Mirror Work Anarkali Kurta with
                        Trousers &amp; Dupatta
                      </h6>
                      <p className="fnznl">Color: Blue</p>
                      <div className="prdct-vzmmh">
                        <div className="size-eoimy">
                          <p>Size:</p>
                          <select name="" id="" className="prdct-size-glcjj">
                            <option value="S">S</option>
                            <option value="M" selected="">
                              M
                            </option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="3XL">3XL</option>
                            <option value="XXL">XXL</option>
                          </select>
                        </div>
                        <div className="val-wrap">
                          <input
                            type="button"
                            defaultValue="-"
                            className="minus-val"
                          />
                          <input
                            type="text"
                            defaultValue={1}
                            className="count-val"
                            maxLength={100}
                            readOnly=""
                          />
                          <input
                            type="button"
                            defaultValue="+"
                            className="plus-val"
                          />
                        </div>
                      </div>
                      <ul className="price-btm-zpsgj" data-discount="">
                        <li className="price-zpsgj">
                          <span>₹</span>
                          <em data-mrp="">259</em>{" "}
                        </li>
                        <li className="price-pefca">
                          <span>₹</span>
                          <em data-sp="">1299</em>
                        </li>
                        <li className="discount-zpsgj" data-discountli="">
                          (<span data-discount="" />% OFF)
                        </li>
                      </ul>
                    </figcaption>
                    <a href="" className="remove-wrsvn">
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.803711 0.803467L14.1966 14.1963M0.803711 14.1963L14.1966 0.803467"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="bag-product-wrsvn">
                    <figure>
                      <a href="">
                        <img src="assets/images/other/img1.jpg" alt="" />
                      </a>
                      <input type="checkbox" name="chckout-prdct-kbicy" />
                    </figure>
                    <figcaption>
                      <h6 className="title-tznlw">
                        Ethnic Motifs Printed Mirror Work Anarkali Kurta with
                        Trousers &amp; Dupatta
                      </h6>
                      <p className="fnznl">Color: Blue</p>
                      <div className="prdct-vzmmh">
                        <div className="size-eoimy">
                          <p>Size:</p>
                          <select name="" id="" className="prdct-size-glcjj">
                            <option value="S">S</option>
                            <option value="M" selected="">
                              M
                            </option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="3XL">3XL</option>
                            <option value="XXL">XXL</option>
                          </select>
                        </div>
                        <div className="val-wrap">
                          <input
                            type="button"
                            defaultValue="-"
                            className="minus-val"
                          />
                          <input
                            type="text"
                            defaultValue={1}
                            className="count-val"
                            maxLength={100}
                            readOnly=""
                          />
                          <input
                            type="button"
                            defaultValue="+"
                            className="plus-val"
                          />
                        </div>
                      </div>
                      <ul className="price-btm-zpsgj" data-discount="">
                        <li className="price-zpsgj">
                          <span>₹</span>
                          <em data-mrp="">259</em>{" "}
                        </li>
                        <li className="price-pefca">
                          <span>₹</span>
                          <em data-sp="">1299</em>
                        </li>
                        <li className="discount-zpsgj" data-discountli="">
                          (<span data-discount="" />% OFF)
                        </li>
                      </ul>
                    </figcaption>
                    <a href="" className="remove-wrsvn">
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.803711 0.803467L14.1966 14.1963M0.803711 14.1963L14.1966 0.803467"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="colB-flex-hfmcf">
              <div className="coupon-nvixw">
                <div className="tlt-vcfrm">Coupons</div>
                <div className="cupn-hjgn">
                  <input
                    type="text"
                    className="inpt-ixs"
                    placeholder="Enter coupon code"
                  />
                  <button type="button" className="btn gray_border">
                    apply
                  </button>
                </div>
                <p className="invalid-coupn">Invalid Coupon!</p>
              </div>
              <div className="checkout-tbl-xiuh">
                <div className="ttl-tbl-bkfg">Summary</div>
                <ul className="pric-ing-gegc">
                  <li>
                    <p>Total MRP</p> <span>₹37,695</span>
                  </li>
                  <li>
                    <p>Discount on MRP</p>
                    <span className="green-color">-₹7,695</span>
                  </li>
                  <li>
                    <p>Coupon Discount</p> <span>₹0.00</span>
                  </li>
                  <li>
                    <p>Shipping Fee</p>
                    <span className="green-color">Free</span>
                  </li>
                  <li>
                    <p>GST</p>
                    <span>₹100.00</span>
                  </li>
                </ul>
                <div className="ttl-amnt-tbl">
                  <p className="ttl-txt">Total Amount </p>
                  <p className="ttl-prc-txt"> ₹37,100 </p>
                </div>
                <Link
                  href="/"
                  className="btn black_fill w-100 btn-tbl-prc"
                >
                  Place Order
                </Link>
                <Link
                  href="/"
                  className="btn gray_fill w-100 btn-tbl-prc"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          <div className="btm-check-out-cwgln">
            <div className="container">
                <ul className="bank-list">
                  <li>
                    <Image src="/assets/images/checkout/american-express.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/bhim-upi.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/cod.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/dc-bank.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/master-card.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/net-banking.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/paypal.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/rupay.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                  <li>
                    <Image src="/assets/images/checkout/visa.png" alt="Payment Methods" width="69" height="40" />
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
