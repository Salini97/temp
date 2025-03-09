export default function WebView({ selectedSection }) {
  // 🔹 Content Data Based on Selection
  const contentData = {
    "Videos Lecture": [
      "Video 1", "Video 2", "Video 3", "Video 4", "Video 5",
      "Video 6", "Video 7", "Video 8", "Video 9", "Video 10",
      "Video 11", "Video 12", "Video 13", "Video 14", "Video 15"
    ],
    Notes: [
      "Note 1", "Note 2", "Note 3", "Note 4", "Note 5",
      "Note 6", "Note 7", "Note 8", "Note 9", "Note 10",
      "Note 11", "Note 12", "Note 13", "Note 14", "Note 15"
    ],
    Roadmaps: [
      "Roadmap 1", "Roadmap 2", "Roadmap 3", "Roadmap 4", "Roadmap 5",
      "Roadmap 6", "Roadmap 7", "Roadmap 8", "Roadmap 9", "Roadmap 10",
      "Roadmap 11", "Roadmap 12", "Roadmap 13", "Roadmap 14", "Roadmap 15"
    ],
  };

  return (
    <div className="web-view">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="grid-item">
          {contentData[selectedSection][i]} {/* 🔹 Dynamically Insert Content */}
        </div>
      ))}
    </div>
  );
}
