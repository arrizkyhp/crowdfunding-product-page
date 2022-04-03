import React from 'react'
import CurrencyFormat from 'react-currency-format';
import {useContext, useEffect, useRef } from 'react';
import ModalContext from 'context/modal/ModalContext';
import closeButton from 'assets/images/icon-close-modal.svg'
import checkIcon from 'assets/images/icon-check.svg'
import { FaDollarSign } from 'react-icons/fa'
import Button from './Button';
import InputPledge from './InputPledge';
import RadioButton from './RadioButton';

const Modal = ({data}) => {
    const ref = useRef()
    var { modal, modal_success, rewardSelected, dispatch } = useContext(ModalContext)
   
    const handleCloseModal = () =>  {
      dispatch({
        type: 'SWITCH_MODAL'
      })
    }

    const handleSuccesModal = () => {
      function setModal() {
        dispatch({
          type: 'SWITCH_SUCCESS_MODAL',
        })
        window.scrollTo({top: 0, behavior: 'smooth'})
      }
     setTimeout(setModal, 500)
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


      // Modal Succes
      if (modal_success) {
        return (
          <>
            <div className={`bg-black w-full h-screen fixed top-0 z-10 transition-opacity delay-200  ${modal ? "inline-block opacity-30" : "h-0 opacity-0"}`}></div>
            <div className={`flex-col gap-x-6 z-10 items-center md:text-white absolute md:transition-all ease-linear delay-200  bg-slate-600 md:bg-white top-[0px] inset-x-0 rounded-xl px-10 py-12  ${modal ? "flex md:top-[0px] " : "hidden md:top-[-200px]"}`} ref={ref}>
            <img src={checkIcon} alt="success" className='w-20 mb-10' />
            <h1 className='font-bold text-center text-3xl text-slate-900'>Thanks for your support!</h1>
            <p className='text-slate-500 text-base leading-7 text-center my-6'>
              Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
              an email once our campaign is completed.
            </p>
            <Button isButton isSmall isPrimary onClick={handleCloseModal}>Got it!</Button>
            
            </div>
          </>

        )
      }


  // Default Modal
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
                <div key={reward.id} className={`${reward.status === 1 ? ' border-slate-300' : 'cursor-not-allowed border-slate-200'} ${rewardSelected === reward.id ? 'border-2 border-blue-button-primary' : 'border-slate-300'} border-2 rounded-lg`}>
                  <RadioButton 
                    id={reward.id} 
                    status={reward.status} 
                    amount={reward.amount} 
                    name={reward.name} 
                    pledge={reward.pledge} 
                    description={reward.description}
                  />
                  {rewardSelected === reward.id && 
                    <div className='col-span-full border-t-2 px-6 py-6 flex justify-between items-center'>
                      <h1 className='text-grey-custom-400'>Enter your pledge</h1>
                      <div className='flex gap-5'>
                        <div className='relative'>
                          <p className='text-slate-400 absolute top-[25px] left-5 '><FaDollarSign /></p>
                          <InputPledge pledge={reward.pledge} />
                        </div>
                        <Button isButton isMedium isPrimary onClick={handleSuccesModal}>Continue</Button>
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