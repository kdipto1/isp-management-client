"use client";

import { usePackagesQuery } from "@/redux/api/packageApi";
import { IPackage } from "@/types";
import { Card, Col, Row } from "antd";

const PackageSection = () => {
  const { data, isLoading } = usePackagesQuery(undefined);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "10px 0" }}>Packages</h2>
      <Row gutter={16} justify={"center"}>
        {data?.packages?.slice(0, 3).map((pkg: IPackage) => (
          <Col
            span={8}
            key={pkg.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              title={pkg.name}
              bordered={false}
              style={{
                background: "#f0f0f0",
                textAlign: "center",
                width: "400px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <p>
                  <strong>Price:</strong> {pkg.price}
                </p>
                <p>
                  <strong>Bandwidth:</strong> {pkg.bandwidth}
                </p>
                <p>
                  <strong>IPTV:</strong> {pkg.iptv ? "Yes" : "No"}
                </p>
                <p>
                  <strong>BDIX:</strong> {pkg.bdix ? "Yes" : "No"}
                </p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PackageSection;
