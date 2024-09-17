import React from 'react'
import {assets} from '../assets/assets'


function sidebar() {
  return (
    //positioning the element, after that designing the components

        <div className="bg-[#131212] h-full w-[15%] text-white overflow-hidden rounded flex flex-col justify-around min-h-12 ">
           <div className='flex items-center gap-3 pl-8 cursor-pointer'>
           <img className='w-8  ' src={assets.home_icon} alt="home_icon"/>
           <p className='font-bold'>Home</p>
            </div>
           <div className='flex items-center p-3  gap-3 pl-8 cursor-pointer'>
           <img className='w-8 ml-inherit ' src={assets.search_icon} alt="home_icon"/>
           <p className='font-bold'>Search</p>
            </div>
            <div className='bg-[#585353] h-[85%] rounded'>
                <div className='p-4 flex flex-col items-center justify-between gap-[40px]'>
    	                <div className='flex items-center gap-3 '>
                            <img className='w-8' src={assets.stack_icon} alt="" />
                            <p className='font-semibold'>Your Library</p>
                            <div className='flex items-center gap-3'>
                            <img className='w-5' src={assets.arrow_icon} alt="" />
                            <img className='w-5' src={assets.plus_icon} alt="" />
                            </div>
                        </div>
                        <div className='p-4 bg-[#585353] rounded flex flex-col items-start gap-3 '> 
                                <h1 className='font-semibold'>Create your own playlist</h1>
                                <p className='p-2 font-normal lowercase'>Its easy well help you</p>
                                <button className='bg-white text-[#585353]  rounded-2xl p-2'>Create  playlist</button>    
                        </div>
                        <div className='bg-[#585353] text-white pt-2 flex flex-col items-start gap-3 mt-2'>
                            <h1 className='font-semibold'>Lets find some podcasts to follow</h1>
                            <p className='font-normal'>We keep you updated on new episodes</p>
                            <button className='pt-2 bg-white text-[#585353] rounded-2xl p-2'>Browse podcasts</button>
                        </div>
                </div>  
            </div>
        </div>

  )
}

export default sidebar

