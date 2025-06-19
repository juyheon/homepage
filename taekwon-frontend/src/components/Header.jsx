const Header = () => {

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Taekwon</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/introduction" className="hover:underline">Introduction</a></li>
            <li><a href="/photo" className="hover:underline">Photo</a></li>
            <li><a href="/program" className="hover:underline">Program</a></li>
            <li><a href="/service" className="hover:underline">Service</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;