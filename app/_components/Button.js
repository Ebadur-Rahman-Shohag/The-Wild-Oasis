"use client";
function Button({ children, handleFilter, activeFilter, filter }) {
    return (
        <button
            className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
                }`}
            onClick={() => handleFilter(filter)}
        >
            {children}
        </button>
    );
}

export default Button;
