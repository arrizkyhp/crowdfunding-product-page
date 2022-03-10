import Button from 'components/Button';
import CurrencyFormat from 'react-currency-format';
import { useContext } from 'react';
import ModalContext from 'context/modal/ModalContext';

const ProjectCard = ({ reward }) => {

    const {modal, dispatch} = useContext(ModalContext)

    const handleSelect = (e) => {
        dispatch({
            type: 'SELECT_REWARD',
            payload: e
          })
    }

  return (
    <div className={`border ${reward.status === 1 ? 'border-slate-300' : 'border-slate-200'} rounded-lg p-7 md:p-8 w-full mb-8 last:mb-0`}>
        <div className="flex flex-col md:flex-row justify-between mb-6">
            <h1 className={`text-base md:text-xl font-bold ${reward.status === 1 ? '' : 'text-slate-400'}`}>{reward.name}</h1>
            <p className={`text-base ${reward.status === 1 ? 'text-blue-button-primary' : 'text-blue-button-primary-100'} font-medium`}>Pledge  <CurrencyFormat value={reward.pledge} displayType={'text'} thousandSeparator prefix={'$'}/>  or more</p>
        </div>
        <p className={`${reward.status === 1 ? 'text-slate-500' : 'text-slate-300'} text-sm md:text-base leading-6 md:leading-8 mb-7`}>{reward.description}</p>
        <div className='flex w-44 md:w-full flex-col gap-6 md:gap-0 md:flex-row justify-between'>
            <div className='flex items-center'>
                <p className={`font-bold text-4xl mr-2 ${reward.status === 1 ? '' : 'text-slate-400'}`}>{reward.amount}</p>
                <p className={`${reward.status === 1 ? 'text-slate-500' : 'text-slate-300'}`}>left</p>
            </div>
            {reward.status === 1 ? 
                <Button isButton isPrimary isMedium children="Select Reward" onClick={() => handleSelect(reward.id)}/> :
                <Button isButton isDisabled isMedium children="Out of stock"/>
            }
        </div>
  </div>
  )
}

export default ProjectCard