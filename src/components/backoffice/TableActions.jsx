import React from "react";
import {
  Download,
  Search,
  Trash2,
} from "lucide-react";
export default function TableActions() {
  return (
    <div className="flex justify-between items-center py-6 px-4 bg-slate-700 rounded-lg gap-8">
      {/* Export */}
      <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <div className="flex items-center space-x-3 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <Download />
          <span>Export</span>
        </div>
      </button>

      {/* Search */}
      <div className="flex-grow">
        <label
          htmlFor="default-search"
          className="sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 rtl:inset-r-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block py-3 ps-10 text-sm text-gray-900 border-2
              border-lime-300 rounded-lg focus:ring-lime-500 focus:border-lime-500
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
            placeholder="Search..."
            required
          />
          {/* <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button> */}
        </div>
      </div>
      {/* Delete */}
      <button className="flex items-center space-x-3 bg-red-600 text-white rounded-lg px-6 py-3">
        <Trash2 />
        <span>Bulk Delete</span>
      </button>
    </div>
  );
}
