import React from "react";
import "../styles/sidebar.css";

// PUBLIC_INTERFACE
const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <div className="sidebar-header">
      <div className="sidebar-brand">🍽️ Food Events</div>
    </div>
    <nav>
      <ul>
        <li className="active">
          <span>Dashboard</span>
        </li>
        {/* Future sections: <li>Settings</li> */}
      </ul>
    </nav>
    <footer className="sidebar-footer">
      <small>&copy; {new Date().getFullYear()} Food Event Manager</small>
    </footer>
  </aside>
);

export default Sidebar;
