/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { setIsSideBarCollapsed } from "@/state";
import {
  Archive,
  Clipboard,
  DollarSign,
  Icon,
  Layout,
  LucideIcon,
  Menu,
  SlidersHorizontal,
  User,
  User2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const Sidebar = () => {
  const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed,
  }: SidebarLinkProps) => {
    const pathName = usePathname();
    const isActive =
      pathName === href || (pathName === "/" && href === "/dashboard");
    return (
      <Link href={href}>
        <div
          className={`cursor-pointer flex items-center ${
            isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
          }
         hover:text-blue-500 hover:bg-blue-100 gap-3 transition-color ${
           isActive ? "bg-blue-200 text-white" : ""
         }`}
        >
          <Icon className="w-6 h-6 !text-gray-700" />
          <span
            className={`${
              isCollapsed ? "hidden" : "block"
            } font-medium text-gray-700`}
          >
            {label}
          </span>
        </div>
      </Link>
    );
  };
  const dispatch = useDispatch();
  const isSideBarCollapsed = useSelector(
    (state: any) => state.global.isSideBarCollapsed
  );

  const toggleSideBar = () => {
    dispatch(setIsSideBarCollapsed(!isSideBarCollapsed));
  };
  const sidebarClassNames = `fixed flex flex-col ${
    isSideBarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transision-all
   duration-300 overflow-hidden h-full shadow-md z-40`;
  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">STOCK</h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSideBar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* LINKS */}
      <div className="flex-grow mt-8">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dasboard"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Archive"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={User2}
          label="Archive"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Archive"
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={DollarSign}
          label="Archive"
          isCollapsed={isSideBarCollapsed}
        />
      </div>
      {/* FOOTER */}
      <div className={`${isSideBarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">&copy; 2024</p>
      </div>
    </div>
  );
};

export default Sidebar;
