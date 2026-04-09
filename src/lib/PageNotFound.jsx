import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Page Not Found</h1>
        <p className="text-muted-foreground text-sm mb-8 max-w-md">
          The page you're looking for doesn't exist. Let us help you find your way — or plan your next adventure.
        </p>
        <Link to="/">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-[11px] tracking-[0.15em] font-semibold">
            <ArrowLeft className="w-4 h-4 mr-2" />
            BACK TO HOME
          </Button>
        </Link>
      </div>
    </div>
  );
}