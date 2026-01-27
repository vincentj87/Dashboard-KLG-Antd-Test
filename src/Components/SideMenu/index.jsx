import { Menu } from "antd";
import { AppstoreOutlined, ShoppingCartOutlined, CarOutlined } from "@ant-design/icons";

function SideMenu() {
    return (
        <Menu
            onClick={(items) => {

            }}
            items={[
                {
                    label: "Dashboard",
                    key: '/',
                    icon: <AppstoreOutlined />
                },
                {
                    label: "Inventory",
                    key: '/inventory',
                    icon: <CarOutlined />
                },
                {
                    label: "Settings",
                    key: '/settings',
                    icon: <ShoppingCartOutlined />
                },
            ]}
        >
        
        </Menu>
    )
}
export default SideMenu;