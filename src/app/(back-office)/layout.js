"use client"
import { Sidebar, Navbar } from "@/components/backoffice";
import { useState } from "react";

export default function Layout({ children }) {
  const [ showSidebar, setShowSidebar] = useState(true)
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar showSidebar={showSidebar} />
      <div className={`flex-grow bg-slate-100 min-h-screen transition-all duration-300 ${showSidebar ? 'lg:ml-64' : 'ml-0'}`}>
        {/* Header */}
        <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        <main className="p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 mt-16 ">{children}</main>
        {/* Main */}
      </div>
      {/* main body */}
    </div>
  );
}
