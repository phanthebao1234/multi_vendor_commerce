import React from "react";
import SmallCard from "./SmallCard"
import { Package, RefreshCcw, ShoppingCart, Truck } from "lucide-react";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Total Orders",
      number: 441,
      iconbg: "bg-green-600",
      icon: ShoppingCart
    },
    {
      title: "Orders Pending",
      number: 132,
      iconbg: "bg-blue-600",
      icon: RefreshCcw
    },
    {
      title: "Orders Processing",
      number: 23,
      iconbg: "bg-orange-600",
      icon: Package
    },
    {
      title: "Orders Delivered",
      number: 305,
      iconbg: "bg-purple-600",
      icon: Truck
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 w-auto gap-4 py-8">
      {orderStatus.map((item, index) => {
        return <SmallCard key={index} data={item}/>;
      })}
    </div>
  );
}
