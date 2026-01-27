import { Badge, Image, Typography } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { BellFilled } from "@ant-design/icons";
import { Space } from "antd";
function AppHeader() {
    return (
        <div className="AppHeader">
            <Image
                width={150}
                alt="basic"
                src="src/Assets/KLG_LOGO.jpg"
            />
            <Typography.Title
                level={3}
                style={{ margin: 0, fontFamily: 'inter, sans-serif', fontSize: 30 }}
            >
                KLG IoT Dashboard
            </Typography.Title>
            <Space>
                <Badge count={5}>
                    <MailOutlined style={{fontSize: 20}} />
                </Badge>
                <Badge count={10}>
                    <BellFilled style={{fontSize: 20}}/>
                </Badge>
               
            </Space>
        </div>
    )
}
export default AppHeader;