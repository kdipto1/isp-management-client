"use client";
import { useUserProfileQuery } from "@/redux/api/usersApi";
import { Button, Descriptions } from "antd";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const { data, isLoading } = useUserProfileQuery(undefined);
  if (isLoading) return;
  const {
    id,
    email,
    firstName,
    lastName,
    middleName,
    contactNo,
    profileImage,
    address,
    role,
    createdAt,
    updatedAt,
  } = data;
  return (
    <div>
      <h1>Profile Details</h1>
      <Descriptions bordered column={2}>
        <Descriptions.Item label="Profile Image">
          {profileImage && (
            <Image src={profileImage} alt="Profile" width="100" height="100" />
          )}
        </Descriptions.Item>
        <Descriptions.Item label="ID">{id}</Descriptions.Item>
        <Descriptions.Item label="Email">{email}</Descriptions.Item>
        <Descriptions.Item label="First Name">{firstName}</Descriptions.Item>
        <Descriptions.Item label="Middle Name">
          {middleName || "N/A"}
        </Descriptions.Item>
        <Descriptions.Item label="Last Name">{lastName}</Descriptions.Item>
        <Descriptions.Item label="Contact No">{contactNo}</Descriptions.Item>

        <Descriptions.Item label="Address">
          {address || "N/A"}
        </Descriptions.Item>
        <Descriptions.Item label="Role">{role}</Descriptions.Item>
        <Descriptions.Item label="Created At">{createdAt}</Descriptions.Item>
        <Descriptions.Item label="Updated At">{updatedAt}</Descriptions.Item>
      </Descriptions>
      <Link href={`/user/profile/edit/${id}`}>
        <Button style={{ marginTop: "4px", color: "blueviolet" }} type="dashed">
          Edit Profile
        </Button>
      </Link>
    </div>
  );
};

export default ProfilePage;
