"use client";
import { Button, Col, Row, message } from "antd";
import React from "react";
import Form from "../Form/Form";
import FormInput from "../Form/FormInput";
import { useSignupMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import Link from "next/link";

type FormValues = {
  email: string;
  password: string;
  firstName: string;
  middleName?: string | null | undefined;
  lastName: string;
  contactNo: number;
};

const SignUpPage = () => {
  const [loginData] = useSignupMutation();

  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    data.contactNo = Number(data.contactNo);
    try {
      const res = await loginData(data).unwrap();
      if (res.id) {
        router.push("/login");
        message.success("User logged in successfully!");
        message.info("Please login now!");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };
  return (
    <div>
      <Row justify={"center"} align={"middle"} style={{ minHeight: "100vh" }}>
        <Col sm={12} md={8} lg={8}>
          <h1 style={{ margin: "15px 0" }}>Sign Up for Your Account</h1>
          <div>
            <Form submitHandler={onSubmit}>
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
                />
              </div>
              <div>
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
                  name="password"
                  type="password"
                  size="large"
                  label="Password"
                  required
                />
              </div>
              <div>
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
                Sign Up
              </Button>
            </Form>
          </div>
          <small>
            <p>
              Already have an account <Link href={"/login"}>Login</Link>
            </p>
          </small>
        </Col>
      </Row>
    </div>
  );
};

export default SignUpPage;
