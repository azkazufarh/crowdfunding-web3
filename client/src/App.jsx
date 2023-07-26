import React from "react";
import { Routes, Route } from "react-router-dom";

import { Sidebar, Navbar } from "./components";
import { CampaignDetail, CreateCampaign, Home, Profile } from "./pages";

function App() {
  return (
    <div className="relative sm:-8 p-4  bg-[#0D0F37] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
