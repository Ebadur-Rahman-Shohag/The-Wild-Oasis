"use client";
import { useState } from "react";

import { updateGuestprofile } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ guest, children }) {
    const [count, setCount] = useState(0);

    // const countryFlag = "pt.jpg"; // Placeholder for country flag image
    // const nationality = "portugal"; // Placeholder for nationality

    const { fullName, email, nationality, nationalID, countryFlag } = guest;
    return (
        <>
            {/* Form */}
            <form
                action={updateGuestprofile}
                classN
                ame="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
            >
                {/* Full name */}
                <div className="space-y-2">
                    <label>Full name</label>
                    <input
                        disabled
                        defaultValue={fullName}
                        name="fullName"
                        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                    />
                </div>

                {/* Email address */}
                <div className="space-y-2">
                    <label>Email address</label>
                    <input
                        disabled
                        defaultValue={email}
                        name="email"
                        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                    />
                </div>

                {/* Nationality */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label htmlFor="nationality">Where are you from?</label>
                        <img
                            src={countryFlag}
                            alt="Country flag"
                            className="h-5 rounded-sm"
                        />
                    </div>

                    {/* Select country component */}
                    {children}
                </div>

                {/* National ID number */}
                <div className="space-y-2">
                    <label htmlFor="nationalID">National ID number</label>
                    <input
                        name="nationalID"
                        defaultValue={nationalID}
                        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                    />
                </div>

                {/* Update button */}
                <div className="flex justify-end items-center gap-6">
                    <SubmitButton pendingText="Updating..."> Update Profile</SubmitButton>
                </div>
            </form>
        </>
    );
}

export default UpdateProfileForm;

