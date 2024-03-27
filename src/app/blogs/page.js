import data from '@/data/blogs.json'
import { Poppins } from "next/font/google";
import StructuredData from '@/components/StructureData';
import Link from 'next/link';

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
        <div className={`flex gap-10 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className='w-2/5'>
            <img src={item.image} alt={item.title} className='h-72 object-cover mx-auto rounded-lg' />
            {/* <Image src={item.image} alt={item.institute} className='mx-auto' width={200} height={200} /> */}
          </div>
          <div className='w-3/5 p-5'>
            {
              item.publish.publishedBy ? 
                <div className='inline-block px-4 py-2 bg-primary mb-5 rounded-full shadow-md'>
                  <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-5 h-5 text-yellow-400 fill-current'>
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    </svg>
                    <div className='flex gap-2'>
                      <p className='text-sm text-neutral'>Published in</p>
                      <p className='text-sm text-neutral font-bold'>{item.publish.publishedBy}</p>
                    </div>
                  </div>
                </div>
              :
                <div className='mb-5'></div>
            }
            <h2 className='text-3xl font-medium'>{item.title}</h2>
            <div className='my-4'>
              <p className='text-md text-neutral mb-1'>{(item.publish.date)}</p>
            </div>
            <Link href={item.link} target='_blank'>
              <button className='custom-button-sm'>Read More</button>
            </Link>
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
  