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
    <html lang="en" data-theme="dark">
      <body className={`${inter.className} light:bg-light-primary dark:bg-dark-primary`}>
        <div className="absolute top-0 left-0 w-full h-full hue-rotate-15 -z-10" >
          <svg id="wave" style={{ transform:'rotate(180deg)', transition: '0.3s' }} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(205.242, 217.918, 255, 1)" offset="0%"></stop><stop stop-color="rgba(238.163, 238.817, 241.659, 1)" offset="100%"></stop></linearGradient></defs><path style={{ transform:'translate(0, 0px)', opacity:1 }} fill="url(#sw-gradient-0)" d="M0,98L120,138.8C240,180,480,261,720,253.2C960,245,1200,147,1440,138.8C1680,131,1920,212,2160,277.7C2400,343,2640,392,2880,351.2C3120,310,3360,180,3600,163.3C3840,147,4080,245,4320,269.5C4560,294,4800,245,5040,187.8C5280,131,5520,65,5760,73.5C6000,82,6240,163,6480,196C6720,229,6960,212,7200,220.5C7440,229,7680,261,7920,236.8C8160,212,8400,131,8640,130.7C8880,131,9120,212,9360,277.7C9600,343,9840,392,10080,375.7C10320,359,10560,278,10800,212.3C11040,147,11280,98,11520,65.3C11760,33,12000,16,12240,32.7C12480,49,12720,98,12960,122.5C13200,147,13440,147,13680,138.8C13920,131,14160,114,14400,163.3C14640,212,14880,327,15120,334.8C15360,343,15600,245,15840,171.5C16080,98,16320,49,16560,49C16800,49,17040,98,17160,122.5L17280,147L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"></path></svg>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
