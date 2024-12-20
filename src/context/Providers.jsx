"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "@/app/api/uploadthing/core";
export default function Providers({
  children,
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
    >
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <NextSSRPlugin
        routerConfig={extractRouterConfig(
          ourFileRouter
        )}
      />
      {children}
    </ThemeProvider>
  );
}
