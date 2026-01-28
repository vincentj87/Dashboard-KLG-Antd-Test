import { Card, Col, Row, Statistic, Segmented } from "antd";
import { useState } from "react";
import {
  AlertOutlined,
  CloudOutlined,
  DeploymentUnitOutlined,
  FireOutlined,
} from "@ant-design/icons";
import { Line, Pie } from "@ant-design/charts";

function SummaryPage() {
  const [timeRange, setTimeRange] = useState("24h");

  const trendDataByRange = {
    "24h": [
      { time: "00:00", value: 22.1 },
      { time: "04:00", value: 21.8 },
      { time: "08:00", value: 22.3 },
      { time: "12:00", value: 24.2 },
      { time: "16:00", value: 25.0 },
      { time: "20:00", value: 23.6 },
    ],
    "7d": [
      { time: "Mon", value: 23.4 },
      { time: "Tue", value: 24.1 },
      { time: "Wed", value: 24.8 },
      { time: "Thu", value: 25.2 },
      { time: "Fri", value: 24.7 },
      { time: "Sat", value: 23.9 },
      { time: "Sun", value: 23.5 },
    ],
    "30d": [
      { time: "Week 1", value: 23.1 },
      { time: "Week 2", value: 23.9 },
      { time: "Week 3", value: 24.6 },
      { time: "Week 4", value: 24.0 },
    ],
  };

  const statusDataByRange = {
    "24h": [
      { type: "Online", value: 18 },
      { type: "Offline", value: 2 },
      { type: "Maintenance", value: 1 },
    ],
    "7d": [
      { type: "Online", value: 19 },
      { type: "Offline", value: 1 },
      { type: "Maintenance", value: 2 },
    ],
    "30d": [
      { type: "Online", value: 17 },
      { type: "Offline", value: 2 },
      { type: "Maintenance", value: 3 },
    ],
  };

  const timeRangeLabels = {
    "24h": "Last 24 hours",
    "7d": "Last 7 days",
    "30d": "Last 30 days",
  };

  const trendData = trendDataByRange[timeRange];

  const lineConfig = {
    data: trendData,
    height: 300,
    xField: "time",
    yField: "value",
    smooth: true,
    point: {
      size: 4,
      shape: "circle",
      style: {
        fill: "#667eea",
        stroke: "#fff",
        lineWidth: 2,
      },
    },
    line: {
      color: "#667eea",
      size: 2,
    },
    area: {
      style: {
        fill: "l(270) 0:#ffffff 0.5:#eef2ff 1:#667eea",
      },
    },
    tooltip: {
      showCrosshairs: true,
      shared: true,
    },
    animation: {
      appear: {
        animation: "wave-in",
        duration: 1200,
      },
    },
  };

  const statusData = statusDataByRange[timeRange];

  const pieConfig = {
    data: statusData,
    height: 300,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    innerRadius: 0.6,
    legend: { position: "bottom" },
    label: {
      text: "type",
      style: { fontWeight: 600 },
    },
    tooltip: { title: "type" },
    color: ["#52c41a", "#ff4d4f", "#faad14"],
    interactions: [{ type: "element-active" }],
    statistic: {
      title: false,
      content: {
        style: { fontSize: 14, fontWeight: 600 },
        content: "Device Status",
      },
    },
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card variant="bordered">
            <Statistic
              title="Average Temperature"
              value={24.4}
              precision={1}
              prefix={<FireOutlined />}
              suffix="°C"
              styles={{ content: { color: "#cf1322" } }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card variant="bordered">
            <Statistic
              title="Average Humidity"
              value={56.8}
              precision={1}
              prefix={<CloudOutlined />}
              suffix="%"
              styles={{ content: { color: "#1677ff" } }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card variant="bordered">
            <Statistic
              title="Active Devices"
              value={18}
              prefix={<DeploymentUnitOutlined />}
              suffix="devices"
              styles={{ content: { color: "#3f8600" } }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card variant="bordered">
            <Statistic
              title="Open Alerts"
              value={3}
              prefix={<AlertOutlined />}
              suffix="alerts"
              styles={{ content: { color: "#faad14" } }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={14}>
          <Card
            variant="bordered"
            title={`Temperature Trend (${timeRangeLabels[timeRange]})`}
            extra={
              <Segmented
                size="small"
                value={timeRange}
                onChange={(value) => setTimeRange(value)}
                options={[
                  { label: "24 h", value: "24h" },
                  { label: "7 days", value: "7d" },
                  { label: "30 days", value: "30d" },
                ]}
              />
            }
            style={{ borderRadius: 8 }}
          >
            <Line {...lineConfig} />
          </Card>
        </Col>
        <Col xs={24} lg={10}>
          <Card
            variant="bordered"
            title="Device Status Distribution"
            extra={
              <Segmented
                size="small"
                value={timeRange}
                onChange={(value) => setTimeRange(value)}
                options={[
                  { label: "24 h", value: "24h" },
                  { label: "7 days", value: "7d" },
                  { label: "30 days", value: "30d" },
                ]}
              />
            }
            style={{ borderRadius: 8 }}
          >
            <Pie {...pieConfig} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default SummaryPage;
