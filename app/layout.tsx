import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safwan Anas | Full-Stack Developer",
  description:
    "I'm Safwan Anas, a full-stack developer with experience in React, Node.js, and MongoDB.",
  robots: "index, follow",
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/icon.png", // ✅ Add this line
  },
  openGraph: {
    title: "Safwan Portfolio",
    description:
      "Full-stack developer skilled in React, Node.js, Express.js and MongoDB.",
    url: "https://yourdomain.com",
    siteName: "Safwan Anas Portfolio",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}  `}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
