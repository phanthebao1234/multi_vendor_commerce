"use client";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import {
  BookUser,
  Boxes,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Globe,
  LayoutGrid,
  LayoutList,
  LogOut,
  MonitorPlay,
  ScanSearch,
  SendToBack,
  Settings,
  Slack,
  Store,
  Truck,
  Users2,
  UserSquare2,
  Warehouse,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const [openMenu, setOpenMenu] = useState(false);
  const pathName = usePathname();
  const sidebarLinks = [
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: UserSquare2,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Our Staff",
      icon: BookUser,
      href: "/dashboard/our-staff",
    },
    {
      title: "Limi Community",
      icon: Building2,
      href: "/dashboard/community",
    },
    {
      title: "Wallet",
      icon: CircleDollarSign,
      href: "/dashboard/wallet",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "International",
      icon: Globe,
      href: "/dashboard/international",
    },
    {
      title: "Online Store",
      icon: Store,
      href: "/dashboard/store",
    },
  ];
  const catelogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Attributes",
      icon: SendToBack,
      href: "/dashboard/attributes",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "Store Sliders",
      icon: MonitorPlay,
      href: "/dashboard/sliders",
    },
  ];
  return (
    <div
      className={
        showSidebar
          ? "mt-20 sm:mt-0 sm:block dark:bg-slate-800 bg-slate-50 space-y-6 w-64 h-screen dark:text-slate-300 text-slate-800 shadow-xl fixed top-0 left-0 overflow-auto"
          : "mt-20 sm:mt-0 !hidden sm:block dark:bg-slate-800 bg-slate-50 space-y-6 w-64 h-screen dark:text-slate-300 text-slate-800 shadow-xl fixed top-0 left-0 overflow-auto"
      }
    >
      <Link className="px-6 py-4 " href="/dashboard">
        <Image src={logo} alt="logo" className="w-36 h-36" />
      </Link>
      <div className="space-y-3 flex flex-col">
        <Link
          // onClick={() => setShowSidebar(false)}
          href="/dashboard"
          className={
            pathName == "/dashboard"
              ? `flex items-center space-x-3 py-2 px-6 border-l-8 border-green-600 text-green-600`
              : `flex items-center space-x-3 py-2 px-6`
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Collapsible className="px-6 py-2">
          <CollapsibleTrigger onClick={() => setOpenMenu(!openMenu)}>
            <button className="flex items-center space-x-20 py-2 ">
              <div className="flex items-center space-x-3 transition-all duration-300">
                <Slack />
                <span>Catelogue</span>
              </div>
              <div className="transition-all duration-300">
                {openMenu ? <ChevronDown /> : <ChevronRight />}
              </div>
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-3 py-3 pl-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            {catelogueLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  // onClick={() => setShowSidebar(false)}
                  key={i}
                  href={item.href}
                  className={
                    item.href == pathName
                      ? `flex items-center space-x-3 py-1 text-green-600 text-xl`
                      : `flex items-center space-x-3 py-1`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              // onClick={() => setShowSidebar(false)}
              key={i}
              href={item.href}
              className={
                item.href == pathName
                  ? `flex items-center space-x-3 py-2 px-6 border-l-8 border-green-600 text-green-600 `
                  : `flex items-center space-x-3 py-2 px-6`
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button className="flex items-center space-x-3 py-3 px-6 bg-lime-600 rounded-md">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
