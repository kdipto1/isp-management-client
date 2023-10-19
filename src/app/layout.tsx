import ReduxProvider from "@/lib/ReduxProvider";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/UI/Navbar";
import MyFooter from "@/components/UI/Footer";

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
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
        <MyFooter />
      </body>
    </html>
  );
}
