// Importing necessary dependencies and functions
import { getCabin, getCabins } from "@/app/_lib/data-service";
import Reservation from "@/app/_components/Reservation";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";

// Generate Metadata Dynamically based on the cabin ID
export async function generateMetadata({ params }) {
  // Fetching cabin data using the getCabin function
  const cabin = await getCabin(params.cabinId);
  const { name } = cabin;
  // Returning metadata with the title containing the cabin name
  return { title: `Cabin ${name}` };
}

// Making Dynamic Pages Static With generateStaticParams
export async function generateStaticParams() {
  // Fetching all cabins
  const cabins = await getCabins();
  // Mapping cabin IDs to params
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  // Returning IDs as static params
  return ids;
}

// Revalidation interval for static regeneration (1 hour)
export const revalidate = 3600;

// Page component to display details of a specific cabin
export default async function Page({ params }) {
  // Fetching cabin data using the getCabin function
  const cabin = await getCabin(params.cabinId);
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(id);

  // const [settings, bookedDates] = await Promise.all([
  //   getSettings(),
  //   getBookedDatesByCabinId(id),
  // ]);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      {/* Reservation section */}
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}

// PLACEHOLDER DATA
// const cabin = {
//   id: 89,
//   name: "001",
//   maxCapacity: 2,
//   regularPrice: 250,
//   discount: 0,
//   description:
//     "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
//   image:
//     "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg",
// };

// Generate Metadata Static way
// export const metadata = {
//   title: "Cabin",
// };
