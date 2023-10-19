import React from "react";
import { Carousel } from "antd";
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
};

const Banner: React.FC = () => (
  <Carousel autoplay>
    <div>
      <Image
        style={contentStyle}
        src={banner2}
        width={1600}
        height={600}
        alt="banner image"
      />
    </div>
    <div>
      <Image
        style={contentStyle}
        src={banner}
        width={1600}
        height={400}
        alt="banner image"
      />
    </div>
    <div>
      <Image
        style={contentStyle}
        src={banner1}
        width={1600}
        height={400}
        alt="banner image"
      />
    </div>
  </Carousel>
);

export default Banner;
