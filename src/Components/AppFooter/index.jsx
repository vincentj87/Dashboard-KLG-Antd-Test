import { Typography, Space } from "antd";
import { 
    CopyrightOutlined, 
    GlobalOutlined,
    MailOutlined,
    PhoneOutlined 
} from "@ant-design/icons";
import "./footer.css";

function AppFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <div className="footer-content">
                <div className="footer-section footer-left">
                    <Space size="small" className="footer-brand">
                        <CopyrightOutlined className="footer-icon" />
                        <span className="footer-text">
                            {currentYear} Kawan Lama Group. All rights reserved.
                        </span>
                    </Space>
                </div>
                
                <div className="footer-section footer-center">
                    <Space size="large" className="footer-links">
                        <Typography.Link 
                            href="#privacy" 
                            className="footer-link"
                        >
                            Privacy Policy
                        </Typography.Link>
                        <Typography.Link 
                            href="#terms" 
                            className="footer-link"
                        >
                            Terms of Service
                        </Typography.Link>
                        <Typography.Link 
                            href="#support" 
                            className="footer-link"
                        >
                            Support
                        </Typography.Link>
                    </Space>
                </div>
                
                <div className="footer-section footer-right">
                    <Space size="middle" className="footer-contact">
                        <a 
                            href="mailto:support@kawanlama.com" 
                            className="footer-contact-link"
                            aria-label="Email support"
                        >
                            <MailOutlined className="footer-contact-icon" />
                        </a>
                        <a 
                            href="tel:+62123456789" 
                            className="footer-contact-link"
                            aria-label="Phone support"
                        >
                            <PhoneOutlined className="footer-contact-icon" />
                        </a>
                        <a 
                            href="https://www.kawanlama.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="footer-contact-link"
                            aria-label="Website"
                        >
                            <GlobalOutlined className="footer-contact-icon" />
                        </a>
                    </Space>
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;