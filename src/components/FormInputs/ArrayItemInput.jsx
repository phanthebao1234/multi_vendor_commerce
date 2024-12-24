import React, { useState } from "react";
import {
  Plus,
  Tag,
  X,
} from "lucide-react";

export default function ArrayItemInput({setItems, items=[], itemTitle}) {
  const [item, setItem] = useState("");
  const [showTagForm, setShowTagForm] =
    useState(false);
  function addItem() {
    if (item.length > 0) {
        setItems([...items, item]);
        setItem("");
    }
  }
  function removeItem(index) {
    const newItems = [...items];
    newItems.slice(index, 1);
    setItems(newItems);
  }
  // Tag End
  return (
    <div className="sm:col-span-2">
      {showTagForm ? (
        <div className="flex items-center">
          <label
            htmlFor="voice-search"
            className="sr-only"
          >
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              onChange={(e) =>
                setItem(e.target.value)
              }
              value={item}
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
              placeholder={`Create ${itemTitle}...`}
              required
            />
          </div>
          <button
            onClick={addItem}
            type="button"
            className="inline-flex items-center py-2 px-2 ms-2 text-sm font-medium text-white bg-lime-700 rounded-lg border border-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
          >
            <Plus />
            Add
          </button>
          <button className="shrink-0 py-2 px-2 ms-2 text-sm font-medium bg-red-400 rounded-full flex items-center justify-center">
            <X
              onClick={() =>
                setShowTagForm(false)
              }
            />
          </button>
        </div>
      ) : (
        <button
          onClick={() =>
            setShowTagForm(true)
          }
          className="flex items-center space-x-2 text-slate-800 dark:text-slate-300 py-2 px-4"
        >
          <Plus />
          <span>Add {itemTitle}</span>
        </button>
      )}

      <div className="flex flex-wrap gap-4 mt-4">
        {items.map((item, index) => {
          return (
            <div
              onClick={() =>
                removeItem(index)
              }
              className="flex space-x-3 items-center text-slate-900 dark:text-slate-50 border py-2 px-4 bg-slate-200 dark:bg-slate-400 rounded-lg cursor-pointer"
              key={index}
            >
              <p>{item}</p>
              <button type="button">
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
