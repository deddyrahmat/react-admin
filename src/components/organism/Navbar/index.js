import React from "react";
import { FaQuestionCircle, FaBell } from "react-icons/fa";

import './Navbar.css'

function Navbar() {
    return (
        <nav className="d-flex justify-content-between align-items center py-3 container-fluid border border-top-0 border-start-0 border-end-0 border-5 border-secondary">
            <div>
                <img
                    src={process.env.PUBLIC_URL + "assets/logo/logo.png"}
                    className="img-fluid"
                    alt="logo"
                />
            </div>
            <div className="d-flex align-items-center gap-3">
                <FaQuestionCircle />
                <div className="position-relative">
                    <FaBell />
                    <span
                        className="position-absolute translate-middle p-1 bg-danger rounded-circle"
                        style={{ top: "20%", left: "80%" }}
                    ></span>
                </div>
                <div className="avatar">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        className="img-fluid rounded-circle"
                        alt="Avatar"
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
