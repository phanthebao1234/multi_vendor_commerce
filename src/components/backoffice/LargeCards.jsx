import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStatus = [
    {
      period: "Total Orders",
      sales: 111000,
      className: "bg-green-600",
    },
    {
      period: "Yesterday Orders",
      sales: 21000,
      className: "bg-blue-600",
    },
    {
      period: "This Month",
      sales: 711000,
      className: "bg-orange-600",
    },
    {
      period: "Last Month",
      sales: 31000,
      className: "bg-purple-600",
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((item, index) => {
        return (
          <LargeCard
            key={index}
            data={item}
          />
        );
      })}
    </div>
  );
}
