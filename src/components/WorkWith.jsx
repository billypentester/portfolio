'use client'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function WorkWith() {

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

    const workWith = [
        'https://logohistory.net/wp-content/uploads/2023/02/KFC-Logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/2036px-Domino%27s_pizza_logo.svg.png',
        'https://seeklogo.com/images/P/pizza-hut-logo-DDD88793B2-seeklogo.com.png',
        'https://nexaglow.pk/assets/logon-7c0d677f.png',
    ]

    return(
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
    )
}