import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/favicon.ico" alt="Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-blue-600 dark:text-white">
            SoftSell
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <ThemeToggle />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
