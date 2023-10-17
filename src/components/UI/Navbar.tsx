"use client";
import { navbarItems } from "@/constants/navbarItems";
import { getUserInfo } from "@/services/auth.service";
import { BankFilled } from "@ant-design/icons";
import { Layout, Menu } from "antd";
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
        <Link href={"/"} style={{ all: "unset" }}>
          <BankFilled style={{ fontSize: "30px" }} />
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={navbarItems(role)}
          style={{ background: "none", color: "black" }}
        />
      </Header>
    </>
  );
};

export default Navbar;
