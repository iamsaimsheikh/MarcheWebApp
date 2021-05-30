import React, { useState } from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import Dashboard from "../components/Dashboard";
import Chat from "../components/Chat";

function IdeaHolderHomeScreen() {
  const [tab, setTab] = useState("dashboard");

  const activeTab = (tab) => {
    setTab(tab);
  };

  return (
    <div className="ideaHolderHomeScreen">
      <SideNav setTab={setTab} />
      <div>
        <TopNav />
        {tab === "dashboard" ? (
          <Dashboard />
        ) : tab === "chat" ? (
          <Chat />
        ) : null}
      </div>
    </div>
  );
}

export default IdeaHolderHomeScreen;
