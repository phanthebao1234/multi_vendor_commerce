"use client";
import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  LogOut,
  Settings,
  X,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import ThemeSwitcherBtn from '@/components/ui/ThemeSwitcherBtn'

export default function Navbar() {
  return (
    <div className="flex justify-between shadow-xl items-center bg-white dark:bg-slate-800 text-slate-50 h-16 px-8 py-4 fixed top-0 w-full left-60 pr-[20rem]">
      {/* Icon */}
      <button className="text-lime-700 dark:text-lime-500">
        <AlignJustify />
      </button>
      {/* 3 Icons */}
      <div className="flex space-x-3 gap-3">
        <ThemeSwitcherBtn />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              type="button"
              className="relative inline-flex items-center text-sm font-medium text-center text-white rounded-lg bg-transparent "
            >
              <Bell className="text-lime-700 dark:text-lime-500" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -end-2">
                20
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4 pr-8">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2 gap-2">
                <Image
                  width={200}
                  height={200}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full"
                  src={"/profile.png"}
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-.55 bg-red-700 text-white rounded-full text-sm">
                      Stock out
                    </p>
                    <p>Dec 12 2024 - 12:40pm</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2 gap-2">
                <Image
                  width={200}
                  height={200}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full"
                  src={"/profile.png"}
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-.55 bg-red-700 text-white rounded-full text-sm">
                      Stock out
                    </p>
                    <p>Dec 12 2024 - 12:40pm</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2 gap-2">
                <Image
                  width={200}
                  height={200}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full"
                  src={"/profile.png"}
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-.55 bg-red-700 text-white rounded-full text-sm">
                      Stock out
                    </p>
                    <p>Dec 12 2024 - 12:40pm</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button>
              {/* <User className="text-green-600" /> */}
              <Image
                width={200}
                height={200}
                alt="User Profile"
                className="w-8 h-8 rounded-full"
                src={"/profile.png"}
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4 pr-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button
                type="button"
                className="flex items-center space-x-3 px-2"
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                type="button"
                className="flex items-center space-x-3 px-2"
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                type="button"
                className="flex items-center space-x-3 px-2"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
