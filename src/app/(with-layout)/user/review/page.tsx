"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useCreateReviewMutation } from "@/redux/api/reviewApi";
import { Button, Col, Row, message } from "antd";
import React from "react";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  message: string;
  ratting: number;
};

const UserAddReviewPage = () => {
  const [createReview] = useCreateReviewMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    try {
      data.ratting = Number(data.ratting);
      const res = await createReview(data).unwrap();
      if (res.id) {
        message.success("Review added successfully!");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };
  return (
    <div>
      <Row justify={"center"} align={"middle"} style={{ minHeight: "100vh" }}>
        <Col sm={12} md={8} lg={8}>
          <h1 style={{ margin: "15px 0" }}>
            Add Your Review About Our Service
          </h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div style={{ margin: "6px 0" }}>
                <FormInput
                  name="message"
                  type="text"
                  size="large"
                  label="Your message"
                  required
                />
              </div>
              <div style={{ margin: "6px 0" }}>
                <FormInput
                  name="ratting"
                  type="number"
                  size="large"
                  label="Your Review"
                  required
                  min={0}
                  max={5}
                />
              </div>

              <Button
                style={{ margin: "4px 0" }}
                type="primary"
                htmlType="submit"
              >
                Submit Review
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddReviewPage;
