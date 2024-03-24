import { Nunito_Sans } from "next/font/google";
import WorkWith from "@/components/WorkWith";
import Skills from "@/components/Skills";
import Expertise from "@/components/Expertise";

const inter = Nunito_Sans({ 
  subsets: ["latin"], 
  weight: ['400', '700'],
});

export default function Home() {

  return (
    <>
    <div className="custom-container">
      <header className={inter.className}>
        <div className="flex flex-1 items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-medium mb-3">Hello,</h1>
            <h1 className="text-6xl font-medium text-gray-800">I&apos;m <span className="text-blue-500 font-semibold">Bilal</span></h1>
            <h2 className="text-3xl font-medium text-gray-500 my-5">Software Engineer</h2>
            <p className="text-xl text-gray-800 my-5">I&apos;m a passionate software developer who loves to build and break things. I&apos;m also a security enthusiast who loves to learn and share knowledge.</p>
            <button className="custom-button">Get in touch</button>
          </div>
          <div className="w-1/2">
            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    
              <defs>                         
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop id="stop1" stopColor="rgba(237.995, 104.784, 41.737, 1)" offset="0%"></stop>                            
                  <stop id="stop2" stopColor="rgba(226.611, 150.318, 24.388, 1)" offset="100%"></stop>                        
                </linearGradient>                    
              </defs> 
              <mask id="blob-mask">
                <path fill="white" d="M27.5,-32.8C35.4,-26.2,41.2,-17.3,42.5,-7.8C43.9,1.7,40.7,11.7,35,18.9C29.3,26.1,21,30.4,12.4,33.1C3.8,35.8,-5,36.9,-12.7,34.3C-20.4,31.7,-26.9,25.5,-31.3,18C-35.8,10.5,-38.2,1.7,-36.1,-5.8C-34.1,-13.2,-27.6,-19.2,-20.9,-26C-14.1,-32.7,-7,-40.3,1.4,-41.9C9.8,-43.6,19.7,-39.4,27.5,-32.8Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: 'all 0.3s ease 0s' }} stroke="url(#sw-gradient)"></path>
              </mask> 
              <image href="/images/profile.jpeg" mask="url(#blob-mask)" className="mask-image" />              
            </svg>
          </div>
        </div>
      </header>
      <Expertise />
      <Skills />
      <WorkWith />
    </div>
    </>
  );
}
