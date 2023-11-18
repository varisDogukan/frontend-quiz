import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeProvider";
import { QuestionProvider } from "@/context/question/QuestionProvider";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Frontend Quiz",
  description: "Generated by create next app",
  icons: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        <ThemeProvider>
          <QuestionProvider>
            <main className="main-bg text-color h-full min-h-screen">
              <Navbar />
              {children}
            </main>
          </QuestionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
