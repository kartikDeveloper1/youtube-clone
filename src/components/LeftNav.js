import React,{useContext} from 'react'
import { Context } from '../context/contextApi'
import { categories } from '../utils/constants'
import LeftNavMenuItem from './LeftNavMenuItem'
import { useNavigate } from 'react-router-dom'


export default function LeftNav() {
  const {selectCategories, setSelectCategories,mobileMenu} = useContext(Context)
  const navigate = useNavigate()

  const clickHandler = (name, type) =>{
      switch(type) {
          case "category" :
            return setSelectCategories(name)
          case "home" :
            return setSelectCategories(name)
          case "menu" :
            return false
          default :
             break
      }
  }
  return (
    
    <div className={`md:block w-[240px] overflow-y-auto h-full pt-4 bg-black absolute md:relative z-10  md:translate-x-0 transition-all 
    ${mobileMenu ? 'translate-x-0': 'translate-x-[-240px]'} `}>
      <div className='flex px-5 flex-col'>
          {
            categories.map((item,index)=>{
                return (
                  <>
                    <LeftNavMenuItem 
                      key = {index}
                      text = {item.type === "home" ? "Home" : item.name}
                      icon = {item.icon}
                      action = {
                        ()=>{
                            clickHandler(item.name,item.type)
                            navigate('/')
                        }
                      }
                      className = {`${selectCategories  ===  item.name ? "bg-white/[0.15]" : ""}`}
                    />
                    {item.divider &&
                      (
                        <hr className={"my-3 border-white/[0.2]"} />
                      )
                    }
                  </>
                )
            })
          }
          <hr className="my-3 py-1 border-white/[0.2]" />
          <div className='text-white/[0.5] text-[12px]'>
              Clone by : Kartik Sethi
          </div>
      </div>
    </div>
  )
}
