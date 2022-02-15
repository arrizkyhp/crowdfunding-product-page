import logoMastercraft from 'assets/images/logo-mastercraft.svg'
import iconBookmark from 'assets/images/icon-bookmark.svg'
import { FaBookmark } from 'react-icons/fa'

export const Home = () => {
  return <main className="container flex flex-col items-center px-4  max-w-3xl mt-48 md:mt-56 ">
      <div className="bg-white relative  rounded-lg border border-slate-200 items-center flex flex-col md:py-16 pt-16 pb-10 w-full px-6 md:px-16 mb-8">
          <img src={logoMastercraft} alt="logo m" className='absolute -top-7 w-16' />
          <h1 className='font-bold text-center md:text-left  text-2xl md:text-3xl mb-5'>Mastercraft Bamboo Monitor Riser</h1>
          <p className='text-lg text-grey-custom-400 mb-8 md:mb-10 text-center text-sm md:text-base'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className=" flex flex-row items-center justify-between w-full">
              <button className='bg-blue-button-primary hover:bg-blue-button-hover transition ease-in-out duration-300 text-lg py-4 px-10 font-medium text-white rounded-full'>Back this project</button>
              <a href='/' className="group flex flex-row gap-3 bg-grey-custom-200  rounded-full">
                  <div className="bg-grey-custom-600 text-grey-custom-300 transition ease-in-out duration-300 group-hover:bg-grey-custom-300 w-14 h-14 rounded-full flex justify-center items-center">
                    <img src={iconBookmark} alt="bookmark" className='group-hover:opacity-50 transition ease-in-out duration-300'/>
                  </div>
                  <p className='font-bold text-grey-custom-500 group-hover:opacity-80 transition ease-in-out duration-300 text-lg py-4 pr-5 hidden md:inline-block'>Bookmark</p>
              </a>
          </div>
      </div>

      <div className="bg-white relative  rounded-lg border border-slate-200 items-center flex flex-col py-16 w-full px-6 md:px-16 mb-8">
         <div className="grid grid-cols-1 w-full justify-evenly gap-5 mb-8 md:grid-cols-3">
          <div className="flex flex-col after:content-[''] relative after:w-28 after:h-[1px] md:after:w-[1px] after:bg-slate-300 md:after:h-16 after:absolute after:bottom-0 after:mx-auto after:right-0 md:after:right-0 after:left-0 md:after:left-auto  md:after:bottom-2 gap-2 pb-8 md:pb-0 border-gray-300 text-center md:text-justify border-solid">
            <p className='text-4xl font-bold'>$89,914</p>
            <p className='text-base text-gray-500'>of $100,000 backed</p>
          </div>
          <div className="flex flex-col after:content-[''] relative after:w-28 after:h-[1px] md:after:w-[1px] md:pl-8 after:bg-slate-300 md:after:h-16 after:absolute after:bottom-0 after:mx-auto after:right-0 md:after:right-0 after:left-0 md:after:left-auto  md:after:bottom-2 gap-2 pb-8 md:pb-0 border-gray-300 text-center md:text-justify border-solid">
            <p className='text-4xl font-bold'>5,007</p>
            <p className='text-base text-gray-500'>total backers</p>
          </div>
          <div className="flex flex-col gap-2  text-center md:text-justify  md:pl-8">
            <p className='text-4xl font-bold'>56</p>
            <p className='text-base text-gray-500'>days left</p>
          </div>
         </div>
         <div className="bg-gray-100 w-full h-4 rounded-full">
            <div className="bg-blue-button-primary w-4/5 h-full rounded-full"></div>
         </div>
      </div>

      <div className="bg-white relative rounded-lg border border-slate-200 items-center flex flex-col py-16 w-full px-16 mb-24">
        <h1 className='text-2xl font-bold self-start mb-8'>About this project</h1>
        <p className='text-slate-500 text-base leading-7 mb-7'>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
        <p className='text-slate-500 leading-7 mb-8'>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
        to allow notepads, pens, and USB sticks to be stored under the stand.</p>

        <div className='border border-slate-300 rounded-lg p-8 w-full mb-8'>
          <div className="flex justify-between mb-6">
            <h1 className='text-xl font-bold'>Bamboo Stand</h1>
            <p className='text-base text-blue-button-primary font-medium'>Pledge $25 or more</p>
          </div>
          <p className='text-slate-500 text-base leading-8 mb-7'> You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
          <div className='flex w-full justify-between'>
            <div className='flex items-center'>
              <p className='font-bold text-4xl mr-2'>101</p>
              <p className='text-slate-500'>left</p>
            </div>
            <button className='bg-blue-button-primary hover:bg-blue-button-hover transition ease-in-out duration-300 text-base py-4 px-8 font-medium text-white rounded-full'>Select Reward</button>
          </div>
        </div>

        <div className='border border-slate-300 rounded-lg p-8 w-full mb-8'>
          <div className="flex justify-between mb-6">
            <h1 className='text-xl font-bold'>Black Edition Stand</h1>
            <p className='text-base text-blue-button-primary font-medium'>Pledge $75 or more</p>
          </div>
          <p className='text-slate-500 text-base leading-8 mb-7'>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
          <div className='flex w-full justify-between'>
            <div className='flex items-center'>
              <p className='font-bold text-4xl mr-2'>64</p>
              <p className='text-slate-500'>left</p>
            </div>
            <button className='bg-blue-button-primary hover:bg-blue-button-hover transition ease-in-out duration-300 text-base py-4 px-8 font-medium text-white rounded-full'>Select Reward</button>
          </div>
        </div>

        <div className='border border-slate-200 rounded-lg p-8 w-full'>
          <div className="flex justify-between mb-6">
            <h1 className='text-xl font-bold text-slate-400'>Mahogany Special Edition</h1>
            <p className='text-base text-blue-button-primary-100 font-medium'>Pledge $200 or more</p>
          </div>
          <p className='text-slate-300 text-base leading-8 mb-7'>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
          <div className='flex w-full justify-between'>
            <div className='flex items-center'>
              <p className='font-bold text-4xl mr-2 text-slate-400'>0</p>
              <p className='text-slate-300'>left</p>
            </div>
            <button className='bg-slate-300 text-base py-4 px-8 font-medium text-white rounded-full'>Out of Stock</button>
          </div>
        </div>

      </div>
  </main>;
};
