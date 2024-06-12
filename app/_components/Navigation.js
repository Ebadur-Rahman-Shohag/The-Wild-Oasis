import Link from "next/link";

export default function Navigation() {
  // Navigation component for the site's main navigation menu

  return (
    <nav className="z-10 text-xl">
      {/* List of navigation links */}
      <ul className="flex gap-16 items-center">
        {/* Navigation link for Cabins */}
        <li>
          <Link href="/cabins" className="hover:text-accent-400 transition-colors">
            Cabins
          </Link>
        </li>

        {/* Navigation link for About */}
        <li>
          <Link href="/about" className="hover:text-accent-400 transition-colors">
            About
          </Link>
        </li>

        {/* Navigation link for Guest area */}
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
