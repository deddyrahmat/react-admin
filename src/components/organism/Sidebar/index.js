import { useState } from "react";

import { FaBars, FaHome, FaShoppingBag, FaRegChartBar, FaChevronRight } from "react-icons/fa";
import ListSidebar from "../../molecules/ListSidebar";

// styling
import "./sidebar.css";

const menuItem = [
    {
        path: "/",
        name: "Dashboard",
        icon: <FaHome />,
    },
    {
        path: "/management-data",
        name: "Master Data Management",
        icon: <FaShoppingBag />,
        dropdown: <FaChevronRight />,
        childrens: [
            {
                path: "/management-data/standart-markup",
                name: "Standart Mark Up",
            },
            {
                path: "/management-data/standart-service-fee",
                name: "Standart Service Fee",
            },
            {
                path: "/management-data/fee-type",
                name: "Fee Type",
            },
            {
                path: "/management-data/frequent-traveler-program",
                name: "Frequent Traveler Program",
            },
            {
                path: "/management-data/standart-ancillery-fee",
                name: "Standart Ancillery Fee",
            },
        ],
    },
];

function Sidebar() {
    
    const [openSidebar, setOpenSidebar] = useState(false);
    // console.log('openSidebar', openSidebar)

    return (
        <div className={`sidebar ${openSidebar && 'active'}`}>
            {menuItem.map((item, index) => <ListSidebar key={index} item={item} setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />)}
        </div>
    );
}

export default Sidebar;
