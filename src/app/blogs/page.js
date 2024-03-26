import data from '@/data/blogs.json'
import { Poppins } from "next/font/google";
import StructuredData from '@/components/StructureData';

export const metadata = {
  title: "Bilal Ahmad's Software Engineering Blog | Insights, Tips & Tutorials",
  description: "Explore Bilal Ahmad's insightful software engineering blog for valuable tips, tutorials, and industry insights. Stay updated with the latest trends, best practices, and practical solutions in software development",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic']
});

const dateFormatter = (date) => {
  const dateObject = new Date(date);
  dateObject.setHours(dateObject.getHours() + 5);
  return dateObject.toISOString()
}

const BlogCard = ({ item, index }) => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": item.title,
    "description": "Dummy Description",
    "image": item.image,
    "datePublished": dateFormatter(item.publish.date),
    "author": {
      "@type": "Person",
      "name": "Bilal Ahmad"
    }
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <div className={`rounded-lg p-2 shadow-sm shadow-accent bg-base ${poppins.className}`}>
        <div className={`flex items-center gap-10 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className='w-2/5'>
            <img src={item.image} alt={item.title} className='h-72 object-cover mx-auto rounded-lg' />
            {/* <Image src={item.image} alt={item.institute} className='mx-auto' width={200} height={200} /> */}
          </div>
          <div className='w-3/5 px-5'>
            <h2 className='text-3xl font-medium'>{item.title}</h2>
            <div className='my-5'>
              <p className='text-sm text-neutral mb-1'>{(item.publish.date)}</p>
              <p className='text-xl text-neutral mb-1'>{item.institute}</p>
              <p className='text-lg text-neutral mb-1'>{item.degree}</p>
            </div>
            <button className='custom-button'>Read More</button>
          </div>
        </div>
      </div>
    </>
    
  )
}


export default function Blogs() {
  return (
    <div className="my-20">
      <section className='container px-60 mx-auto my-10'>
        <div className='flex flex-1 flex-col gap-10'>
          {
            data.map((item, index) => {
              return (
                <BlogCard key={index} item={item} index={index} />  
              )
            })
          }
        </div>
      </section>
    </div>
  );
}
  