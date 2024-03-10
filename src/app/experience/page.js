import data from '@/data/experience.json'

export const metadata = {
  title: "Bilal Ahmad's Professional Experience | Software Engineer",
  description: "Explore Bilal Ahmad's diverse professional experience as a skilled software engineer, including expertise in React, Node, Nest, Next and MYSQL.",
};

export default function Education() {

  const ExperienceCard = ({ item, index }) => {
    return (
      <div key={index} className={`rounded-lg custom-shadow`}>
        <div className={`flex items-center gap-10`}>
          <div className=''>
            <img src={item.logo} alt={item.institute} className='h-72 rounded-s-lg shadow-md' />
          </div>
          <div className=''>
            <div className='px-5'>
              <h2 className='text-3xl font-medium'>{item.position}</h2>
              <p className='text-xl text-gray-900 mb-1'>{item.organization}</p>
              <div className='my-5'>
                <span className='text-lg text-gray-700'>{item.startDate}</span>
                <span className='text-lg text-gray-700 mx-1'>-</span>
                <span className='text-lg text-gray-700'>{item.endDate}</span>
              </div>
              {
                item.highlights.map((line)=> {
                  return (
                    <p>{line}</p>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <section className='container px-60 mx-auto my-10'>
        <div className='flex flex-1 flex-col gap-10'>
          {
            data.map((item, index) => {
              return (
                <ExperienceCard key={index} item={item} index={index} />  
              )
            })
          }
        </div>
      </section>
    </div>
  )
}
  