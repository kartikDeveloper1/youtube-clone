import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { abbreviateNumber } from 'js-abbreviation-number'
import { fetchDataFromApi } from '../utils/api'
import { Context } from '../context/contextApi'
import SuggestionVideoCard from './SuggestionVideoCard'

export default function VideoDetails() {
  const [video, setVideo] = useState()
  const [relatedVideos, setRelatedVideos] = useState()
  const { id } = useParams()
  const { setLoading } = useContext(Context)

  useEffect(() => {
    document.getElementById('root').classList.add('custom-h')
    
    fetchVideoDetails()
    fetchRelatedVideos()
    // eslint-disable-next-line
  }, [id])


  const fetchVideoDetails = () => {
    setLoading(true)
    fetchDataFromApi(`videos?part=contentDetails%2Cstatistics&id=${id}`).then(( res ) => {
      setVideo(res)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
    })
  }

  const fetchRelatedVideos = () => {
    setLoading(true)
    fetchDataFromApi(`search?relatedToVideoId=${id}&type=video`).then(( res ) => {
      setRelatedVideos(res.items)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)] bg-black' >
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row ">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto ">
          <div className="h-[200px] mt-1 mb-3 md:h-[250px] lg:h-[300px] xl:h-[300px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0 ">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: '#000000' }}
              playing={true}
            />
            
          </div>
          <div className="text-white py-4 font-bold text-sm md:text-xl   line-clamp-2">
            {video?.items[0]?.snippet?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-2">
            <div className="flex">
              <div className="flex flex-col ">
                <div className="text-white text-md font-semibold flex items-center">
                  {video?.items[0]?.snippet?.channelTitle}
                  {video?.items[0]?.snippet?.channelTitle && (
                    <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-2' />
                  )}
                </div>

                <div className="text-white/[0.7] text-sm ">
                  Published : {video?.items[0]?.snippet?.publishedAt}
                </div>

              </div>
            </div>
            <div className="flex text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
              {
                  video?.items[0]?.statistics?.likeCount && (
                      <>
                      <AiOutlineLike className='text-xl text-white mr-2' />
                    <span>
                      {`${abbreviateNumber(video?.items[0]?.statistics?.likeCount, 2)} likes`}
                    </span>
                      </>
                  )
                }
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                {
                  video?.items[0]?.statistics?.viewCount && (
                      <>
                      <AiOutlineLike className='text-xl text-white mr-2' />
                    <span>
                      {`${abbreviateNumber(video?.items[0]?.statistics?.viewCount, 2)} views`}
                    </span>
                      </>
                  )
                }
                
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col py-6 px-4 overflow-hidden h-full lg:w-[350px] xl:w-[400px] '>
            <div className='overflow-y-scroll'>
            {
              relatedVideos?.map((item,index)=>{
                  return (
                    <>
                    {(item?.snippet?.thumbnails?.medium?.url) &&
                      <SuggestionVideoCard 
                      key = {index}
                      video = {item}
                    />
                    }
                    </>
                  )
              })
            }
            </div>
        </div>
      </div>
    </div>
  )
}
