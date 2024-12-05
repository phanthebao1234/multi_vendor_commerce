import { Sidebar, Navbar } from "@/components/backoffice";

export default function Layout({ children }) {
  return (
    <div className="flex gap-1">
      {/* sidebar */}
      <Sidebar />
      <div className="w-full">
        {/* Header */}
        <Navbar />
        <main>{children}</main>
        {/* Main */}
      </div>
      {/* main body */}
    </div>
  );
}
