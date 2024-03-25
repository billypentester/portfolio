import Icons from "./Icons";

export default function Footer() {

  let socialLinks = [
    { 
      name: 'facebook', 
      url: 'https://www.facebook.com/billypentester'
    },
    { 
      name: 'twitter', 
      url: 'https://twitter.com/billypentester'
    },
    { 
      name: 'instagram', 
      url: 'https://www.instagram.com/billypentester/'
    },
    { 
      name: 'linkedin', 
      url: 'https://www.linkedin.com/in/billypentester/'
    },
    { 
      name: 'github', 
      url: 'https://www.linkedin.com/in/billypentester/'
    }
  ]

  return (
    <footer className="bg-base">
      <div className="custom-container">

        <div className="py-10">
          <h1 className="text-secondary my-10 text-5xl font-semibold">Get in Touch</h1>
          <div className="flex flex-1 justify-center">
            <div className="w-2/5 pr-5">
              <div className="flex flex-col gap-5">
                <p className="text-lg text-neutral">Let's have a chat and I'll help your next idea comes to the real world.</p>
                <p className="text-lg text-neutral">Simple friendly talk is never a bad idea :)</p>
              </div>
            </div>
            <div className="w-3/5">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <input className="custom-input" placeholder="Your Name" type="text" />
                  <input className="custom-input" placeholder="Your Email" type="email" />
                </div>
                <textarea maxLength={'250'} rows={'8'} className="resize-none custom-input" placeholder="Your Message"></textarea>
                <button className="custom-button">
                  <span className="font-semibold text-md uppercase">Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-10">
          <div className="flex flex-1 gap-10 justify-center">
            {
              socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank">
                  <Icons type={link.name} paint="h-10 w-10 text-neutral"/>
                </a>
              ))
            }
          </div>
        </div>
        
        <hr className="border-neutral" />
        
        <div className="py-5">
          <div className="flex justify-center gap-2">
            <p className="text-neutral"> Copyright { new Date().getFullYear()}</p>
            <p className="text-neutral">&#x2022;</p>
            <p className="text-secondary text-lg">Bilal Ahmad</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
