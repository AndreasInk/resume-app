import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andreas Ink - Developer, Creator, Innovator",
  description:
    "Welcome to the portfolio of Andreas Ink, an iOS developer and creative innovator. Discover my projects like ExamCram, PingPath, StrivePD, Covid Watch, PodPosture/PodPower, WalkLock, Rhythm, and Vito, focused on enhancing productivity, health, and accessibility.",
    icons: {
      icon: '/Andreas.png', // Path to your favicon in the public folder
      shortcut: '/favicon-16x16.png', // Shortcut icon, typically 16x16
      apple: '/apple-touch-icon.png', // Apple touch icon for iOS devices
    },
    keywords: [
    "Andreas Ink",
    "iOS Developer",
    "Portfolio",
    "ExamCram",
    "PingPath",
    "StrivePD",
    "Covid Watch",
    "PodPosture",
    "PodPower",
    "WalkLock",
    "Rhythm",
    "Vito",
    "Tech Innovation",
    "Health Apps",
    "Accessibility Apps",
  ],
    openGraph: {
    title: "Andreas Ink - Developer, Creator, Innovator",
    description:
      "Explore the works of Andreas Ink, an iOS developer and creator of impactful apps like ExamCram, PingPath, StrivePD, and more.",
    url: "https://andreas.ink",
    type: "website",
    images: [
      {
        url: "/AI-Preview.png", 
        width: 1200,
        height: 630,
        alt: "Andreas Ink Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andreas Ink - Developer, Creator, Innovator",
    description:
      "Discover the projects and innovations of Andreas Ink, including ExamCram, PingPath, StrivePD, Covid Watch, and more.",
    site: "@AndreasInk", 
    creator: "@AndreasInk", 
    images: "/AI-Preview.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
