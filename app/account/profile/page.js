import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

// Metadata for the page, used for SEO or other purposes
export const metadata = {
  title: "Update Profile",
};

// Component for updating guest profile information
export default function Page() {
  // CHANGE
  const countryFlag = "pt.jpg"; // Placeholder for country flag image
  const nationality = "portugal"; // Placeholder for nationality

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
      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
