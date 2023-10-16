import ReduxProvider from "@/lib/ReduxProvider";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/UI/Navbar";

export const metadata: Metadata = {
  title: "ISP Management",
  description: "Website for internet package subscribe and manage subscribers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
