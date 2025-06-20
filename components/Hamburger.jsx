import { useModalStore } from "@/store/modalStore";
import Image from "next/image";
import Link from "next/link";

export default function Hamburger() {
    const isOpen = useModalStore((state) => state.isHamOpen)
    const closeHam = useModalStore((state) => state.closeHam)
  return (
    <div className={`model ham-pop ${isOpen ? "is-open" : ""}`}>
      <button className="close" onClick={closeHam}>
        <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="model-body">
        <div className="icon">
          <Image src="/assets/icon/ub_grad.svg" width="50" height="50" className="svg" alt="icon" />
        </div>
        <ul className="nav-list">
          <li className="hamDropdown">
            <div className="title">
              <h5>Corporate</h5>
              <img src="/assets/icon/next-black.svg" alt="men-s-collection" className="svg arrow" />
            </div>
            <div className="dropdown-menu-ham">
              <ul>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="hamDropdown">
            <div className="title">
              <h5>Corporate</h5>
              <img src="/assets/icon/next-black.svg" alt="men-s-collection" className="svg arrow" />
            </div>
            <div className="dropdown-menu-ham">
              <ul>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="hamDropdown">
            <div className="title">
              <h5>Corporate</h5>
              <img src="/assets/icon/next-black.svg" alt="men-s-collection" className="svg arrow" />
            </div>
            <div className="dropdown-menu-ham">
              <ul>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="hamDropdown">
            <div className="title">
              <h5>Corporate</h5>
              <img src="/assets/icon/next-black.svg" alt="men-s-collection" className="svg arrow" />
            </div>
            <div className="dropdown-menu-ham">
              <ul>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="hamDropdown">
            <div className="title">
              <h5>Corporate</h5>
              <img src="/assets/icon/next-black.svg" alt="men-s-collection" className="svg arrow" />
            </div>
            <div className="dropdown-menu-ham">
              <ul>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="hamDropdown">
            <div className="title">
              <h5>Corporate</h5>
              <img src="/assets/icon/next-black.svg" alt="men-s-collection" className="svg arrow" />
            </div>
            <div className="dropdown-menu-ham">
              <ul>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
                <li>
                  <Link href="javascript:;" className="subcat-li-anchr">
                    Corporate Blazzers
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="bottom-list">
          <div className="social-icons">
            <Link href="javascript:void(0)" target="_blank" title="Twitter">
                <Image src="/assets/icon/twitter.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="javascript:void(0)" target="_blank" title="Facebook">
                <Image src="/assets/icon/facebook.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="javascript:void(0)" target="_blank" title="Instagram">
                <Image src="/assets/icon/instagram.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="javascript:void(0)" target="_blank" title="Linkedin">
                <Image src="/assets/icon/linkedin.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
            <Link href="javascript:void(0)" target="_blank" title="Whatsapp">
                <Image src="/assets/icon/whatsapp.svg" width="25" height="25" alt="Social Icons"></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
