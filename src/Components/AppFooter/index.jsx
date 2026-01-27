import { Typography } from "antd";
import {  Col, Row  } from 'antd';
function AppFooter() {
    return (
        <div className="AppFooter">
        <Row style={{ width: "100%" }}>
            <Col span={8} style={{ textAlign:"center" }}>
                <Typography.Link href="https://www.instagram.com" target="_blank">Test link instagram footer</Typography.Link>
            </Col>
            <Col span={8} style={{ textAlign:"center" }}>
                <Typography.Link href="https://google.com" target="_blank">Privacy Policy</Typography.Link>
            </Col>
            <Col span={8} style={{ textAlign:"center" }}>
                <Typography.Link href="https://facebook.com" target="_blank">Terms of Service</Typography.Link>
            </Col>
        </Row>
        </div>

    )
}
export default AppFooter;