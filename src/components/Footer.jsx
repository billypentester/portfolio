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
          <div className="flex flex-1 justify-center items-center gap-40">
            <div className="text-white">
              <h1 className="mb-3">Contact me</h1>
              <p className="text-gray-400 font-bold text-4xl mb-3">Got a Project?</p>
              <p className="text-gray-400 font-bold text-4xl">Lets Talk!</p>
            </div>
            <div className="flex items-center gap-5">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
              </svg>
              <h2  className="text-white text-2xl">hi@billypentester.com</h2>
            </div>
          </div>
        </div>
        
        <div className="py-10">
          <div className="flex flex-1 gap-10 justify-center">
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
