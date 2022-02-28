import Button from 'components/Button';
import CurrencyFormat from 'react-currency-format';

const ProjectCard = ({ reward }) => {
    console.log(reward)
  return (
    <div className={`border ${reward.status === 1 ? 'border-slate-300' : 'border-slate-200'} rounded-lg p-8 w-full mb-8`}>
        <div className="flex justify-between mb-6">
            <h1 className={`text-xl font-bold ${reward.status === 1 ? '' : 'text-slate-400'}`}>{reward.name}</h1>
            <p className={`text-base ${reward.status === 1 ? 'text-blue-button-primary' : 'text-blue-button-primary-100'} font-medium`}>Pledge  <CurrencyFormat value={reward.pledge} displayType={'text'} thousandSeparator prefix={'$'}/>  or more</p>
        </div>
        <p className={`${reward.status === 1 ? 'text-slate-500' : 'text-slate-300'} text-base leading-8 mb-7`}>{reward.description}</p>
        <div className='flex w-full justify-between'>
            <div className='flex items-center'>
                <p className={`font-bold text-4xl mr-2 ${reward.status === 1 ? '' : 'text-slate-400'}`}>{reward.amount}</p>
                <p className={`${reward.status === 1 ? 'text-slate-500' : 'text-slate-300'}`}>left</p>
            </div>
            {reward.status === 1 ? 
                <Button isButton isPrimary isMedium children="Select Reward" /> :
                <Button isButton isDisabled isMedium children="Out of stock"/>
            }
        </div>
  </div>
  )
}

export default ProjectCard