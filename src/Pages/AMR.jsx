import { Card, Typography } from "antd";

function AmrPage() {
  return (
    <div>
      <Card variant="bordered" title="Logout" style={{ borderRadius: 8 }}>
        <Typography.Text type="secondary">
          This page is used for inhouse fleet management system where we can monitor and manage our fleet of Pudu delivery robots. It provides real-time tracking, route optimization, and maintenance scheduling to ensure efficient and reliable delivery operations.
        
        </Typography.Text>
      </Card>
    </div>
  );
}

export default AmrPage;
