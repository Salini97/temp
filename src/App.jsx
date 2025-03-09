import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import WebView from "./components/WebView";
import "./styles/styles.css";

export default function App() {
  // 🔹 State to track which section is active
  const [selectedSection, setSelectedSection] = useState("Videos Lecture");

  return (
    <div className="container">
      {/* 🔹 Sidebar (Pass function to handle button click) */}
      <Sidebar setSelectedSection={setSelectedSection} />

      <div className="main-content">
        <SearchBar />
        {/* 🔹 WebView now dynamically changes content */}
        <WebView selectedSection={selectedSection} />
      </div>
    </div>
  );
}
