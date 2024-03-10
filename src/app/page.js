'use client'

import { Nunito_Sans } from "next/font/google";
import Icons from "@/components/Icons";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const inter = Nunito_Sans({ 
  subsets: ["latin"], 
  weight: ['400', '700'],
});

const expertise = [
  {
    title: 'Web Designing',
    description: 'I specialize in developing beautiful and responsive websites using modern web technologies. From captivating landing pages to dynamic web portals, engaging eCommerce platforms, and immersive blogs.',
    icon: 'frontend'
  },
  {
    title: 'Server Development',
    description: 'I specialize in developing beautiful and responsive websites using modern web technologies. From captivating landing pages to dynamic web portals, engaging eCommerce platforms, and immersive blogs.',
    icon: 'backend'
  },
  {
    title: 'Security',
    description: 'I specialize in developing beautiful and responsive websites using modern web technologies. From captivating landing pages to dynamic web portals, engaging eCommerce platforms, and immersive blogs.',
    icon: 'database'    
  },
  {
    title: 'Database',
    description: 'I specialize in developing beautiful and responsive websites using modern web technologies. From captivating landing pages to dynamic web portals, engaging eCommerce platforms, and immersive blogs.',
    icon: 'security'
  }
]

const skills = [
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
  'https://www.queness.com/resources/html/css3-hexagon/images/2.jpg',
]

const workWith = [
  'https://logohistory.net/wp-content/uploads/2023/02/KFC-Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/2036px-Domino%27s_pizza_logo.svg.png',
  'https://seeklogo.com/images/P/pizza-hut-logo-DDD88793B2-seeklogo.com.png',
  'https://nexaglow.pk/assets/logon-7c0d677f.png',
]

export default function Home() {

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 3 },
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ],
    {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 1 }
    },
  )

  return (
    <div className="custom-container">
      <header className={inter.className}>
        <div className="flex flex-1 items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-medium text-gray-800 mb-3">Hello,</h1>
            <h1 className="text-6xl font-medium text-gray-800">I &apos; m <span className="text-blue-500 font-semibold">Bilal</span></h1>
            <h2 className="text-3xl font-medium text-gray-500 my-5">Software Engineer</h2>
            <p className="text-xl text-gray-800 my-5">I &apos; m a passionate software developer who loves to build and break things. I &apos; m also a security enthusiast who loves to learn and share knowledge.</p>
            <button className="custom-button">Get in touch</button>
          </div>
          <div className="w-1/2">
            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    
              <defs>                         
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop id="stop1" stop-color="rgba(237.995, 104.784, 41.737, 1)" offset="0%"></stop>                            
                  <stop id="stop2" stop-color="rgba(226.611, 150.318, 24.388, 1)" offset="100%"></stop>                        
                </linearGradient>                    
              </defs> 
              <mask id="blob-mask">
                <path fill="white" d="M27.5,-32.8C35.4,-26.2,41.2,-17.3,42.5,-7.8C43.9,1.7,40.7,11.7,35,18.9C29.3,26.1,21,30.4,12.4,33.1C3.8,35.8,-5,36.9,-12.7,34.3C-20.4,31.7,-26.9,25.5,-31.3,18C-35.8,10.5,-38.2,1.7,-36.1,-5.8C-34.1,-13.2,-27.6,-19.2,-20.9,-26C-14.1,-32.7,-7,-40.3,1.4,-41.9C9.8,-43.6,19.7,-39.4,27.5,-32.8Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: 'all 0.3s ease 0s' }} stroke="url(#sw-gradient)"></path>
              </mask> 
              <image href="/images/profile.jpeg" mask="url(#blob-mask)" className="mask-image" />              
            </svg>
          </div>
        </div>
      </header>
      <section className="my-10">
        <h1 className="text-center text-5xl my-10">My Expertise</h1>
        <div className="flex flex-1 flex-wrap">
          {
            expertise.map((item, index) => (
              <div key={index} className="w-1/2 p-5">
                <div className="flex items-center mb-5">
                  {
                    item.icon && <Icons type={item.icon} paint="text-blue-500 h-6 w-6 me-5" />
                  }
                  <h1 className="text-2xl font-medium text-gray-800">{item.title}</h1>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))
          }          
        </div>
      </section>
      <section className="my-20">
        <h1 className="text-center font-medium text-4xl my-16">Skills</h1>
        <div className="skills-container">
          <div className="flex flex-col items-center">
            <div>
              <div className='hex' style={{ backgroundImage: `url(https://www.queness.com/resources/html/css3-hexagon/images/2.jpg)`}}>		
                <a href="#"></a>		
                <div className="corner-1"></div>
                <div className="corner-2"></div>		
              </div>
              <div className='hex' style={{ backgroundImage: `url(https://www.queness.com/resources/html/css3-hexagon/images/2.jpg)`}}>		
                <a href="#"></a>		
                <div className="corner-1"></div>
                <div className="corner-2"></div>		
              </div>
              <div className='hex' style={{ backgroundImage: `url(https://www.queness.com/resources/html/css3-hexagon/images/2.jpg)`}}>		
                <a href="#"></a>		
                <div className="corner-1"></div>
                <div className="corner-2"></div>		
              </div>
              <div className='hex' style={{ backgroundImage: `url(https://www.queness.com/resources/html/css3-hexagon/images/2.jpg)`}}>		
                <a href="#"></a>		
                <div className="corner-1"></div>
                <div className="corner-2"></div>		
              </div>
            </div>
            <div>
              <div className='hex' style={{ backgroundImage: `url(https://www.queness.com/resources/html/css3-hexagon/images/2.jpg)`}}>		
                <a href="#"></a>		
                <div className="corner-1"></div>
                <div className="corner-2"></div>		
              </div>
              <div className='hex' style={{ backgroundImage: `url(https://www.queness.com/resources/html/css3-hexagon/images/2.jpg)`}}>		
                <a href="#"></a>		
                <div className="corner-1"></div>
                <div className="corner-2"></div>		
              </div>
              <div className='hex' style={{ backgroundImage: `url(https://www.queness.com/resources/html/css3-hexagon/images/2.jpg)`}}>		
                <a href="#"></a>		
                <div className="corner-1"></div>
                <div className="corner-2"></div>		
              </div>
              <div className='hex' style={{ backgroundImage: `url(https://www.queness.com/resources/html/css3-hexagon/images/2.jpg)`}}>		
                <a href="#"></a>		
                <div className="corner-1"></div>
                <div className="corner-2"></div>		
              </div>
              <div className='hex' style={{ backgroundImage: `url(https://www.queness.com/resources/html/css3-hexagon/images/2.jpg)`}}>		
                <a href="#"></a>		
                <div className="corner-1"></div>
                <div className="corner-2"></div>		
              </div>
            </div>
            <div>
              <div className='hex' style={{ backgroundImage: `url(https://www.queness.com/resources/html/css3-hexagon/images/2.jpg)`}}>		
                <a href="#"></a>		
                <div className="corner-1"></div>
                <div className="corner-2"></div>		
              </div>
              <div className='hex' style={{ backgroundImage: `url(https://www.queness.com/resources/html/css3-hexagon/images/2.jpg)`}}>		
                <a href="#"></a>		
                <div className="corner-1"></div>
                <div className="corner-2"></div>		
              </div>
              <div className='hex' style={{ backgroundImage: `url(https://www.queness.com/resources/html/css3-hexagon/images/2.jpg)`}}>		
                <a href="#"></a>		
                <div className="corner-1"></div>
                <div className="corner-2"></div>		
              </div>
              <div className='hex' style={{ backgroundImage: `url(https://www.queness.com/resources/html/css3-hexagon/images/2.jpg)`}}>		
                <a href="#"></a>		
                <div className="corner-1"></div>
                <div className="corner-2"></div>		
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-20">
        <h1 className="text-center font-medium text-4xl my-16">Work With</h1>
        <div ref={sliderRef} className="keen-slider">
          {
            workWith.map((item, index) => (
              <div key={index} className={`keen-slider__slide number-slide${index}`}>
                <img src={item} className="h-20 mx-auto" />
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
}
