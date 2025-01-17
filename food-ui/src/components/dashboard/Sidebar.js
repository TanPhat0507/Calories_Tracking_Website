import React, { useState, useEffect } from 'react';
import '../../styles/Sidebar.css'; // Import your CSS styles
import { Menu } from 'antd';
import { DashboardOutlined, AppstoreOutlined, FileTextOutlined, SettingOutlined, MenuOutlined } from '@ant-design/icons';

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Sidebar is visible initially
  const [isMobile, setIsMobile] = useState(false); // Mobile detection

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Toggle sidebar state
  };

  // Listen for window resize events to determine if we are in mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if screen width is 768px or less
      if (window.innerWidth > 768) {
        setIsCollapsed(false); // Sidebar always visible on larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Hamburger button only visible on mobile */}
      {isMobile && (
        <div className="hamburger" onClick={toggleSidebar}>
          <MenuOutlined />
        </div>
      )}
      
      {/* Sidebar */}
      <div className={`sidebar ${isMobile && isCollapsed ? 'collapsed' : ''}`}>
        <div className="logo">Nutritioners</div>
        <Menu mode="vertical" defaultSelectedKeys={['1']} className="menu">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            My Meal
          </Menu.Item>
          <Menu.Item key="3" icon={<FileTextOutlined />}>
            My Report
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default SideBar;
