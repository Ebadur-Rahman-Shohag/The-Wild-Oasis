import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  // Render a sign out button with an icon and text
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
        {/* Icon */}
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
        {/* Text */}
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
