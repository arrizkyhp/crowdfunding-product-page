import PropTypes from 'prop-types';
import { useState } from 'react'
 
const InputPledge = ({pledge}) => {
    let [value, setValue] = useState("")
    const handleInput = (e) => {
        let inputNumber = e.target.value;
  
        setValue(inputNumber)
        
    }

    const handleInputBlur = (e) => {
        if (value < pledge) {
            setValue(pledge)
        }
    }

  return (
    <input 
        type="number" 
        placeholder={pledge} 
        className='border text-black font-bold pl-10 outline-2 outline-blue-button-primary border-slate-300 text-base md:text-lg py-4 pr-5 rounded-full w-[130px]' 
        value={value} 
        onChange={handleInput} 
        onBlur={handleInputBlur}
    />
  )
}

InputPledge.propTypes = {
    pledge: PropTypes.number
}

export default InputPledge