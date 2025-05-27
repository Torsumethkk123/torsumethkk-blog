import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Providers from "./(scripts)/_theme_manager/providers";
import AppHeader from "./(scripts)/_components/appheader";
import AppFooter from "./(scripts)/_components/appfooter";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"]
})

export const metadata: Metadata = {
  title: {
    default: "Torsumethkk - Home Page",
    template: "Torsumethkk - %s"
  },
  description: "เว็บไซต์เก็บข้อมูลส่วนตัวและผลงานของ Torsumethkk",
  icons: {
    icon: "/icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${kanit.className} antialiased w-[60%] mx-auto duration-300`}
      >
        <Providers>
          <AppHeader/>
          {children}
          <AppFooter/>
        </Providers>
      </body>
    </html>
  );
}
