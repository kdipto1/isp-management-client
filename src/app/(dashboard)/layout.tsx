import type { Metadata } from "next";
import Navbar from "@/components/UI/Navbar";

export const metadata: Metadata = {
  title: "ISP Management Dashboard",
  description: "Website for internet package subscribe and manage subscribers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
