import { Menu } from "antd";
import { 
    BarChartOutlined, 
    MonitorOutlined, 
    SettingOutlined 
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import "./sidemenu.css";

function SideMenu() {
    const navigate = useNavigate();
    const location = useLocation();

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
    ];

    const handleMenuClick = ({ key }) => {
        navigate(key);
    };

    return (
        <div className="side-menu-container">
            <div className="menu-header">
                <span className="menu-title">Navigation</span>
            </div>
            <Menu
                mode="inline"
                selectedKeys={[location.pathname === "/" ? "/summary" : location.pathname]}
                onClick={handleMenuClick}
                items={menuItems}
                className="professional-menu"
            />
        </div>
    );
}

export default SideMenu;