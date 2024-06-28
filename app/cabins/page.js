import CabinList from "../_components/CabinList";
import React, { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// Metadata for the page, used by the framework for SEO or other purposes
export const metadata = {
  title: "Cabins",
};

// Disable revalidation (cache) for this page
// export const revalidate = 0;

export default function Page({ searchParams }) {
  // The main page component for displaying the list of luxury cabins

  // console.log(searchParams);

  /*
  ***searchParams?.capacity: This is a conditional access expression or optional chaining. It checks if searchParams exists and has a property named capacity. If either condition is not met, it evaluates to undefined.

  ***The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
  */

  const filter = searchParams?.capacity ?? "all";
  return (
    <div>
      {/* Page title */}
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>

      {/* Page description */}
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      {/* Suspense component to handle lazy loading of CabinList */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
