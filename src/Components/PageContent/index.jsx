
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
function PageContent() {
    return (
        <div className="PageContent">
            <Row gutter={16}>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Card variant="bordered">
                        <Statistic
                            title="Temperature"
                            value={11.28}
                            precision={1}
                            styles={{ content: { color: '#3f8600' } }}
                            prefix={<ArrowUpOutlined />}
                            suffix="°C"
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Card variant="bordered">
                        <Statistic
                            title="Idle"
                            value={9.3}
                            precision={2}
                            styles={{ content: { color: '#cf1322' } }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Card variant="bordered">
                        <Statistic
                            title="Temperature"
                            value={11.28}
                            precision={1}
                            styles={{ content: { color: '#3f8600' } }}
                            prefix={<ArrowUpOutlined />}
                            suffix="°C"
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Card variant="bordered">
                        <Statistic
                            title="Idle"
                            value={9.3}
                            precision={2}
                            styles={{ content: { color: '#cf1322' } }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>



        </div>
    )
}
export default PageContent;