"use client";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  // The useEffect hook is used to perform side effects in React, such as modifying the DOM or fetching data.
  useEffect(() => {
    // If isDarkMode is true
    if(isDarkMode) {
    // Add the "dark" class to the <html> element (document.documentElement).
      document.documentElement.classList.add("dark");
    }else{
    // Add the "light" class to the <html> element.
    // argeting the <html> element ensures the mode applies globally, and it’s a common practice in CSS frameworks 
    // (e.g., TailwindCSS uses the dark class to apply dark mode styles).
      document.documentElement.classList.add("light");
    }
  });
  return (
    <div
      className={`${
        isDarkMode ? "dark" : "light"
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50  ${
          isSideBarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

// Navbar always at the layout
const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
