import { memo } from "react";
import Breadcrumbs from "../../components/atoms/Breadcrumbs";
import { Datatables } from "../../components/molecules";

import items from "../../data/standardMarkup.json";

const headTable = [
    "preset name",
    "domestic mark up",
    "international mark up",
    "number of override",
    "Action",
];

function StandardMarkup() {
    return (
        <div className="flex-grow-1">
            <div className="container-fluid py-2">
                <Breadcrumbs
                    data={[
                        { title: "Master Data Management", url: "#" },
                        { title: "Standard Mark up", url: "/" },
                    ]}
                />

                <h1>Standard Mark Up</h1>
                <Datatables headTable={headTable} items={items} add={"/management-data/standard-markup/create-standard-markup"} />
            </div>
        </div>
    );
}

export default memo(StandardMarkup);
