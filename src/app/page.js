import Image from 'next/image'

export default function Home() {
  return (
    <div>
     <h1 className='text-5xl text-center my-10'>welcome to next level fetching</h1>
     <p>getting to know about rendering/fetching</p>
     <ul>
      <li>
        SSG Server Side Generation 
      </li>
      <li>
        ISR Incremental Static Regeneration 
      </li>
      <li>
        SSR Server Side Rendering
      </li>
     </ul>
    </div>
  )
}
