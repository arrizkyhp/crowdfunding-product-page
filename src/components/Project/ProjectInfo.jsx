import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useContext } from 'react';
import DataContext from "context/data/DataContext";

const ProjectInfo = ({ data }) => {
  const progress = (data.item.backed / data.item.total_backed * 100).toFixed(2);

  return (
    <div className="bg-white relative rounded-lg border border-slate-200 items-center flex flex-col py-16 w-full px-6 md:px-16 mb-8">
    <div className="grid grid-cols-1 w-full justify-evenly gap-5 mb-8 md:grid-cols-3">
     <div className="flex flex-col after:content-[''] relative after:w-28 after:h-[1px] md:after:w-[1px] after:bg-slate-300 md:after:h-16 after:absolute after:bottom-0 after:mx-auto after:right-0 md:after:right-0 after:left-0 md:after:left-auto  md:after:bottom-2 gap-2 pb-8 md:pb-0 border-gray-300 text-center md:text-justify border-solid">
       <p className='text-4xl font-bold'>
         <CurrencyFormat value={data.item.backed} displayType={'text'} thousandSeparator prefix={'$'}/> 
       </p>
       <p className='text-base text-gray-500'>of <CurrencyFormat value={data.item.total_backed} displayType={'text'} thousandSeparator/>  backed</p>
     </div>
     <div className="flex flex-col after:content-[''] relative after:w-28 after:h-[1px] md:after:w-[1px] md:pl-8 after:bg-slate-300 md:after:h-16 after:absolute after:bottom-0 after:mx-auto after:right-0 md:after:right-0 after:left-0 md:after:left-auto  md:after:bottom-2 gap-2 pb-8 md:pb-0 border-gray-300 text-center md:text-justify border-solid">
       <p className='text-4xl font-bold'><CurrencyFormat value={data.item.backers} displayType={'text'} thousandSeparator/></p>
       <p className='text-base text-gray-500'>total backers</p>
     </div>
     <div className="flex flex-col gap-2  text-center md:text-justify  md:pl-8">
       <p className='text-4xl font-bold'>{data.item.day_left}</p>
       <p className='text-base text-gray-500'>days left</p>
     </div>
    </div>
    <div className="bg-gray-100 w-full h-4 rounded-full">
       <div className={`bg-blue-button-primary w-[${parseFloat(progress)}%] h-full rounded-full`}></div>
    </div>
 </div>
  )
}

export default ProjectInfo