import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./ListSidebar.css";

function ListSidebar({ item, setOpenSidebar, openSidebar }) {
    const location = useLocation();

    if (item.childrens) {
        return (
            <div
                onMouseEnter={() => {
                    setOpenSidebar(true);
                }}
                onMouseLeave={() => {
                    setOpenSidebar(false);
                }}
                className={`sidebar-item ${
                    location.pathname.split('/')[1] === item.path.replace('/','') ? "active" : ""
                }`}
            >
                <div className="sidebar-title">
                    {item.icon && <div className="size-icon">{item.icon}</div>}
                    <span className={!openSidebar ? "d-none" : ""}>
                        {item.name}
                    </span>
                    <FaChevronRight
                        className={openSidebar ? "size-icon" : "d-none"}
                    />
                </div>
                <div
                    className={openSidebar ? "sidebar-content" : "d-none"}
                    onMouseEnter={() => {
                        setOpenSidebar(true);
                    }}
                    onMouseLeave={() => {
                        setOpenSidebar(false);
                    }}
                >
                    {item.childrens.map((data, key) => (
                        <Link
                            key={key}
                            to={data.path}
                            onMouseEnter={() => {
                                setOpenSidebar(true);
                            }}
                            onMouseLeave={() => {
                                setOpenSidebar(false);
                            }}
                            className={`sidebar-item ${
                                location.pathname === data.path ? "active" : ""
                            }`}
                        >
                            <a>
                                <div className="sidebar-title">
                                    {data.icon && (
                                        <div className="size-icon">
                                            {data.icon}
                                        </div>
                                    )}
                                    <span
                                        className={openSidebar ? "" : "d-none"}
                                    >
                                        {data.name}
                                    </span>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <Link
                to={item.path}
                onMouseEnter={() => {
                    setOpenSidebar(true);
                }}
                onMouseLeave={() => {
                    setOpenSidebar(false);
                }}
                className={`sidebar-item ${
                    location.pathname === item.path ? "active" : ""
                }`}
            >
                <a>
                    <div className="sidebar-title">
                        {item.icon && (
                            <div className="size-icon">{item.icon}</div>
                        )}
                        <span className={openSidebar ? "" : "d-none"}>
                            {item.name}
                        </span>
                    </div>
                </a>
            </Link>
        );
    }
}

export default ListSidebar;
