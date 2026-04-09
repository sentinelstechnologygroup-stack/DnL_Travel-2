// src/App.jsx
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import CaribbeanEscapes from "./pages/services/CaribbeanEscapes";
import EuropeanAdventures from "./pages/services/EuropeanAdventures";
import CruisePlanning from "./pages/services/CruisePlanning";
import AllInclusiveResorts from "./pages/services/AllInclusiveResorts";
import DestinationWeddings from "./pages/services/DestinationWeddings";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PPCLanding from "./pages/PPCLanding";

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          {/* PPC Landing - no layout wrapper for minimal distraction */}
          <Route path="/lp/travel-advisor" element={<PPCLanding />} />

          {/* Main layout routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services/caribbean-escapes" element={<CaribbeanEscapes />} />
            <Route path="/services/european-adventures" element={<EuropeanAdventures />} />
            <Route path="/services/cruise-planning" element={<CruisePlanning />} />
            <Route path="/services/all-inclusive-resorts" element={<AllInclusiveResorts />} />
            <Route path="/services/destination-weddings" element={<DestinationWeddings />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;