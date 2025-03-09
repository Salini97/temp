import ProfileMenu from "./ProfileMenu";
export default function SearchBar() {
  return (
    <div className="nav-bar">
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div>
       <ProfileMenu />
      </div>
    </div>
  );
}
