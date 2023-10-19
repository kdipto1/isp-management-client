"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import FormSelectField, {
  SelectOptions,
} from "@/components/Form/FormSelectField";
import {
  usePackageQuery,
  useUpdatePackageMutation,
} from "@/redux/api/packageApi";
import { useUpdateUserMutation, useUserQuery } from "@/redux/api/usersApi";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const PackageEditPage = ({ params }: IDProps) => {
  const [updatePackage] = useUpdatePackageMutation();
  const { id } = params;
  const { data, isLoading } = usePackageQuery(id);
  if (isLoading) return;
  const { name, price, bandwidth, bdix, iptv } = data;
  console.log(data);
  const onSubmit = async (values: any) => {
    message.loading("Updating..............");

    try {
      // console.log(data);
      await updatePackage({ id, body: values });
      message.success("Package Updated Successfully");
    } catch (err: any) {
      // console.error(err.message);
      message.error(err.message);
    }
  };
  const defaultValues = {
    name: name || "",
    price: price || "",
    bandwidth: bandwidth || "",
    bdix: bdix || "No",
    iptv: iptv || "No",
  };
  return (
    <div>
      <Row justify={"center"} align={"middle"} style={{ minHeight: "100vh" }}>
        <Col sm={12} md={8} lg={8}>
          <h1 style={{ margin: "15px 0" }}>Update Package</h1>
          <div>
            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
              <div style={{ margin: "6px 0" }}>
                <FormInput name="name" type="text" size="large" label="Name" />
              </div>
              <div style={{ margin: "6px 0" }}>
                <FormInput
                  name="price"
                  type="number"
                  size="large"
                  label="Price"
                />
              </div>
              <div style={{ margin: "6px 0" }}>
                <FormInput
                  name="bandwidth"
                  type="number"
                  size="large"
                  label="Bandwidth"
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
                />
              </div>

              <Button
                style={{ margin: "4px 0" }}
                type="primary"
                htmlType="submit"
              >
                Edit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PackageEditPage;
