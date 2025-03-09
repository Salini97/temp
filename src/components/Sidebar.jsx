export default function Sidebar({ setSelectedSection }) {
  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={() => setSelectedSection("Videos Lecture")}>
        Videos Lecture
      </button>
      <button className="sidebar-button" onClick={() => setSelectedSection("Notes")}>
        Notes
      </button>
      <button className="sidebar-button" onClick={() => setSelectedSection("Roadmaps")}>
        Roadmaps
      </button>
      <button className="sidebar-button" onClick={() => setSelectedSection("MCQ Practice")}>
        MCQ Practice
      </button>
    </div>
  );
}
