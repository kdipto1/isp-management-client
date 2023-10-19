"use client";

import { useReviewsQuery } from "@/redux/api/reviewApi";
import { IReview } from "@/types";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Rate, Row } from "antd";

const ReviewsSection = () => {
  const { data, isLoading } = useReviewsQuery(undefined);
  if (isLoading) return <p>Loading...</p>;
  console.log(data);
  return (
    <div style={{ margin: "20px 0" }}>
      <h2 style={{ textAlign: "center", margin: "10px 0" }}>
        Our Service Reviews
      </h2>
      <Row gutter={16} justify={"center"}>
        {data?.reviews?.slice(0, 3).map((review: IReview) => (
          <Col
            span={8}
            key={review.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              style={{
                width: 300,
                height: 250,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Avatar
                size={64}
                icon={<UserOutlined />}
                style={{ marginTop: 20 }}
              />
              <Card.Meta
                title={`${review.customer?.firstName}  ${review?.customer?.lastName}`}
                description={
                  <div
                    style={{
                      whiteSpace: "pre-wrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {review.message}
                  </div>
                }
              />
              <Rate allowHalf defaultValue={review?.ratting || 0} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ReviewsSection;
