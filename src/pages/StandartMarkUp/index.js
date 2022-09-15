import {memo} from "react";
import Breadcrumbs from "../../components/atoms/Breadcrumbs";

function StandartMarkup() {
    return (
        <div className="flex-grow-1">
            <div className="container-fluid py-2">
                <Breadcrumbs data={[
                    { title: "Master Data Management", url: "#" },
                    { title: "Standard Mark up", url: "/" }
                    ]} />

                <h1>Standard Mark Up</h1>
            </div>
        </div>
    );
}

export default memo(StandartMarkup);
