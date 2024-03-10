import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./Styles/globals.css";
import SiteLogo from "@/public/svgs/siteLogo";
import THFlag from "@/public/svgs/thFlag";
import ENFlag from "@/public/svgs/enFlag";

const sarabun = Sarabun({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Education Innovation Board",
  description: "Generated innovative education ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sarabun.className}>
        <header className="layout-header">
          <div className="flex align-center brand-container">
            <div className="logo-container">
              <SiteLogo height={50} />
            </div>
            <p className="brand-text">Tool Kit</p>
          </div>
          <div className="flex align-center top-navigation">
            <Link href="/innovationboard">
              <div className="top-navigation-menu">Creativity</div>
            </Link>
            <Link href="/">
              <div className="top-navigation-menu">Education Canvas</div>
            </Link>
            <div className="top-navigation-menu">Gamification</div>
            <div className="top-navigation-menu">Innovation</div>
            <div className="top-navigation-menu">Contact us</div>
            <div className="tool-container">
              <div className="flag-container">
                <THFlag width={40} />
              </div>
              <div className="flag-container">
                <ENFlag width={40} />
              </div>
            </div>
          </div>
        </header>
        {children}
        <footer className="layout-footer">footer</footer>
      </body>
    </html>
  );
}
