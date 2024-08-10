"use client";
import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <div>
      {/* Top logo */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>Logo</div>
        <h1 className="font-extrabold text-2xl">STOX</h1>
        <button
          className="md:hidden px-3 py-3 bg-slate-100 rounded-full hover:bg-sky-200"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* Links */}
      <div className="flex-grow mt-8">{/* links here */}</div>
      {/* footer */}
      <div>
        <p className="text-center text-xs text-slate-500">&copy; 2024 Stox</p>
      </div>
    </div>
  );
};
export default Sidebar;
