"use client";
import { Layout, Row, Col } from "antd";
import Link from "next/link";

const { Footer } = Layout;

const MyFooter = () => {
  return (
    <Footer style={{ background: "#001529", color: "white" }}>
      <Row justify="space-around" gutter={16}>
        <Col span={8}>
          <div style={{ textAlign: "center" }}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col span={8}>
          <div style={{ textAlign: "center" }}>
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://www.linkedin.com">LinkedIn</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        &copy; {new Date().getFullYear()}
      </div>
    </Footer>
  );
};

export default MyFooter;
