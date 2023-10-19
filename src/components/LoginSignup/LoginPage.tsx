"use client";
import { useLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import Form from "../Form/Form";
import FormInput from "../Form/FormInput";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { addRole } from "@/redux/features/userRoleSlice";

type FormValues = {
  contactNo: number;
  password: string;
};

const LoginPage = () => {
  const [loginData] = useLoginMutation();
  const dispatch = useAppDispatch();

  const router = useRouter();

  const onsubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    data.contactNo = Number(data.contactNo);
    try {
      const res = await loginData(data).unwrap();
      storeUserInfo({ accessToken: res?.data?.accessToken });
      if (res?.data?.accessToken) {
        router.push("/");
        message.success("User logged in successfully!");
      }
      const { role } = getUserInfo() as any;
      dispatch(addRole(role));
    } catch (error: any) {
      message.error(error.message);
    }
  };
  return (
    <>
      <Row justify={"center"} align={"middle"} style={{ minHeight: "100vh" }}>
        <Col sm={12} md={8} lg={8}>
          <h1 style={{ margin: "15px 0" }}>Login To Your Account</h1>
          <div>
            <Form submitHandler={onsubmit}>
              <div>
                <FormInput
                  name="contactNo"
                  type="number"
                  size="large"
                  label="Your Registered Phone Number"
                  required
                />
              </div>
              <div style={{ margin: "15px 0" }}>
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                  required
                />
              </div>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </div>
          <small>
            <p>
              Dont have an account <Link href={"/signup"}>SignUp</Link>
            </p>
          </small>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
