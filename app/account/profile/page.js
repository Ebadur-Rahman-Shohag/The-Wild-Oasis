import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

// Metadata for the page, used for SEO or other purposes
export const metadata = {
  title: "Update Profile",
};

// Component for updating guest profile information
export default async function Page() {
  // CHANGE
  const countryFlag = "pt.jpg"; // Placeholder for country flag image
  const nationality = "portugal"; // Placeholder for nationality

  const session = await auth();
  // console.log(session);

  const guest = await getGuest(session.user.email);
  // console.log(guest);

  return (
    <div>
      {/* Heading */}
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      {/* Description */}
      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
