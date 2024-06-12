import CabinList from "../_components/CabinList";
import React, { Suspense } from "react";
import Spinner from "../_components/Spinner";

// Metadata for the page, used by the framework for SEO or other purposes
export const metadata = {
  title: "Cabins",
};

// Disable revalidation (cache) for this page
// export const revalidate = 0;

export default function Page() {
  // The main page component for displaying the list of luxury cabins

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

      {/* Suspense component to handle lazy loading of CabinList */}
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
