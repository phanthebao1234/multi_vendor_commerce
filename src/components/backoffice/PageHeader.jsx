import React from "react";
import { Heading } from "@/components/backoffice";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function PageHeader({
  heading,
  href,
  linkTitle,
}) {
  return (
    <div className="flex justify-between py-8 mb-4">
      {/* Header */}
      <Heading title={heading} />
      <Link
        className="inline-flex items-center space-x-3 text-white bg-lime-600 hover:bg-lime-600/90 focus:ring-4 focus:outline-none focus:ring-lime-600/50 font-medium rounded-lg px-5 py-3 text-center dark:focus:ring-lime-600/55 me-2 text-base"
        href={href}
      >
        <Plus />
        <span>{linkTitle}</span>
      </Link>
    </div>
  );
}
