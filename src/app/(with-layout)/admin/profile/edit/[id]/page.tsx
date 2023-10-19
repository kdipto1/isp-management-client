"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useUpdateUserMutation, useUserQuery } from "@/redux/api/usersApi";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const ProfileEditPage = ({ params }: IDProps) => {
  const [updateUser] = useUpdateUserMutation();
  const { id } = params;
  const { data, isLoading } = useUserQuery(id);
  if (isLoading) return;
  const { email, firstName, lastName, middleName, contactNo, address } = data;
  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating..............");
    try {
      // console.log(data);
      await updateUser({ id, body: values });
      message.success("User Updated Successfully");
    } catch (err: any) {
      // console.error(err.message);
      message.error(err.message);
    }
  };
  const defaultValues = {
    email: email || "",
    firstName: firstName || "",
    lastName: lastName || "",
    middleName: middleName || "",
    contactNo: contactNo || "",
    address: address || "",
  };
  return (
    <div>
      <Row justify={"center"} align={"middle"} style={{ minHeight: "100vh" }}>
        <Col sm={12} md={8} lg={8}>
          <h1 style={{ margin: "15px 0" }}>Update Profile</h1>
          <div>
            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
              <div>
                <FormInput
                  name="firstName"
                  type="text"
                  size="large"
                  label="First Name"
                  required
                />
              </div>
              <div style={{ margin: "4px 0" }}>
                <FormInput
                  name="middleName"
                  type="text"
                  size="large"
                  label="Middle Name"
                />
              </div>
              <div>
                <FormInput
                  name="lastName"
                  type="text"
                  size="large"
                  label="Last Name"
                  required
                />
              </div>
              <div style={{ margin: "4px 0" }}>
                <FormInput
                  name="contactNo"
                  type="number"
                  size="large"
                  label="Your Phone Number"
                  required
                  disabled
                />
              </div>
              <div style={{ margin: "4px 0" }}>
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  label="Email"
                  required
                />
              </div>

              <div style={{ margin: "4px 0" }}>
                <FormInput
                  name="address"
                  type="text"
                  size="large"
                  label="Address"
                  required
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

export default ProfileEditPage;
