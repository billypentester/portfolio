import { Inter } from "next/font/google";
import Navbar from '@/components/Navbar'
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bilal Ahmad | Software Engineer",
  description: "Welcome to Bilal Ahmad's website. As a skilled software engineer, I specialize in developing innovative solutions for today's challenges. Explore my portfolio, experience, and blog for insights into cutting-edge technologies and industry trends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
