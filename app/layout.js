// import Logo from "@/app/_components/Logo";
// import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
// Importing the Josefin Sans font from Google Fonts using the next/font/google module.
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./contextAPI/ReservationContext";

/*
  The `Josefin_Sans` function is used to configure the font import with specific options.
  - `subsets: ["latin"]`: This specifies that only the Latin subset of the font should be loaded.
  - `display: "swap"`: This sets the font-display property to "swap", which improves loading performance
    by using a fallback font until the custom font loads, avoiding invisible text.
*/

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// Metadata for the page
export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

// RootLayout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Set the font class and background/text color for the body */}
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        {/* Render the Header component */}
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          {/* Render the children components */}
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
