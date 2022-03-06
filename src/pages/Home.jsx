import logoMastercraft from 'assets/images/logo-mastercraft.svg'
import { useContext } from 'react';
import DataContext from "context/data/DataContext";
import BookmarkContext from 'context/bookmark/BookmarkContext';
import ModalContext from 'context/modal/ModalContext';
import ProjectCard from 'components/Project/ProjectCard';
import ProjectInfo from 'components/Project/ProjectInfo';
import parse from 'html-react-parser';
import Button from 'components/Button';
import Bookmark from 'components/Bookmark';
import Modal from 'components/Modal';

export const Home = () => {
  const {data} = useContext(DataContext)
  const {modal, dispatch} = useContext(ModalContext)
  const {bookmark} = useContext(BookmarkContext)
  const about = data.item.about;
  const rewards = data.item.rewards;


  const handleModal = () => {
    dispatch({
      type: 'SWITCH_MODAL'
    })
    console.log("text")
  } 

  return <main className="container flex flex-col items-center px-4  max-w-3xl mt-48 md:mt-56 ">
      <div className="bg-white relative  rounded-lg border border-slate-200 items-center flex flex-col md:py-16 pt-16 pb-10 w-full px-6 md:px-16 mb-8">
          <img src={logoMastercraft} alt="logo m" className='absolute -top-7 w-16' />
          <h1 className='font-bold text-center md:text-left  text-2xl md:text-3xl mb-5'>{data.item.name}</h1>
          <p className='text-grey-custom-400 mb-8 md:mb-10 text-center text-sm md:text-lg '>{data.item.description}</p>
          <div className=" flex flex-row items-center justify-between w-full">
              <Button isButton isBig isPrimary children="Back this project" onClick={handleModal}/>
              {bookmark && <Bookmark isBookmark />}
              {!bookmark && <Bookmark isNotBookmark />}
          </div>
          <Modal />
      </div>
      <ProjectInfo data={data} />
      <div className="bg-white relative rounded-lg border border-slate-200 items-center flex flex-col py-10 md:py-16 w-full px-6 md:px-16 mb-24">
        <h1 className='text-xl md:text-2xl font-bold self-start mb-8'>About this project</h1>
        {parse(about)}
        {rewards.map(reward => {
          return <ProjectCard reward={reward} key={reward.id} />
        })}

      </div>
  </main>;
};
