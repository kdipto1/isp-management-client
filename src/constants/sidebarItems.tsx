"use client";

import type { MenuProps } from "antd";
import {
  DashboardFilled,
  NotificationOutlined,
  ProfileOutlined,
  TableOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
  const defaultItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/profile`}>My Profile</Link>,
      key: `/${role}/profile`,
      icon: <ProfileOutlined />,
    },
  ];
  const userItems: MenuProps["items"] = [
    ...defaultItems,

    {
      label: <Link href={`/${role}/review`}>Add Review</Link>,
      icon: <UserAddOutlined />,
      key: `/${role}/review`,
    },
  ];
  const adminItems: MenuProps["items"] = [
    ...defaultItems,
    {
      label: <Link href={`/${role}/manage-packages`}>Manage Packages</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-packages`,
    },
    {
      label: (
        <Link href={`/${role}/manage-new-connection-req`}>
          Manage New Connection Request
        </Link>
      ),
      icon: <TableOutlined />,
      key: `/${role}/manage-new-connection-req`,
    },
    {
      label: (
        <Link href={`/${role}/manage-notification`}>Manage Notification</Link>
      ),
      icon: <NotificationOutlined />,
      key: `/${role}/manage-notification`,
    },
    {
      label: (
        <Link href={`/${role}/manage-customer-connection-status`}>
          Manage Customer Connection Status
        </Link>
      ),
      icon: <TableOutlined />,
      key: `/${role}/manage-connections-status`,
    },
    {
      label: <Link href={`/${role}/manage-blogs`}>Manage Blogs</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-blogs`,
    },
  ];

  const superAdminItems: MenuProps["items"] = [
    ...defaultItems,
    {
      label: <Link href={`/${role}/manage-user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-user`,
    },
    {
      label: <Link href={`/${role}/manage-packages`}>Manage Packages</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-packages`,
    },
    {
      label: (
        <Link href={`/${role}/manage-new-connection-req`}>
          Manage New Connection Request
        </Link>
      ),
      icon: <TableOutlined />,
      key: `/${role}/manage-new-connection-req`,
    },
    {
      label: (
        <Link href={`/${role}/manage-notification`}>Manage Notification</Link>
      ),
      icon: <NotificationOutlined />,
      key: `/${role}/manage-notification`,
    },
    {
      label: (
        <Link href={`/${role}/manage-customer-connection-status`}>
          Manage Customer Connection Status
        </Link>
      ),
      icon: <TableOutlined />,
      key: `/${role}/manage-connections-status`,
    },
    {
      label: <Link href={`/${role}/manage-blogs`}>Manage Blogs</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-blogs`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminItems;
  else if (role === USER_ROLE.ADMIN) return adminItems;
  else if (role === USER_ROLE.USER) return userItems;
  else {
    return defaultItems;
  }
};
