import Image from "next/image";
import "../../../styles/dashboard/dashboard.css"
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
    const [filename, setFileName] = useState(null)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        setFileName(file.name);
        } else {
        setFileName("Choose file");
        }
    };
  return (
    <div className="dashboard-secA mt-hdrfxd">
      <div className="container">
        <div className="flex">
          <div className="aside-left card-body">
            <div className="aside-left-wrap">
              <div className="profile-col">
                <div className="ico">
                  <Image src="/assets/images/dashboard/profile_img.svg" alt="Profile Image" width="70" height="70"></Image>
                </div>
                <p className="wlcm">Welcome</p>
                <p className="name-usr">Deepak Chauhan</p>
                <div className="usr-email">
                    <Link href="mailto:info@uniformbucket.com">info@uniformbucket.com</Link>
                    <div className="fig"><Image src="/assets/icon/tick-white.svg" alt="Approved" width="12" height="12"></Image></div>
                </div>
                <div className="usr-email">
                    <Link href="tel:+919953750281">+91 - 9953750281</Link>
                    <div className="fig"><Image src="/assets/icon/tick-white.svg" alt="Approved" width="12" height="12"></Image></div>
                </div>
              </div>
              <div className="nav-col">
                <ul>
                  <li>
                    <Link className="active" href="/profile">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="">Orders</Link>
                  </li>
                  <li>
                    <Link href="">Wishlist</Link>
                  </li>
                  <li>
                    <Link href="">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="aside-right">
            <div className="aside-right-wrap">
              <h4 className="form-title">My Profile</h4>
              <div className="form form-grid">
                <div className="form-group">
                  <input type="text" className="form-control" defaultValue="Deepak" />
                  <label htmlFor="">Name</label>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" defaultValue="Chauhan" />
                  <label htmlFor="">Last Name</label>
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    defaultValue="+91 - 9953750281"
                  />
                  <label htmlFor="">Phone</label>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" defaultValue="designer@prettifycreative.com" />
                  <label htmlFor="">Email</label>
                </div>
                <div className="form-group full">
                  <textarea
                    className="form-control"
                    defaultValue="Unit No. 804, Tower -B, Unitech Business Zone, Golf Course Ext Rd, Sector 50, Gurugram, Haryana"
                  />
                  <label htmlFor="">Address</label>
                </div>
                <div className="profile_pic">
                    <p>Profile Picture</p>
                    <div className="form-group">
                        <input type="file" className="form-control" onChange={handleFileChange} />
                        <p>{filename ? filename : "Choose file"}</p>
                    </div>
                </div>
                <div className="submit-grp full text-left">
                  <button type="button" className="btn gradient">
                    update profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
