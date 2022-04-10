import React from 'react'
import {useContext} from 'react';
import propTypes from 'prop-types'
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

    if (props.noReward) {
      return (
        <label htmlFor="no-reward"  className={`py-8 px-6 pb-10 grid grid-cols-[fit-content(200px)_1fr] grid-rows-[fit-content(200px)_1fr]  gap-x-5 gap-y-3 justify-start items-start cursor-pointer  border-2 rounded-lg border-slate-300 ${rewardSelected === "" ? 'border-2 border-blue-button-primary' : 'border-slate-300'}`}>
              <input type="radio" id='no-reward' name='reward' value="1" className='col-start-1 col-end-2 row-start-1 row-end-2 self-center justify-self-center w-11 h-7 border-2 'onChange={() => handleCheckedModal("")} />
              <span className='text-black text-[17px] font-bold '>Pledge with no reward</span>
              <span className='text-grey-custom-500 leading-7 row-end-3 col-start-1 col-end-4 md:col-start-2 md:col-end-4'> Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</span>
        </label>
      )
    }

  return (
    <label htmlFor={props.id} key={props.id} className={`py-8 px-6 pb-5 grid grid-cols-[fit-content(200px)_1fr] grid-rows-[1fr_fit-content(200px)]  gap-x-5 gap-y-4 justify-start items-start ${props.status === 1 ? 'cursor-pointer' : 'cursor-not-allowed '}`} >
      <input type="radio" id={props.id} name='reward' value={props.id} className='w-11 h-7 border-2 col-start-1 col-end-2 row-start-1 row-end-2 self-center justify-self-center ' disabled={props.status === 1 ? '' : 'disabled'} onChange={() => handleCheckedModal(props.id)} checked={rewardSelected === props.id ? true : false }/>
      {/* <div className='grid grid-cols-[1fr_fit-content(200px)] grid-rows-[fit-content(200px)_1fr_1fr] md:grid-rows-[fit-content(200px)_1fr] justify-between items-start'> */}
        <div className="flex gap-x-4 flex-col md:flex-row">
          <h2 className={`text-black text-[17px] ${props.status === 1 ? '' : 'text-slate-400'} font-bold`}>{props.name}</h2>
          <p className={`${props.status === 1 ? 'text-blue-button-primary' : 'text-blue-button-primary-100'} font-medium`}>Pledge <CurrencyFormat value={props.pledge} displayType={'text'} thousandSeparator prefix={'$'} /> or more</p>
        </div>
        <div className="flex gap-2 items-center col-start-1 col-end-4  md:col-start-3 md:col-end-4 row-start-3 row-end-4 md:row-start-1 md:row-end-2">
          <p className={`text-black font-bold text-lg ${props.status === 1 ? '' : 'text-slate-400'}`}>{props.amount}</p>
          <p className={`${props.status === 1 ? 'text-slate-500' : 'text-slate-300'} text-sm`}>left</p>
        </div>
        <p className={`${props.status === 1 ? 'text-slate-500' : 'text-slate-400'} leading-7 row-start-2 row-end-3 col-start-1 col-end-4 md:col-start-2 md:col-end-4`}>{props.description}</p>
      {/* </div> */}
  </label>
  )
}

RadioButton.propTypes = {
  id: propTypes.string,
  status: propTypes.number,
  name: propTypes.string,
  amount: propTypes.number,
  pledge: propTypes.number,
  description: propTypes.string,
  noReward: propTypes.bool
}

export default RadioButton