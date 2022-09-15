import React from "react";
import Breadcrumbs from "../../components/atoms/Breadcrumbs";

function Dashboard() {
    return (
        <div className="flex-grow-1">
            <div className="container-fluid py-2">
                <Breadcrumbs data={[{ title: "Dashboard", url: "/" }]} />
            </div>
        </div>
    );
}

export default Dashboard;
