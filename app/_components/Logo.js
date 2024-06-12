import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  // Logo component for the site, which includes a link to the homepage

  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* Display the logo image */}
      {/* <Image src="/logo.png" height="60" width="60"  alt="The Wild Oasis logo" /> */}
      <Image src={logo} quality={100} height="60" width="60" alt="The Wild Oasis logo" />
      
      {/* Display the site name */}
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;

  
