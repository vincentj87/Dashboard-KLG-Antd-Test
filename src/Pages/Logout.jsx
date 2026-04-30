import { Card, Typography } from "antd";

function LogoutPage() {
  return (
    <div>
      <Card variant="bordered" title="Logout" style={{ borderRadius: 8 }}>
        <Typography.Text type="secondary">
          You have been logged out.This page is not fully implemented yet. In a real application, this would clear user session data and redirect to the login page.    
        </Typography.Text>
      </Card>
    </div>
  );
}

export default LogoutPage;
