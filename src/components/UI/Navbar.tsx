"use client";

import { navbarItems } from "@/constants/navbarItems";
import { useAppSelector } from "@/redux/hooks";
import { HomeOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { ConfigProvider, Layout, Menu } from "antd";
import Link from "next/link";

const { Header } = Layout;

const Navbar = () => {
  const role = useAppSelector((state) => state.userRole.role);

  return (
    <>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "transparent",
          paddingRight: "10px",
        }}
      >
        <Link href={"/"} style={{}}>
          <HomeOutlined style={{ fontSize: "30px" }} />
        </Link>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemActiveBg: "none",
                // itemSelectedColor: "black",
                colorBgBlur: "#00b96b",
                colorBgBase: "transparent",
              },
            },
          }}
        >
          <Menu
            multiple={true}
            theme="dark"
            overflowedIndicator={<MenuFoldOutlined />}
            disabledOverflow
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={navbarItems(role)}
          />
        </ConfigProvider>
      </Header>
    </>
  );
};

export default Navbar;
