import React from 'react'
import CurrencyFormat from 'react-currency-format';
import {useContext, useEffect, useRef } from 'react';
import ModalContext from 'context/modal/ModalContext';
import closeButton from 'assets/images/icon-close-modal.svg'
import { FaDollarSign } from 'react-icons/fa'
import Button from './Button';

const Modal = ({data}) => {
    const ref = useRef()
    var { modal, rewardSelected, dispatch } = useContext(ModalContext)
   
    const handleCloseModal = () =>  {
      dispatch({
        type: 'SWITCH_MODAL'
      })
    }

    const handleCheckedModal = (e) => {
      const newReward = e
      dispatch({
        type: 'SELECT_RADIO',
        payload: newReward
      })
    }



    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if(modal && ref.current && !ref.current.contains(e.target)) {
            handleCloseModal()
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }


      }, [modal])


  return (
      <>
        <div className={`bg-black w-full h-screen fixed top-0 z-10 transition-opacity delay-200  ${modal ? "inline-block opacity-30" : "h-0 opacity-0"}`}></div>
        <div className={`flex-col gap-x-6 z-10 md:text-white absolute md:transition-all ease-linear delay-200  bg-slate-600 md:bg-white top-[0px] inset-x-0 rounded-xl px-10 py-12  ${modal ? "flex md:top-[0px] " : "hidden md:top-[-200px]"}`} ref={ref}>
            <button className='absolute right-8 top-8' onClick={handleCloseModal}>
              <img src={closeButton} alt="" />
            </button> 
            <h1 className={`text-black w-full font-bold text-2xl mb-4`}>Back this project</h1>
            <p className='text-grey-custom-400 mb-7'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            <div className="flex flex-col gap-5">
            <label htmlFor="no-reward"  className="flex justify-start items-start py-8 px-6 gap-5 cursor-pointer border-2 rounded-lg">
              <input type="radio" id='no-reward' name='reward' value="1" className='w-11 h-7 border-2 'onChange={() => handleCheckedModal("")}/>
              <div>
                <h2 className='text-black text-[17px] mb-4 font-bold'>Pledge with no reward</h2>
                <p className='text-grey-custom-500 leading-7'> Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
              </div>
            </label>

            {data.map(reward => {
              return (
                <div  className={`${reward.status === 1 ? ' border-slate-300' : 'cursor-not-allowed border-slate-200'} border-2 rounded-lg`}>
                <label htmlFor={reward.id} key={reward.id} className={`${reward.status === 1 ? 'cursor-pointer' : 'cursor-not-allowed '}`} >
                  <div className="py-8 px-6 pb-0 grid grid-cols-[fit-content(200px)_1fr] grid-rows-[1fr_fit-content(200px)]  gap-5 justify-start items-start ">
                    <input type="radio" id={reward.id} name='reward' value={reward.id} className='w-11 h-7 border-2' disabled={reward.status === 1 ? '' : 'disabled'} onChange={() => handleCheckedModal(reward.id)} checked={rewardSelected === reward.id ? true : false }/>
                    <div>
                    <div className='flex justify-between items-start'>
                      <div className="flex gap-4">
                        <h2 className={`text-black text-[17px] ${reward.status === 1 ? '' : 'text-slate-400'} mb-4 font-bold`}>{reward.name}</h2>
                        <p className={`${reward.status === 1 ? 'text-blue-button-primary' : 'text-blue-button-primary-100'} font-medium`}>Pledge <CurrencyFormat value={reward.pledge} displayType={'text'} thousandSeparator prefix={'$'} /> or more</p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <p className={`text-black font-bold ${reward.status === 1 ? '' : 'text-slate-400'}`}>{reward.amount}</p>
                        <p className={`${reward.status === 1 ? 'text-slate-500' : 'text-slate-300'} text-sm`}>left</p>
                      </div>
                    </div>
                      <p className={`${reward.status === 1 ? 'text-slate-500' : 'text-slate-400'} leading-7`}>{reward.description}</p>
                    </div>
                  </div>
              
                </label>
                  
                  {rewardSelected === reward.id && 
                    <div className='col-span-full border-t-2 px-6 py-6 flex justify-between items-center'>
                      <h1 className='text-grey-custom-400'>Enter your pledge</h1>
                      <div className='flex gap-5'>
                        <div className='relative'>
                          <p className='text-slate-400 absolute top-[25px] left-6 '><FaDollarSign /></p>
                          <input type="number" className='border text-black font-bold pl-12 border-slate-300 text-base md:text-lg py-4 px-10 rounded-full w-[130px]' />
                        </div>
                        <Button isButton isMedium isPrimary>Continue</Button>
                      </div>
                    </div>
                  }
                </div>
              )
            })}

          </div>
        </div>
    </>
    )
}

export default Modal