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
    <footer className="bg-slate-950">
      <div className="custom-container">
        
        <div className="py-10">



          <div className="flex flex-1 gap-10 justify-center ">
            {
              socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank">
                  <Icons type={link.name} paint="h-10 w-10 text-gray-100"/>
                </a>
              ))
            }
          </div>

        </div>
        
        <hr className="border-gray-500" />
        
        <div className="py-5">
          <div className="flex justify-center gap-2">
            <p className="text-gray-400"> Copyright { new Date().getFullYear()}</p>
            <p className="text-gray-400">&#x2022;</p>
            <p className="text-white">Bilal Ahmad</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
