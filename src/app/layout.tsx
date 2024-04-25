import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Richa gupta",
  description:
    "Richa Gupta is a seasoned Cyber Security professional specializing in Cloud Security. Currently, as a Senior Cyber Engineer at IKEA IT AB, she brings extensive experience from her roles as a GCP Security Engineer at Altran and in application security testing at Sopra Steria.",
  keywords: [
    "Richa gupta",
    "cybersecurity",
    "Richa gupta ikea sweden",
    "richa gupta sopra steria",
    "richa gupta infosys",
    "richa gupta haridwar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
