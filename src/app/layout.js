import { Inter } from "next/font/google";
import Navbar from '@/components/Navbar'
import "./globals.css";
import Footer from "@/components/Footer";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bilal Ahmad | Software Engineer",
  description: "Welcome to Bilal Ahmad's website. As a skilled software engineer, I specialize in developing innovative solutions for today's challenges. Explore my portfolio, experience, and blog for insights into cutting-edge technologies and industry trends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-FMXX3E14RK" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FMXX3E14RK');
        `}
      </Script>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
