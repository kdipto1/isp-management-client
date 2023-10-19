"use client";

import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";

const { Sider } = Layout;
const Sidebar = () => {
  const { role } = getUserInfo() as any;
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
    </Sider>
  );
};

export default Sidebar;
