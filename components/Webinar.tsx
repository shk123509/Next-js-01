"use client"
import { HoverEffect } from "./ui/card-hover-effect";
 
import { Button } from './ui/moving-border'


const Webinar = () => {

const itemsOf = [
  {
    title: "Elon Musk — Innovator",
    description: "Dream so big that even failure takes you somewhere great. Brains + madness + execution = innovation.",
    link: <a href="#">Learn More</a>,
  },
  {
    title: "Steve Jobs — Visionary",
    description: "Simple is hard. But when done right, it looks like magic. Think different, build different.",
    link: <a href="#">View Story</a>,
  },
  {
    title: "Jeff Bezos — Business Titan",
    description: "Customers first, growth second, excuses nowhere. Build with patience that scares people.",
    link: <a href="#">Explore</a>,
  },
  {
    title: "Sundar Pichai — CEO Google",
    description: "Success isn't one big push, it’s small steps every day. Calm mind, massive execution.",
    link: <a href="#">Inspired?</a>,
  },
  {
    title: "Mark Zuckerberg — Meta Founder",
    description: "Move fast, break things, fix them better. The best ideas feel like jokes at first.",
    link: <a href="#">Dive In</a>,
  },
  {
    title: "Satya Nadella — Microsoft CEO",
    description: "Empathy can build empires. Culture beats strategy when strategy forgets people.",
    link: <a href="#">Read More</a>,
  },
];
   
  return (
    <div className='py-20 bg-gray-900'>
        {/* 1 */}
       <div>
            <div className='text-center'>
                <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight whitespace-nowrap bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>
                    Featured Webinar
                </h1>
                <p className='mt-4 mb-16 text-base md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto'>
                    Learn the Best Courses from Industry Experts
                </p>
            </div>
        </div>
     {/* 3 */}
      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={itemsOf.map(wib=>(
        {
            title : wib.title,
            description : wib.description,
            link : '/'
        }
      ))} />
    </div>
        <div className='mt-20 text-center'>
                  <Button 
                     borderRadius="1.85rem"
                     className="bg-gray-900 text-white border-slate-800"
                  >
                     <a href={"/Interfacecourse"}>
                        View All Courses
                     </a>
                  </Button>
         </div>
    </div>
  )
}

export default Webinar