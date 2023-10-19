"use client";
import { usePackageQuery } from "@/redux/api/packageApi";

import { Descriptions } from "antd";

const DetailsPage = ({ params }: { params: any }) => {
  const { id } = params;
  const { data, isLoading } = usePackageQuery(id);
  if (isLoading) return;

  const { name, price, bandwidth, iptv, bdix } = data;
  return (
    <div>
      <h1>Package Details</h1>
      <Descriptions bordered column={2}>
        <Descriptions.Item label="ID">{id}</Descriptions.Item>
        <Descriptions.Item label="Name">{name}</Descriptions.Item>
        <Descriptions.Item label="Price">{price}</Descriptions.Item>
        <Descriptions.Item label="Bandwidth">{bandwidth}</Descriptions.Item>
        <Descriptions.Item label="IPTV">
          {iptv ? "Yes" : "No"}
        </Descriptions.Item>
        <Descriptions.Item label="BDIX">
          {bdix ? "Yes" : "No"}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default DetailsPage;
