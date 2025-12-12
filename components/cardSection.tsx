'use client'
import coursesData from "../data/course-data.json"
import { Button } from './ui/moving-border'
import { BackgroundGradient } from './ui/background-gradient'
// Assuming Link is imported here (e.g., from 'next/link' if using Next.js)

interface Course{
  id : number,
  title : string,
  slug : string,
  description : string,
  price : number,
  isFeatured : boolean
}
const CardSection = () => { 
  const FeatureCourse = coursesData.courses.filter((course:Course) => course.isFeatured)
  return (
    <div className='py-20 bg-gray-900'>
        {/* ... (Header remains the same) ... */}
        <div>
            <div className='text-center'>
                <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight whitespace-nowrap bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>
                    Featured Courses
                </h1>
                <p className='mt-4 mb-16 text-base md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto'>
                    Learn the Best Courses from Industry Experts
                </p>
            </div>
        </div>
        
        <div className='mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-stretch'> {/* ⬅️ KEY: items-stretch ensures grid children fill height */}
               {FeatureCourse.map((course:Course) =>(
                // 1. Set flex and h-full on the outer grid item
                <div className='flex justify-center h-full' key={course.id}>
                    {/* 2. Set h-full on the BackgroundGradient wrapper */}
                    <BackgroundGradient className='flex flex-col rounded-[22px] p-4 bg-zinc-800 border border-zinc-700 w-full h-full max-w-sm'>
                      
                      {/* 3. Use flex-col and h-full on the inner content container */}
                      <div className='p-6 flex flex-col items-start h-full'> 
                        
                        <p className='text-xl sm:text-2xl font-bold text-white mb-2'>
                          {course.title}
                        </p>
                        
                        {/* 4. Use flex-grow on the description to push the button to the bottom */}
                        <p className='text-sm text-gray-400 flex-grow mb-4'> 
                          {course.description}
                        </p>
                        
                        <a 
                          href={`/course/${course.slug}`} 
                          className='
                            px-4 py-2 mt-4 
                            bg-blue-600 hover:bg-blue-700 
                            text-white text-sm font-semibold 
                            rounded-lg shadow-md 
                            transition duration-300 
                          '
                        >
                          Learn More
                        </a>
                      </div>
                    </BackgroundGradient>
                </div>
               ))}
            </div>
        </div>

        {/* ... (View All Courses Button remains the same) ... */}
        <div className='mt-20 text-center'>
          <Button 
             borderRadius="1.85rem"
             className="bg-gray-900 text-white border-slate-800"
          >
             <a href={"/course"}>
                View All Courses
             </a>
          </Button>
        </div>
    </div>
  )
}

export default CardSection