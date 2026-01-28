import { Card, Typography } from "antd";

function DeviceConfigurationPage() {
  return (
    <div>
      <Card variant="bordered" title="Device Configuration" style={{ borderRadius: 8 }}>
        <Typography.Text type="secondary">
          Coming soon: add/edit devices, thresholds, alert rules, and calibration settings.
        </Typography.Text>
      </Card>
    </div>
  );
}

export default DeviceConfigurationPage;
