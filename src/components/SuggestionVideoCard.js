import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCheckCircleFill } from "react-icons/bs"

export default function SuggestionVideoCard({video}) {
  return (
    <Link to={`/video/${video?.id?.videoId}`}>
      <div className="flex mb-3 ">
        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
          <img className='h-full w-full object-cover overflow-hidden' src={video?.snippet?.thumbnails.medium?.url} alt='video' />
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
            <span className='text-sm text-white lg:text-xs xl:text-sm font-bold line-clamp-2 '>
              {video?.snippet?.title}
            </span>
            <span className='text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center '>
              {video?.snippet?.channelTitle}
              {video?.snippet?.channelTitle && (
                <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] lg:text[10px] xl:text[12px] ml-2' />
              )}
            </span>
           
          </div>
      </div>
    </Link>
  )
}
