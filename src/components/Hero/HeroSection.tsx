import React from 'react'
import Link from 'next/link'
function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col 
    items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <div className='p-4 relative z-10 w-full text-center'>
        <h1>Master the Art of Music</h1>
        <p>Music is a universal language that transcends boundaries, connecting people through rhythm, melody, and emotion. 
            It has the power to uplift, inspire, and soothe, offering an escape from the everyday while expressing
             feelings that words often cannot. From classical symphonies to modern beats, music shapes cultures, memories, and moments, 
             enriching our lives with its infinite variety and depth.</p>
        <div className='mt-4'>
         <Link href={"/courses"}>Explore Courses</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
