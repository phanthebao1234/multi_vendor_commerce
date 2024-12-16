"use client"
import React from 'react'
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast"
export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme='system'>
      <Toaster position="top-center" reverseOrder={false}
  />{children}</ThemeProvider>
  )
}
