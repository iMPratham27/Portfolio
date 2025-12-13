import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap"
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Prathamesh Dhadankar",
  description: "My Portfolio website",
};

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className}  antialiased bg-black `}
      >
        {children}
      </body>
    </html>
  );
}
