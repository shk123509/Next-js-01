import { Spotlight } from "./ui/Spotlight";
import Link from "next/link"
import { Button } from "./ui/moving-border"

const Herosection = () => {
  return (
    
   <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 px-4">
     <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
  <div className="p-4 relative z-10 w-full max-w-2xl text-center space-y-4">
 <h1 className="text-6xl md:text-8xl font-extrabold whitespace-nowrap bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
  Master the art of music
</h1>




   <p className="my-10 text-base md:text-lg text-gray-500 leading-relaxed overflow-hidden text-ellipsis">
  Music sirf ek skill nahi, ek language hai jo emotions ko bina words ke express karti hai. 
  Yahan aap rhythm, melody aur composition ko depth me samjhoge, real practice ke sath. 
  Beginner ho ya intermediate – hum aapko step-by-step guide karenge taaki aap confidently 
  apni khud ki tunes create kar sako aur performance me shine kar pao.
</p>
    <div className="mt-12">
      <Button
        borderRadius="1.85rem"
        
      >
        <Link href={"/course"}>
        Explore Course
        </Link>
      </Button>
    </div>
  </div>
</div>
  )
}

export default Herosection