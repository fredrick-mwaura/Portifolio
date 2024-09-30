import React from 'react'
import Image from '.././lib/image'
import Dp from 'public/Dp.jpeg'
export default function About() {
  return (
    <div>
      <Image
     src={Dp}
     alt={"profile"}
     width={300}
     height={400}
     className={'m-3'}
      />
    </div>
  )
}
