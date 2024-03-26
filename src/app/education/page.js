import data from '@/data/education.json'
import { Poppins } from "next/font/google";
import Image from 'next/image';

export const metadata = {
  title: "Bilal Ahmad's Education | Software Engineer",
  description: "Discover Bilal Ahmad's educational background and qualifications as a dedicated software engineer, detailing Bachelor's degree in Computer Science.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic']
});

const DefaultEducationSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1122 1122">
      <g id="Object">
        <g>
          <polygon style={{ fill:'#AAD4C8' }} points="935.053,585.916 935.053,445.605 913.629,452.867 913.629,585.916   "/>
          <path style={{ fill:'#616E7D' }} d="M806.217,529.078l-240.024,81.388c-2.203,0.76-4.527,1.135-6.839,1.135    c-2.318,0-4.66-0.375-6.863-1.135l-240.012-81.388v201.289h0.254l-0.545,2.766c0,23.948,110.674,77.412,247.021,77.412    c136.341,0,246.724-53.464,246.724-77.412l-0.563-2.766h0.847V529.078z"/>
          <polygon style={{ fill:'#616E7D' }} points="312.478,489.302 559.354,573.013 806.217,489.302 913.629,452.867 935.053,445.605     946.334,441.78 559.354,311.456 172.355,441.78   "/>
          <path style={{ fill:'#AAD4C8' }} d="M899.032,618.791v81.917c0,13.977,11.317,25.304,25.31,25.304c13.98,0,25.304-11.327,25.304-25.304    v-81.917c0-6.92-2.79-13.187-7.281-17.751H906.33C901.834,605.604,899.032,611.871,899.032,618.791z"/>
          <polygon style={{ fill:'#82BFAB' }} points="903.099,585.916 903.099,601.04 906.33,601.04 942.364,601.04 945.572,601.04     945.572,585.916 935.053,585.916 913.629,585.916   "/>
        </g>
      </g>
    </svg>
  )
}

export default function Education() {

  const EducationCard = ({ item, index }) => {
    return (
      <div className={`rounded-lg shadow-sm shadow-accent bg-base ${poppins.className}`}>
        <div className={`flex items-center gap-10 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className='w-1/2'>
            <div className='w-52 h-52 mx-auto m-10'>
              {
                item.image ? <img src={item.image} alt={item.institute} className='h-52 mx-auto m-10' /> : <DefaultEducationSvg />
              }
            </div>
          </div>
          <div className='w-1/2'>
            <div className='m-10 px-8'>
              <h2 className='text-3xl text-neutral font-medium'>{item.level}</h2>
              <div className='my-4'>
                <p className='text-xl text-neutral mb-1'>{item.institute}</p>
                <p className='text-lg text-neutral mb-1'>{item.degree}</p>
                <p className='text-sm text-neutral mb-1'>{item.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='my-20'>
      <section className='container px-60 mx-auto my-10'>
        <div className='flex flex-1 flex-col gap-10'>
          {
            data.map((item, index) => {
              return (
                <EducationCard key={index} item={item} index={index} />  
              )
            })
          }
        </div>
      </section>
    </div>
  );
}
