
import { Navigate, Route, Routes } from "react-router-dom";
import SummaryPage from "../../Pages/Summary";
import LiveMonitoringPage from "../../Pages/LiveMonitoring";
import DeviceConfigurationPage from "../../Pages/DeviceConfiguration";

function PageContent() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/summary" replace />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/live-monitoring" element={<LiveMonitoringPage />} />
            <Route path="/device-configuration" element={<DeviceConfigurationPage />} />
            <Route path="*" element={<Navigate to="/summary" replace />} />
        </Routes>
    );
}

export default PageContent;