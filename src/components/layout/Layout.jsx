// src/components/layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-inter text-foreground">
      <Navbar />
      <main className="min-w-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}