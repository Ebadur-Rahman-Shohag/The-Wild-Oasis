"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // const activeFilter = searchParams.get("capacity") ?? "all";

    function handleFilter(filter) {
        /*
        The URLSearchParams interface is part of the URL Standard in the Web API. It provides a way to easily parse and manipulate the query string of a URL. The query string is the part of the URL that comes after the ? and is used to pass parameters to web pages.*/
        /*
        searchParams is an instance of URLSearchParams representing the current query string of the URL.
        new URLSearchParams(searchParams) creates a new URLSearchParams object by copying the existing searchParams. This allows you to manipulate the query string without modifying the original.*/
        const params = new URLSearchParams(searchParams);
        //set(name, value): Sets the value for a key in the query string. If the key already exists, it updates the value; otherwise, it adds a new key-value pair.
        //params.set("capacity", filter) sets the value of the capacity parameter to filter. If capacity already exists in the query string, its value is updated. If it doesn't exist, it is added.
        params.set("capacity", filter);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    return (
        <div className="border border-primary-800 flex">
            <button
                className="px-5 py-2 hover:bg-primary-700"
                onClick={() => handleFilter("all")}
            >
                All cabins
            </button>
            <button
                className="px-5 py-2 hover:bg-primary-700"
                onClick={() => handleFilter("small")}
            ></button>
            <button
                className="px-5 py-2 hover:bg-primary-700"
                onClick={() => handleFilter("medium")}
            >
                4&mdash;7 guests
            </button>
            <button
                className="px-5 py-2 hover:bg-primary-700"
                onClick={() => handleFilter("large")}
            >
                8&mdash;10 guests
            </button>
        </div>
    );
}

export default Filter;
