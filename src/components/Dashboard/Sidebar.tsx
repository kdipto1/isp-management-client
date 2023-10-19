"use client";

import { sidebarItems } from "@/constants/sidebarItems";
import { removeRole } from "@/redux/features/userRoleSlice";
import { useAppDispatch } from "@/redux/hooks";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { Button, Layout, Menu, message } from "antd";
import { useRouter } from "next/navigation";

const { Sider } = Layout;
const Sidebar = () => {
  const { role } = getUserInfo() as any;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const logout = () => {
    removeUserInfo("accessToken");
    dispatch(removeRole);
    message.info("Logged out successfully");
    router.push("/");
  };
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{
        overflow: "auto",
        minHeight: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "white",
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems(role)}
      />
      <div style={{ textAlign: "center" }}>
        <Button type="primary" onClick={logout}>
          Logout
        </Button>
      </div>
    </Sider>
  );
};

export default Sidebar;
