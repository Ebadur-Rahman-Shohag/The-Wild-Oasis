import ReservationCard from "@/app/_components/ReservationCard";
import Link from "next/link";

// Metadata for the page, used for SEO or other purposes
export const metadata = {
  title: "Reservations",
};

// Component for displaying user reservations
export default function Page() {
  // CHANGE
  const bookings = []; // Placeholder for user reservations

  return (
    <div>
      {/* Heading */}
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {/* Conditional rendering based on bookings availability */}
      {bookings.length === 0 ? (
        // Message when no reservations are available
        <p className="text-lg">
          You have no reservations yet. Check out our
          <Link className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        // List of reservations
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
