
import { Navigate, Route, Routes } from "react-router-dom";
import SummaryPage from "../../Pages/Summary";
import LiveMonitoringPage from "../../Pages/LiveMonitoring";
import DeviceConfigurationPage from "../../Pages/DeviceConfiguration";
import LogoutPage from "../../Pages/Logout";
import AmrPage from "../../Pages/AMR";
import MitutoyoPage from "../../Pages/Mitutoyo";
import MachiningPage from "../../Pages/Machining";
function PageContent() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/summary" replace />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/live-monitoring" element={<LiveMonitoringPage />} />
            <Route path="/device-configuration" element={<DeviceConfigurationPage />} />
            <Route path="/amr" element={<AmrPage />} />
            <Route path="/mitutoyo" element={<MitutoyoPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/machining" element={<MachiningPage />} />
        </Routes>
    );
}

export default PageContent;