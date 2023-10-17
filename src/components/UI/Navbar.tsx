"use client";
import { navbarItems } from "@/constants/navbarItems";
import { getUserInfo } from "@/services/auth.service";
import {
  BankFilled,
  EllipsisOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Layout, Menu } from "antd";
import Link from "next/link";

const { Header } = Layout;

const Navbar = () => {
  const { role } = getUserInfo() as any;
  return (
    <>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "wheat",
          paddingRight: "10px",
        }}
      >
        <Link href={"/"} style={{}}>
          <BankFilled style={{ fontSize: "30px" }} />
        </Link>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemActiveBg: "black",
                itemSelectedColor: "red",
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

            // style={{ background: "none", color: "black" }}
          />
        </ConfigProvider>
      </Header>
    </>
  );
};

export default Navbar;
