import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

function Header() {
  // Header component to display the site's logo and navigation menu

  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      {/* Container to center and limit the width of the content */}
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo component */}
        <Logo />
        {/* Navigation component */}
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
