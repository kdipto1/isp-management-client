"use client";

import { navbarItems } from "@/constants/navbarItems";

import { useAppSelector } from "@/redux/hooks";

import { BankFilled, HomeOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
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
          // backgroundColor: "wheat",
          paddingRight: "10px",
        }}
      >
        <Link href={"/"} style={{}}>
          <HomeOutlined style={{ fontSize: "30px" }} />
        </Link>
        {/* <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemActiveBg: "none",
                itemSelectedColor: "black",
              },
            },
          }}
        > */}

        <Menu
          multiple={true}
          theme="dark"
          overflowedIndicator={<MenuFoldOutlined />}
          disabledOverflow
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={navbarItems(role)}
        />

        {/* </ConfigProvider> */}
      </Header>
    </>
  );
};

export default Navbar;
