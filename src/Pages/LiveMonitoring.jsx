import { Card, Space, Table, Tag, Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";

function LiveMonitoringPage() {
  const devices = [
    {
      key: "DEV-001",
      name: "Cold Room Sensor 01",
      location: "Warehouse A",
      status: "online",
      temperature: 4.2,
      humidity: 62,
      lastUpdate: "2m ago",
    },
    {
      key: "DEV-002",
      name: "Ambient Sensor 02",
      location: "Office Floor 3",
      status: "online",
      temperature: 24.6,
      humidity: 55,
      lastUpdate: "1m ago",
    },
    {
      key: "DEV-003",
      name: "Greenhouse Node 01",
      location: "Site B",
      status: "maintenance",
      temperature: 28.1,
      humidity: 71,
      lastUpdate: "15m ago",
    },
    {
      key: "DEV-004",
      name: "Boiler Room Sensor",
      location: "Plant 1",
      status: "offline",
      temperature: null,
      humidity: null,
      lastUpdate: "—",
    },
  ];

  const columns = [
    {
      title: "Device",
      dataIndex: "name",
      key: "name",
      render: (value, record) => (
        <Space direction="vertical" size={0}>
          <Typography.Text strong>{value}</Typography.Text>
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            {record.key} • {record.location}
          </Typography.Text>
        </Space>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 140,
      render: (status) => {
        if (status === "online") return <Tag color="green">Online</Tag>;
        if (status === "offline") return <Tag color="red">Offline</Tag>;
        return <Tag color="gold">Maintenance</Tag>;
      },
    },
    {
      title: "Temperature",
      dataIndex: "temperature",
      key: "temperature",
      width: 160,
      render: (v) =>
        typeof v === "number" ? `${v.toFixed(1)} °C` : <Typography.Text type="secondary">—</Typography.Text>,
    },
    {
      title: "Humidity",
      dataIndex: "humidity",
      key: "humidity",
      width: 140,
      render: (v) =>
        typeof v === "number" ? `${v}%` : <Typography.Text type="secondary">—</Typography.Text>,
    },
    {
      title: "Last update",
      dataIndex: "lastUpdate",
      key: "lastUpdate",
      width: 140,
      render: (v) => <Typography.Text type="secondary">{v}</Typography.Text>,
    },
    {
      title: "",
      key: "action",
      width: 80,
      align: "right",
      render: () => (
        <Typography.Link>
          <EyeOutlined /> View
        </Typography.Link>
      ),
    },
  ];

  return (
    <div>
      <Space direction="vertical" size={16} style={{ width: "100%" }}>
        <Card
          variant="bordered"
          title="Live Monitoring"
          style={{ borderRadius: 8 }}
        >
          <Typography.Text type="secondary">
            All available IoT devices with latest temperature and humidity readings.
          </Typography.Text>
        </Card>

        <Card variant="bordered" style={{ borderRadius: 8 }}>
          <Table
            columns={columns}
            dataSource={devices}
            pagination={{ pageSize: 8, showSizeChanger: false }}
          />
        </Card>
      </Space>
    </div>
  );
}

export default LiveMonitoringPage;
