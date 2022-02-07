import logoMastercraft from 'assets/images/logo-mastercraft.svg'
import iconBookmark from 'assets/images/icon-bookmark.svg'
import { FaBookmark } from 'react-icons/fa'

export const Home = () => {
  return <main className="container flex flex-col items-center  max-w-4xl mt-56 ">
      <div className="bg-white relative  rounded-lg border border-slate-200 items-center flex flex-col py-16 w-full px-16 mb-8">
          <img src={logoMastercraft} alt="logo m" className='absolute -top-7 w-16' />
          <h1 className='font-bold text-4xl mb-5'>Mastercraft Bamboo Monitor Riser</h1>
          <p className='text-xl text-grey-custom-400 mb-10'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className=" flex flex-row items-center justify-between w-full">
              <button className='bg-blue-button-primary hover:bg-blue-button-hover transition ease-in-out duration-300 text-lg py-4 px-10 font-medium text-white rounded-full'>Back this project</button>
              <a href='/' className="group flex flex-row gap-3 bg-grey-custom-200  rounded-full">
                  <div className="bg-grey-custom-600 text-grey-custom-300 transition ease-in-out duration-300 group-hover:bg-grey-custom-300 w-14 h-14 rounded-full flex justify-center items-center">
                    <img src={iconBookmark} alt="bookmark" className='group-hover:opacity-50 transition ease-in-out duration-300'/>
                  </div>
                  <p className='font-bold text-grey-custom-500 group-hover:opacity-80 transition ease-in-out duration-300 text-lg py-4 pr-5'>Bookmark</p>
              </a>
          </div>
      </div>
      <div className="bg-white relative  rounded-lg border border-slate-200 items-center flex flex-col py-16 w-full px-16 mb-8">
         <div className="grid grid-cols-3 w-full justify-evenly gap-20 mb-8">
          <div className="flex flex-col border-r gap-2 border-gray-300 border-solid">
            <p className='text-4xl font-bold'>$89,914</p>
            <p className='text-base text-gray-500'>of $100,000 backed</p>
          </div>
          <div className="flex flex-col border-r gap-2 border-gray-300 border-solid">
            <p className='text-4xl font-bold'>5,007</p>
            <p className='text-base text-gray-500'>total backers</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className='text-4xl font-bold'>56</p>
            <p className='text-base text-gray-500'>days left</p>
          </div>
         </div>
         <div className="bg-gray-100 w-full h-4 rounded-full">
            <div className="bg-blue-button-primary w-4/5 h-full rounded-full"></div>
         </div>
      </div>
  </main>;
};
