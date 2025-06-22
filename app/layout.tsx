import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/common/stores/active-section";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Rishant Vikramaditya - Portfolio',
  description: 'Personal portfolio website of Rishant Vikramaditya, a full-stack developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveSectionContextProvider>
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
