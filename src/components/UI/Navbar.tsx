"use client";

import { navbarItems } from "@/constants/navbarItems";

import { useAppSelector } from "@/redux/hooks";

import { BankFilled, MenuFoldOutlined } from "@ant-design/icons";
import { ConfigProvider, Layout, Menu } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const { Header } = Layout;

const Navbar = () => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  // const { role } = getUserInfo() as any;
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
          <BankFilled style={{ fontSize: "30px" }} />
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
