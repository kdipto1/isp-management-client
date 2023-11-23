import { Carousel, Col, Row } from "antd";
import Image from "next/image";
import banner2 from "../../assets/banner_4.svg";
import banner1 from "../../assets/banner_5.svg";
import banner from "../../assets/banner_6.svg";

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
      <Row gutter={0}>
        <Col
          xs={24}
          sm={24}
          md={12}
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
        <Col xs={24} sm={24} md={12}>
          <Carousel autoplay>
            <div>
              <div style={contentStyle}>
                <Image
                  src={banner1}
                  width={600}
                  height={600}
                  alt="banner image"
                />
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <Image
                  src={banner}
                  width={600}
                  height={600}
                  alt="banner image"
                />
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <Image
                  src={banner2}
                  width={600}
                  height={600}
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
