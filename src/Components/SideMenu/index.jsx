import { Menu } from "antd";
import { 
    BarChartOutlined, 
    MonitorOutlined, 
    SettingOutlined
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./sidemenu.css";

function SideMenu() {
    const navigate = useNavigate();
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(true);

    const menuItems = [
        {
            label: "Summary",
            key: '/summary',
            icon: <BarChartOutlined />,
        },
        {
            label: "Live Monitoring",
            key: '/live-monitoring',
            icon: <MonitorOutlined />,
        },
        {
            label: "Device Configuration",
            key: '/device-configuration',
            icon: <SettingOutlined />,
        },
        {
            label: "Mitutoyo",
            key: '/mitutoyo',
            icon: <SettingOutlined />,
        },
        {
            label: "AMR",
            key: '/amr',
            icon: <SettingOutlined />,
        },
        {
            label: "Machining",
            key: '/machining',
            icon: <SettingOutlined />,
        },
        {
            label: "Logout",
            key: '/logout',
            icon: <SettingOutlined />,
        }
    ];

    const handleMenuClick = ({ key }) => {
        navigate(key);
    };

    const handleMouseEnter = () => {
        setCollapsed(false);
    };

    const handleMouseLeave = () => {
        setCollapsed(true);
    };

    return (
        <div 
            className={`side-menu-container ${collapsed ? 'collapsed' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* <div className="menu-header">
                <span className="menu-title">{!collapsed && 'Navigation'}</span>
            </div> */}
            
            <Menu
                mode="inline"
                inlineCollapsed={collapsed}
                selectedKeys={[location.pathname === "/" ? "/summary" : location.pathname]}
                onClick={handleMenuClick}
                items={menuItems}
                className="professional-menu"
            />
        </div>
    );
}

export default SideMenu;