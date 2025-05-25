
import React from 'react';
import "../css/Sidebar.css";
import {
  MdDashboard,      
  MdBarChart,     
  MdChecklist,      
  MdCalendarToday,  
  MdNotifications,  
  MdPeople,         
  MdSettings,       
  MdLogout          
} from 'react-icons/md';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* LOGO */}
      <div className="sidebar-logo">
        🧠
      </div>

      {/* NAV PRINCIPALE */}
      <nav className="sidebar-nav">
        <ul>
          <li className="active"><MdDashboard size={24} title="Dashboard" /></li>
          <li><MdBarChart size={24} title="Analytics" /></li>
          <li><MdChecklist size={24} title="Tasks" /></li>
          <li><MdCalendarToday size={24} title="Calendar" /></li>
          <li><MdNotifications size={24} title="Notifications" /></li>
          <li><MdPeople size={24} title="Team" /></li>
        </ul>
      </nav>

      {/* FOOTER */}
      <div className="sidebar-footer">
        <ul>
          <li><MdSettings size={24} title="Settings" /></li>
          <li><MdLogout size={24} title="Logout" /></li>
        </ul>
      </div>
    </aside>
  );
}
