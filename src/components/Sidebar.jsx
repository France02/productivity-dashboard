import React from 'react';
import "../css/Sidebar.css";
// Import delle icone dal pacchetto react-icons
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

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Logo della sidebar */}
      <div className="sidebar-logo">
        🧠
      </div>

      {/* Navigazione principale con le icone */}
      <nav className="sidebar-nav">
        <ul>
          {/* Icona dashboard evidenziata come attiva */}
          <li className="active"><MdDashboard size={24} title="Dashboard" /></li>
          <li><MdBarChart size={24} title="Analytics" /></li>
          <li><MdChecklist size={24} title="Tasks" /></li>
          <li><MdCalendarToday size={24} title="Calendar" /></li>
          <li><MdNotifications size={24} title="Notifications" /></li>
          <li><MdPeople size={24} title="Team" /></li>
        </ul>
      </nav>

      {/* Footer della sidebar con impostazioni e logout */}
      <div className="sidebar-footer">
        <ul>
          <li><MdSettings size={24} title="Settings" /></li>
          <li><MdLogout size={24} title="Logout" /></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;