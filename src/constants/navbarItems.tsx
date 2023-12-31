"use client";

import type { MenuProps } from "antd";
import {
  DashboardFilled,
  FileOutlined,
  LoginOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const navbarItems = (role: string) => {
  const defaultItems: MenuProps["items"] = [
    {
      label: <Link href={"/blogs"}>Blogs</Link>,
      key: "/blogs",
      icon: <FileOutlined />,
    },
    {
      label: <Link href={"/about-us"}>About us</Link>,
      key: "/about-us",
      icon: <UserOutlined />,
    },
  ];

  const userItems: MenuProps["items"] = [
    ...defaultItems,
    {
      label: <Link href={`/${role}`}>Dashboard</Link>,
      icon: <DashboardFilled />,
      key: `/${role}`,
    },
  ];
  const adminItems: MenuProps["items"] = [
    ...defaultItems,
    {
      label: <Link href={`/${role}`}>Dashboard</Link>,
      icon: <DashboardFilled />,
      key: `/${role}`,
    },
  ];

  const superAdminItems: MenuProps["items"] = [
    ...defaultItems,
    {
      label: <Link href={`/${role}`}>Dashboard</Link>,
      icon: <DashboardFilled />,
      key: `/${role}`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminItems;
  else if (role === USER_ROLE.ADMIN) return adminItems;
  else if (role === USER_ROLE.USER) return userItems;
  else {
    return [
      ...defaultItems,
      {
        label: <Link href={"/login"}>Login</Link>,
        key: "/login",
        icon: <LoginOutlined />,
      },
    ];
  }
};
