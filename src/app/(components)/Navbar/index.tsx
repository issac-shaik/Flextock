"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setisDarkMode, setIsSidebarCollapsed } from "@/state";
import { Bell, Menu, MoonStar, Search, Settings, Sun } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setisDarkMode(!isDarkMode));
  };
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* LEFT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 text-slate-300 rounded-full hover:bg-violet-400"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder={`Type to search groups & products`}
            className="pl-9 pr-2 py-2 w-50 md:w-80 border-2 border-slate-300 bg-white rounded-lg focus:outline-none focus:border-sky-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
            <Search className="text-slate-500" size={14} />
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}

      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-slate-500" size={24} />
              ) : (
                <MoonStar className="cursor-pointer text-slate-500" size={24} />
              )}
            </button>
          </div>
          <div className="relative">
            <Bell
              className="cursor-pointer text-slate-500 hover:text-slate-400"
              size={24}
            />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-orange-300 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-slate-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">image</div>
            <span className="font-semibold">Issac Shaik</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="cursor-pointer text-slate-500" size={24} />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
