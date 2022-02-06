import logoMastercraft from 'assets/images/logo-mastercraft.svg'
import iconBookmark from 'assets/images/icon-bookmark.svg'
import { FaBookmark } from 'react-icons/fa'

export const Home = () => {
  return <main className="container flex flex-col items-center  max-w-4xl mt-60 ">
      <div className="bg-white relative  rounded-lg border border-slate-200 items-center flex flex-col py-16 w-full px-16">
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
  </main>;
};
