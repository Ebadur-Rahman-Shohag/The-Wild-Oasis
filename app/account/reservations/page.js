import ReservationCard from "@/app/_components/ReservationCard";
import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";

// Metadata for the page, used for SEO or other purposes
export const metadata = {
  title: "Reservations",
};

// Component for displaying user reservations
export default async function Page() {
  const session = await auth();

  const bookings = await getBookings(session.user.guestId);

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
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
