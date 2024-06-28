import { auth } from "@/app/_lib/auth";
export const metadata = {
  title: "Account",
};

// Page component for the account page
async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);
  return (
    <div>
      {/* Welcome message */}
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome {firstName}
      </h2>
    </div>
  );
}

export default Page;
