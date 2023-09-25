import React, { useContext , useEffect } from 'react'
import LeftNav from "./LeftNav"
import { Context } from '../context/contextApi'
import VideoCard from "./VideoCard"


export default function Feed() {
  const {loading, searchResults} = useContext(Context)

  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h")
  },[])

  // console.log(searchResults)

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
        <LeftNav />
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className= "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
                    {(loading === false && searchResults) && searchResults?.map((item,index)=>{
                         
                        return (
                          <>
                          {(item?.id?.videoId) &&
                               <VideoCard 
                               key={index} 
                               video = {item}
                           />
                          }
                          </>
                           
                        )
                    })}
                </div>
        </div>
    </div>
  )
}
