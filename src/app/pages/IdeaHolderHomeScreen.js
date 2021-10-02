import React, { useState } from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import Dashboard from "../components/Dashboard";
import Chat from "../components/Chat";
import Marketplace from '../components/Marketplace'

function IdeaHolderHomeScreen({profilePicture}) {
  const [tab, setTab] = useState("dashboard");
  

  

  return (
    <div className="ideaHolderHomeScreen">
      <SideNav setTab={setTab} />
      <div>
        <TopNav profilePicture={profilePicture} />
        {tab === "dashboard" ? (
          <Dashboard />
        ) : tab === "chat" ? (
          <Chat />
        ) : tab ==="marketplace" ? (
          <Marketplace />
        ) : tab === null 
      }
      </div>
    </div>
  );
}

export default IdeaHolderHomeScreen;
