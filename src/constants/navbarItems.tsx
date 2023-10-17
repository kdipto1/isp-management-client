import type { MenuProps } from "antd";
import {
  BookOutlined,
  DashboardFilled,
  LoginOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const navbarItems = (role: string) => {
  const defaultItems: MenuProps["items"] = [
    {
      label: <Link href={"/blogs"}>Blogs</Link>,
      key: "/blogs",
      icon: <BookOutlined />,
    },
    {
      label: <Link href={"/about-us"}>About us</Link>,
      key: "/about-us",
      icon: <BookOutlined />,
    },
    {
      label: <Link href={"/login"}>Login</Link>,
      key: "/login",
      icon: <LoginOutlined />,
    },
  ];
  const userItems: MenuProps["items"] = [
    ...defaultItems,
    {
      label: <Link href={`/${role}/dashboard`}>Dashboard</Link>,
      icon: <DashboardFilled />,
      key: `/${role}/dashboard`,
    },
  ];
  const adminItems: MenuProps["items"] = [
    ...defaultItems,
    {
      label: <Link href={`/${role}/dashboard`}>Dashboard</Link>,
      icon: <DashboardFilled />,
      key: `/${role}/dashboard`,
    },
  ];

  const superAdminItems: MenuProps["items"] = [
    ...defaultItems,
    {
      label: <Link href={`/${role}/dashboard`}>Dashboard</Link>,
      icon: <DashboardFilled />,
      key: `/${role}/dashboard`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminItems;
  else if (role === USER_ROLE.ADMIN) return adminItems;
  else if (role === USER_ROLE.USER) return userItems;
  else {
    return defaultItems;
  }
};
