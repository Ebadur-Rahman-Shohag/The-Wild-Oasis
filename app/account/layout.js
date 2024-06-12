import SideNavigation from "@/app/_components/SideNavigation";

// Component defining the layout structure
function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      {/* Side Navigation */}
      <SideNavigation />

      {/* Main Content */}
      <div className="py-1">{children}</div>
    </div>
  );
}

export default Layout;
