import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "./_components/header";
import MobileHeader from "./_components/mobileHeader";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexcent",
  description: "Develop by Akash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="hidden lg:block">
          <Header />
        </div>
        <div className="block lg:hidden">
          <MobileHeader />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
