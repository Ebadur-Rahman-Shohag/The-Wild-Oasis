import CabinList from "../_components/CabinList";
import React, { Suspense } from "react";
import Spinner from "../_components/Spinner";

export default function Page() {
  // CHANGE

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}

//*******************Data Fetching**************************
//In Next.js we should fetch data in React Server Component. This component is a React server component. So here we can fetch data.

//*********************Data Passing**************************************
//We can pass data from React Server Component to React Client Component via props.
// Ex: Here we passing the users data from this component to Counter Component. Counter Component is a React Client Component.
// We can not use React Hooks in React Server Component
