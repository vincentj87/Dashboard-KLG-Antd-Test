import { ConfigProvider, Space, theme } from "antd";
import "./App.css";
import AppHeader from "./Components/AppHeader";
import SideMenu from "./Components/SideMenu";
import PageContent from "./Components/PageContent";
import AppFooter from "./Components/AppFooter";
function App() {
  return (
    
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <div className="SideMenu"><SideMenu /></div>
        <div className="PageContent"><PageContent /></div>
      </div>
      <AppFooter />

    </div>
   
  );
}
export default App;