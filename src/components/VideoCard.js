import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCheckCircleFill } from "react-icons/bs"

export default function VideoCard({ video }) {
  return (
    <Link to={`/video/${video.id.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img className='h-full w-full object-cover' src={video?.snippet?.thumbnails?.medium?.url} alt='video' />
        </div>
        <div className="flex text-white mt-3">
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className='text-sm font-bold line-clamp-2'>
              {video?.snippet?.title}
            </span>
            <span className='text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center'>
              {video?.snippet?.channelTitle}
              {video?.snippet?.channelTitle  && (
                <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-2' />
              )}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
