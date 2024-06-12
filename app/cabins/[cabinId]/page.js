// Importing necessary dependencies and functions
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

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

  return (
    <div className="max-w-6xl mx-auto mt-8">
      {/* Cabin details section */}
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          {/* Image of the cabin */}
          <Image
            fill
            className="object-cover"
            src={image}
            alt={`Cabin ${name}`}
          />
        </div>

        <div>
          {/* Cabin name and description */}
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Cabin {name}
          </h3>
          <p className="text-lg text-primary-300 mb-10">{description}</p>

          {/* Cabin details list */}
          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Reservation section */}
      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
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