"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import FormSelectField from "@/components/Form/FormSelectField";
import { useCreatePackageMutation } from "@/redux/api/packageApi";
import { Button, Col, Row, message } from "antd";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  price: number;
  bandwidth: number;
  iptv: boolean;
  bdix: boolean;
};

const CreatePackagePage = () => {
  const [createPackage] = useCreatePackageMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    try {
      data.bandwidth = Number(data.bandwidth);
      data.price = Number(data.price);
      const res = await createPackage(data).unwrap();
      if (res.id) {
        message.success("Package created successfully!");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };
  return (
    <div>
      <Row justify={"center"} align={"middle"} style={{ minHeight: "100vh" }}>
        <Col sm={12} md={8} lg={8}>
          <h1 style={{ margin: "15px 0" }}>Update Package</h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div style={{ margin: "6px 0" }}>
                <FormInput
                  name="name"
                  type="text"
                  size="large"
                  label="Name"
                  required
                />
              </div>
              <div style={{ margin: "6px 0" }}>
                <FormInput
                  name="price"
                  type="number"
                  size="large"
                  label="Price"
                  required
                />
              </div>
              <div style={{ margin: "6px 0" }}>
                <FormInput
                  name="bandwidth"
                  type="number"
                  size="large"
                  label="Bandwidth"
                  required
                />
              </div>
              <div style={{ margin: "6px 0" }}>
                <FormSelectField
                  name="iptv"
                  label="IPTV"
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                  required
                />
              </div>
              <div style={{ margin: "6px 0" }}>
                <FormSelectField
                  name="bdix"
                  label="BDIX"
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                  required
                />
              </div>

              <Button
                style={{ margin: "4px 0" }}
                type="primary"
                htmlType="submit"
              >
                Create
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CreatePackagePage;
