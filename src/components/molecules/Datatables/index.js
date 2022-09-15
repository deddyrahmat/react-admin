import { useState, useEffect, memo } from "react";

import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { HiOutlineDocumentAdd } from "react-icons/hi";

function Datatables({ add, headTable, items }) {
    useEffect(() => {
        //initialize datatable
        $(document).ready(function () {
            $("#example").DataTable();
            // "lengthChange": false
        });
    }, []);

    return (
        <>
            <Link to={add}>
                <a className="rounded btn btn-warning mb-2">
                    <HiOutlineDocumentAdd /> Create New
                </a>
            </Link>

            <table id="example" className="table table-striped table-bordered">
                <thead className="bg-dark text-white mt-2">
                    <tr>
                        {headTable.map((head, key) => (
                            <th key={key}>{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.preset_name}</td>
                            <td>{item.domestic_markup}</td>
                            <td>{item.international_markup}</td>
                            <td>{item.number_of_override}</td>
                            <td>edit</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default memo(Datatables);
