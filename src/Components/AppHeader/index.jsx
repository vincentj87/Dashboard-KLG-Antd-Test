import { Badge, Space, Avatar, Dropdown, Button } from "antd";
import { MailOutlined, BellFilled, UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import kawanLamaLogo from "../../Assets/kawan-lama-logo.png";
import "./header.css";

function AppHeader() {
    const userMenuItems = [
        {
            key: 'profile',
            label: 'Profile',
            icon: <UserOutlined />,
        },
        {
            key: 'settings',
            label: 'Settings',
            icon: <SettingOutlined />,
        },
        {
            type: 'divider',
        },
        {
            key: 'logout',
            label: 'Logout',
            icon: <LogoutOutlined />,
            danger: true,
        },
    ];

    return (
        <header className="app-header">
            <div className="header-left">
                <div className="logo-container">
                    <img 
                        src={kawanLamaLogo} 
                        alt="Kawan Lama Group Logo" 
                        className="logo-image"
                    />
                </div>
                <div className="header-title">
                    <span className="title-main">IoT Dashboard</span>
                    <span className="title-subtitle">Kawan Lama Group</span>
                </div>
            </div>
            
            <div className="header-right">
                <Space size="large" className="header-actions">
                    <Badge count={5} size="small" offset={[-2, 2]}>
                        <Button 
                            type="text" 
                            icon={<MailOutlined />} 
                            className="header-icon-btn"
                            aria-label="Messages"
                        />
                    </Badge>
                    <Badge count={10} size="small" offset={[-2, 2]}>
                        <Button 
                            type="text" 
                            icon={<BellFilled />} 
                            className="header-icon-btn"
                            aria-label="Notifications"
                        />
                    </Badge>
                    <Dropdown 
                        menu={{ items: userMenuItems }}
                        placement="bottomRight"
                        trigger={['click']}
                    >
                        <Button 
                            type="text" 
                            className="user-avatar-btn"
                            aria-label="User menu"
                        >
                            <Avatar 
                                size="default" 
                                icon={<UserOutlined />} 
                                className="user-avatar"
                            />
                        </Button>
                    </Dropdown>
                </Space>
            </div>
        </header>
    );
}

export default AppHeader;