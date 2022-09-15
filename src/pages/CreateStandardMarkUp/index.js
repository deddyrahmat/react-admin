import { memo } from "react";

// components
import Breadcrumbs from "../../components/atoms/Breadcrumbs";
import { CreateFlightStandardMarkup } from "../../components";

function CreateStandartMarkup() {
    
    return (
        <div className="flex-grow-1">
            <div className="container-fluid py-2">
                <Breadcrumbs
                    data={[
                        { title: "Master Data Management", url: "#" },
                        {
                            title: "Standard Mark up",
                            url: "/management-data/standard-markup",
                        },
                        { title: "Create Flight Standard Mark up", url: "#" },
                    ]}
                />

                <h1>Create Flight Standard Mark Up</h1>
                <CreateFlightStandardMarkup />
            </div>
        </div>
    );
}

export default memo(CreateStandartMarkup);
