"use client";
import { Layout, theme } from "antd";

const { Content, Header } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          style={{
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default Contents;
