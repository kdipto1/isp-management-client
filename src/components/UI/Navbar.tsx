"use client";

import { navbarItems } from "@/constants/navbarItems";
import { removeRole } from "@/redux/features/userRoleSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import {
  BankFilled,
  EllipsisOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Layout, Menu } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const { Header } = Layout;

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const dispatch = useAppDispatch();
  const logout = () => {
    removeUserInfo("accessToken");
    dispatch(removeRole);
  };
  useEffect(() => {
    setIsClient(true);
  }, []);
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
        {isClient ? (
          <Menu
            multiple={true}
            theme="dark"
            overflowedIndicator={<MenuFoldOutlined />}
            disabledOverflow
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={navbarItems(role)}
          />
        ) : (
          "prerender"
        )}
        {/* </ConfigProvider> */}
      </Header>
    </>
  );
};

export default Navbar;
