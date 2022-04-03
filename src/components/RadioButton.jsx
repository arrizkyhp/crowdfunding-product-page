import React from 'react'
import {useContext} from 'react';
import ModalContext from 'context/modal/ModalContext'
import CurrencyFormat from 'react-currency-format';

const RadioButton = (props) => {
    var {rewardSelected, dispatch} = useContext(ModalContext)
    const handleCheckedModal = (e) => {
        const newReward = e
        dispatch({
          type: 'SELECT_RADIO',
          payload: newReward
        })
      }
  return (
    <label htmlFor={props.id} key={props.id} className={`${props.status === 1 ? 'cursor-pointer' : 'cursor-not-allowed '}`} >
    <div className="py-8 px-6 pb-0 grid grid-cols-[fit-content(200px)_1fr] grid-rows-[1fr_fit-content(200px)]  gap-5 justify-start items-start ">
      <input type="radio" id={props.id} name='reward' value={props.id} className='w-11 h-7 border-2' disabled={props.status === 1 ? '' : 'disabled'} onChange={() => handleCheckedModal(props.id)} checked={rewardSelected === props.id ? true : false }/>
      <div>
      <div className='flex justify-between items-start'>
        <div className="flex gap-4">
          <h2 className={`text-black text-[17px] ${props.status === 1 ? '' : 'text-slate-400'} mb-4 font-bold`}>{props.name}</h2>
          <p className={`${props.status === 1 ? 'text-blue-button-primary' : 'text-blue-button-primary-100'} font-medium`}>Pledge <CurrencyFormat value={props.pledge} displayType={'text'} thousandSeparator prefix={'$'} /> or more</p>
        </div>
        <div className="flex gap-1 items-center">
          <p className={`text-black font-bold ${props.status === 1 ? '' : 'text-slate-400'}`}>{props.amount}</p>
          <p className={`${props.status === 1 ? 'text-slate-500' : 'text-slate-300'} text-sm`}>left</p>
        </div>
      </div>
        <p className={`${props.status === 1 ? 'text-slate-500' : 'text-slate-400'} leading-7`}>{props.description}</p>
      </div>
    </div>

  </label>
  )
}

export default RadioButton