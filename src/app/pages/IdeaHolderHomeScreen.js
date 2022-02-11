import React, { useState } from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import Dashboard from "../components/Dashboard";
import Chat from "../components/Chat";
import Marketplace from '../components/Marketplace'

function IdeaHolderHomeScreen({profilePicture}) {
  const [tab, setTab] = useState("dashboard");
  const [sidebarActive,setSidebarActive] = useState(false);
  

  

  return (
    <div className="ideaHolderHomeScreen">
      <SideNav setTab={setTab} sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
      <div>
        <TopNav profilePicture={profilePicture} sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
        {tab === "dashboard" ? (
          <Dashboard sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
        ) : tab === "chat" ? (
          <Chat  />
        ) : tab ==="marketplace" ? (
          <Marketplace sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
        ) : tab === null 
      }
      </div>
    </div>
  );
}

export default IdeaHolderHomeScreen;
