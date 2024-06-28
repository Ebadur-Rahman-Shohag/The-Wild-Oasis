"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Array containing navigation links with their names, hrefs, and corresponding icons
const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathName = usePathname();
  console.log(pathName);
  // Render a side navigation menu with links and icons
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {/* Map through each navigation link */}
        {navLinks.map((link) => (
          <li key={link.name}>
            {/* Link to the corresponding href */}
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${pathName === link.href ? 'bg-primary-900' : ""}`}
              href={link.href}
            >
              {/* Display the icon */}
              {link.icon}
              {/* Display the link name */}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        {/* Sign out button */}
        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
