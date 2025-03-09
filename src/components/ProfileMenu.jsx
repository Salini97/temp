import { useState } from "react";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="profile-container">
      <button className="profile-button" onClick={() => setOpen(!open)}>⚪</button>

      {open && (
        <div className="profile-menu">
          <button className="profile-option">Kshitij Kishore</button>
          <button className="profile-option">Edit Profile</button>
          <button className="logout-button">Logout</button>
        </div>
      )}
    </div>
  );
}