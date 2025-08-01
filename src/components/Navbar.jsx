import { appleImg, searchImg, bagImg } from "../utils";
import { navLists } from "../constants/index";

const Navbar = () => {
  return (
    <div className="w-full flex py-5 px-5 sm:px-10 items-center justify-between">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
