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
  description:
    "A Quiz App where you can test yourself about HTML, CSS, JavaScript and Accessibility on Frontend.",
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
            <main className="main-bg text-color h-full min-h-screen w-full bg-img-mobile-light bg-no-repeat pb-10 dark:bg-img-mobile-dark md:bg-img-tablet-light md:dark:bg-img-tablet-dark xl:bg-img-desktop-light xl:bg-cover xl:dark:bg-img-desktop-dark">
              <Navbar />
              {children}
            </main>
          </QuestionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
