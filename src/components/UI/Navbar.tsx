"use client";

import { navbarItems } from "@/constants/navbarItems";
import { useAppSelector } from "@/redux/hooks";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Col, ConfigProvider, Drawer, Layout, Menu, Row } from "antd";
import Link from "next/link";
import { useState } from "react";

const { Header } = Layout;

const Navbar = () => {
  const role = useAppSelector((state) => state.userRole.role);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <Layout>
      <Header
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        <Row justify={"space-between"} align={"middle"}>
          <Col
            xs={20}
            sm={20}
            md={18}
            style={{
              backgroundColor: "#f6ffed",
              borderBottom: `1px solid rgba(211, 167, 255, 0.17)`,
            }}
          >
            <Link href={"/"} style={{ marginLeft: "3rem" }}>
              <HomeOutlined style={{ fontSize: "30px" }} />
            </Link>
          </Col>
          <Col xs={0} sm={0} md={6}>
            <ConfigProvider
              theme={{
                components: {
                  Menu: {
                    itemActiveBg: "none",
                    // itemSelectedColor: "black",
                    colorBgBlur: "#00b96b",
                    colorBgBase: "transparent",
                  },
                },
              }}
            >
              <Menu
                style={{ paddingTop: 1 }}
                theme="light"
                overflowedIndicator={<MenuFoldOutlined />}
                disabledOverflow
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                items={navbarItems(role)}
              />
            </ConfigProvider>
          </Col>
          <Col xs={2} sm={2} md={0}>
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </Col>
        </Row>

        {/*  */}
        <Drawer
          title="Menu"
          placement="right"
          onClick={onClose}
          onClose={onClose}
          open={visible}
        >
          <Menu
            theme="light"
            mode="vertical"
            defaultSelectedKeys={["2"]}
            items={navbarItems(role)}
          />
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
