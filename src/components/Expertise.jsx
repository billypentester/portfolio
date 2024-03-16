import Icons from "@/components/Icons";

export default function Expertise () {

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

    return (
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
    )
}