import React from 'react'
import moment from 'moment'

export default function VideoLength({time}) {
  const videoLengthInSeconds = moment().startOf("day").seconds(time).format("H:mm:ss") 

  return (
    <div className='absolute bottom-1 right-1 bg-black py-1 px-2 text-white text-xs rounded-md'>
        {videoLengthInSeconds}
    </div>
  )
}
