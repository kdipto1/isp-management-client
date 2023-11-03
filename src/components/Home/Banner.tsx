import { Carousel, Col, Row } from "antd";
import Image from "next/image";
import banner2 from "../../assets/banner2.jpeg";
import banner1 from "../../assets/banner1.jpg";
import banner from "../../assets/banner.jpg";

const contentStyle: React.CSSProperties = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  clipPath: `ellipse(50% 50% at 50% 50%)`,
};

const Banner = () => {
  return (
    <section style={{ margin: "20px 0" }}>
      <Row gutter={2}>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5rem",
          }}
        >
          <h2>
            Get <span style={{ color: "#00b96b" }}>Steady and Stable</span>
            <span style={{ display: "block" }}>
              Internet Experience With Us
            </span>
          </h2>
        </Col>
        <Col span={12}>
          <Carousel autoplay>
            <div>
              <div style={contentStyle}>
                <Image
                  src={banner2}
                  width={1500}
                  height={700}
                  alt="banner image"
                />
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <Image
                  src={banner}
                  width={1600}
                  height={700}
                  alt="banner image"
                />
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <Image
                  src={banner1}
                  width={1600}
                  height={700}
                  alt="banner image"
                />
              </div>
            </div>
          </Carousel>
        </Col>
      </Row>
    </section>
  );
};

export default Banner;
