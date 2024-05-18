import React from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

const TableHeading = ({
    name,
    label,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChanged = () => {},
}) => {
    return (
        <th>
            <div
                className={
                    sortable
                        ? "flex items-center justify-between gap-1 px-3 py-3 cursor-pointer"
                        : "flex items-center justify-between gap-1 px-3 py-3"
                }
            >
                {label}
                {sortable && (
                    <div>
                        <ChevronUpIcon
                            className={
                                "w-4 " +
                                (sort_field === name && sort_direction === "asc"
                                    ? "text-white"
                                    : "")
                            }
                            onClick={(e) => sortChanged(name, "asc")}
                        />
                        <ChevronDownIcon
                            className={
                                "w-4 -mt2 " +
                                (sort_field === name &&
                                sort_direction === "desc"
                                    ? "text-white"
                                    : "")
                            }
                            onClick={(e) => sortChanged(name, "desc")}
                        />
                    </div>
                )}
            </div>
        </th>
    );
};

export default TableHeading;
