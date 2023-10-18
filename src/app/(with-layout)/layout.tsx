"use client";
import Contents from "@/components/Dashboard/Contents";
import Sidebar from "@/components/Dashboard/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading, userLoggedIn]);
  if (!isLoading) return <p>Loading...</p>;
  return (
    <Layout hasSider={true}>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
