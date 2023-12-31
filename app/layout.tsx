import Modal from "@/components/Modal";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trello",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Modal />
      </body>
    </html>
  );
}
