import React from "react";
import "../css/Dashboard.css";
import {
  MdPeople,
  MdAttachMoney,
  MdShoppingCart,
  MdBarChart,
  MdCheckCircle,
  MdCalendarMonth,
  MdDownload,
  MdGridView,
  MdOutlineSettingsBackupRestore
} from "react-icons/md";
import { GiTomato } from "react-icons/gi";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="overview">
        <div className="overview-left">
          <h2 className="dashboard-title">Dashboard Overview</h2>
          <p className="dashboard-subtitle">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="icons">
          <div className="icon-wrapper">
            <MdCalendarMonth size={28} />
          </div>
          <div className="icon-wrapper">
            <MdDownload size={28} />
          </div>
          <div className="icon-wrapper">
            <MdGridView size={28} />
          </div>
          <div className="icon-wrapper">
            <MdOutlineSettingsBackupRestore size={28} />
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Card 1 - Users */}
        <div className="card card1">
          <div className="card-content">
            <div className="metric-header">
              <div className="card-icon bg-gradient-blue">
                <MdPeople size={28} color="white" />
              </div>
              <div className="metric-trend positive">
                <span className="trend-arrow">↗</span>
                <span>+5.2%</span>
              </div>
            </div>
            <h3 className="metric-title">Total Users</h3>
            <p className="metric-number">1,234</p>

          </div>
        </div>

        {/* Card 2 - Revenue */}
        <div className="card card2">
          <div className="card-content">
            <div className="metric-header">
              <div className="card-icon bg-gradient-green">
                <MdAttachMoney size={28} color="white" />
              </div>
              <div className="metric-trend positive">
                <span className="trend-arrow">↗</span>
                <span>+8.7%</span>
              </div>
            </div>
            <h3 className="metric-title">Revenue</h3>
            <p className="metric-number">$32,400</p>
          </div>
        </div>

        {/* Card 3 - Orders */}
        <div className="card card3">
          <div className="card-content">
            <div className="metric-header">
              <div className="card-icon bg-gradient-orange">
                <MdShoppingCart size={28} color="white" />
              </div>
              <div className="metric-trend negative">
                <span className="trend-arrow">↘</span>
                <span>-3.4%</span>
              </div>
            </div>
            <h3 className="metric-title">Orders</h3>
            <p className="metric-number">320</p>
          </div>
        </div>

        {/* Card 4 - Sales Overview */}
        <div className="card card4">
          <div className="card-glow card-glow-purple"></div>
          <div className="chart-header">
            <h3 className="chart-title">Sales Overview</h3>
            <div className="chart-period">Last 7 days</div>
          </div>
          <div className="chart-container">
            <div className="chart-bars">
              <div className="bar" style={{ height: '60%' }}></div>
              <div className="bar" style={{ height: '80%' }}></div>
              <div className="bar" style={{ height: '45%' }}></div>
              <div className="bar" style={{ height: '90%' }}></div>
              <div className="bar" style={{ height: '70%' }}></div>
              <div className="bar" style={{ height: '85%' }}></div>
              <div className="bar" style={{ height: '95%' }}></div>
            </div>
            <div className="chart-labels">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        {/* Card 5 - Tasks */}
        <div className="card card5">
          <div className="tasks-header">
            <h3 className="tasks-title">Active Tasks</h3>
            <div className="tasks-count">3/5</div>
          </div>
          <ul className="tasks-list">
            <li className="task-item completed">
              <MdCheckCircle className="task-icon completed" />
              <span>Finish project documentation</span>
            </li>
            <li className="task-item in-progress">
              <MdCheckCircle className="task-icon in-progress" />
              <span>Update UI components</span>
            </li>
            <li className="task-item pending">
              <MdCheckCircle className="task-icon pending" />
              <span>Fix bugs in backend</span>
            </li>
          </ul>
        </div>

        {/* Card 6 - Pomodoro Timer */}
        <div className="card card6">
          <div className="pomodoro-container">
            <h3 className="pomodoro-title">Focus Time</h3>
            <GiTomato className="tomato-icon" />
            <div className="timer-display">25:00</div>
            <button className="pomodoro-btn">Start Session</button>
          </div>
        </div>

        {/* Card 7 - Weekly Stats Redesign */}
        <div className="card card7">
          <div className="weekly-header">
            <h3 className="weekly-title-new">Weekly Summary</h3>
            <span className="weekly-icon">📈</span>
          </div>
          <div className="weekly-body">
            <p className="weekly-tasks">
              Tasks completed: <strong>15/20</strong>
            </p>
            <p className="weekly-change">▲ 25% better than last week</p>
            <div className="weekly-progress-bar">
              <div className="progress-fill" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>


        {/* Card 8 - Customer Feedback */}
        <div className="card card8">
          <div className="feedback-header">
            <h3 className="feedback-title">Customer Feedback</h3>
            <div className="rating-display">
              <div className="stars">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star half">★</span>
              </div>
              <span className="rating-text">4.7/5</span>
            </div>
          </div>
          <p className="feedback-subtitle">Based on 150 reviews this month</p>
          <div className="feedback-chart">
            <div className="rating-bars">
              <div className="rating-row">
                <span>5★</span>
                <div className="rating-bar">
                  <div className="rating-fill" style={{ width: '85%' }}></div>
                </div>
                <span>85%</span>
              </div>
              <div className="rating-row">
                <span>4★</span>
                <div className="rating-bar">
                  <div className="rating-fill" style={{ width: '10%' }}></div>
                </div>
                <span>10%</span>
              </div>
              <div className="rating-row">
                <span>3★</span>
                <div className="rating-bar">
                  <div className="rating-fill" style={{ width: '3%' }}></div>
                </div>
                <span>3%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 9 - Recent Notifications */}
        <div className="card card9">
          <div className="card-glow card-glow-indigo"></div>
          <div className="notifications-header">
            <h3 className="notifications-title">Recent Activity</h3>
            <div className="notification-count">4</div>
          </div>
          <ul className="notifications-list">
            <li className="notification-item new">
              <div className="notification-icon">💬</div>
              <div className="notification-content">
                <span className="notification-text">New message from Marco</span>
                <span className="notification-time">2m ago</span>
              </div>
            </li>
            <li className="notification-item warning">
              <div className="notification-icon">⚠️</div>
              <div className="notification-content">
                <span className="notification-text">Backup not completed</span>
                <span className="notification-time">1h ago</span>
              </div>
            </li>
            <li className="notification-item success">
              <div className="notification-icon">✅</div>
              <div className="notification-content">
                <span className="notification-text">Server updated successfully</span>
                <span className="notification-time">3h ago</span>
              </div>
            </li>
            <li className="notification-item info">
              <div className="notification-icon">📅</div>
              <div className="notification-content">
                <span className="notification-text">Meeting confirmed for tomorrow</span>
                <span className="notification-time">5h ago</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
