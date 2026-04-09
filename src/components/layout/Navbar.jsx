import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "HOME", path: "/" },
  { label: "SERVICES", path: "/services/caribbean-escapes" },
  { label: "GALLERY", path: "/gallery" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="site-shell">
          <div className="flex items-center justify-between h-[var(--site-header-height)]">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <span className="text-primary font-bold text-lg lg:text-xl tracking-[0.18em]">
                D&amp;L
              </span>
              <span className="text-foreground/60 text-[10px] lg:text-[11px] tracking-[0.26em] uppercase hidden sm:block">
                Travel Adventures
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] xl:text-[12px] tracking-[0.2em] font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground/50 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+1-555-0123"
                className="flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors text-[11px] xl:text-xs tracking-[0.18em]"
              >
                <Phone className="w-3.5 h-3.5" />
                CALL NOW
              </a>
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-[11px] tracking-[0.15em] font-semibold px-6 h-9">
                  GET A QUOTE
                </Button>
              </Link>
            </div>

            <button
              className="lg:hidden text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-0 top-[var(--site-header-height)] z-50 border-b border-border bg-background px-6 py-6"
            >
              <div className="site-shell">
                <div className="flex flex-col gap-6">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-sm tracking-[0.2em] font-medium border-b border-border pb-4 ${
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-foreground/60"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="flex flex-col gap-3 mt-2">
                    <a
                      href="tel:+1-555-0123"
                      className="flex items-center gap-2 text-foreground/60 text-sm tracking-wider"
                    >
                      <Phone className="w-4 h-4" />
                      CALL NOW
                    </a>
                    <Link to="/contact">
                      <Button className="w-full bg-primary text-primary-foreground text-xs tracking-[0.15em] font-semibold h-12">
                        GET A QUOTE
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}