import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import "../globals.css";
import { Inter } from "next/font/google";
import LeftSideBar from "@components/layout/LeftSideBar";
import MainContainer from "@components/layout/MainContainer";
import TopBar from "@components/layout/TopBar";
import RightSideBar from "@components/layout/RightSideBar";
import BottomBar from "@components/layout/BottomBar";

export const metadata = {
  title: "Vibe Zone",
  description: "Zaid The Adim",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2 text-light-1`}>
          <main className="flex flex-row">

          <LeftSideBar />
          <MainContainer>
       
          {children}
          </MainContainer>
          <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
